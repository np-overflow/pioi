<script setup lang="ts">
import { create, insert } from '@lyrasearch/lyra'
import * as z from 'zod'
// #region Refs & Emits
const emits = defineEmits(['exit'])

const modal = ref<HTMLElement | null>(null)
const nameField = ref<HTMLInputElement | null>(null)

const nameInput = ref('')
const emailInput = ref('')
const schoolSelection = ref<string[]>([])
const workshopsSelection = ref<string[]>([])
const isJoining = ref(false)

const consentedToTOC = ref(false)
const isOtherDialogsActive = ref(false)
// #endregion

// #region Form
const schema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email({ message: 'Invalid email' }),
	school: z.string({ required_error: 'Select your school' }).min(1, 'Select your school'),
	workshops: z.string().array().optional(),
	joining: z.boolean(),
}).strict()

const errors = ref<Record<string, string>>({})

const handleSubmission = async () => {
	if (!consentedToTOC.value) {
		errors.value.toc = 'You must agree to the TOC'
		return
	}

	const formData = {
		name: nameInput.value,
		email: emailInput.value,
		school: schoolSelection.value[0],
		workshops: workshopsSelection.value,
		joining: isJoining.value,
	}

	const result = await schema.safeParseAsync(formData)

	if (!result.success) {
		errors.value = result.error.issues.reduce<Record<string, string>>((prev, currentIssue) => {
			prev[currentIssue.path.toString()] = currentIssue.message
			return prev
		}, {})
	}
	else {
		errors.value = {}
		const res = await $fetch('/api/create', {
			method: 'POST',
			body: formData,
		})

		console.log(res)

		if (res.status === 200) emits('exit')
	}
}
// #endregion

// #region Search
const schoolsDb = ref(create({
	schema: {
		_id: 'number',
		name: 'string',
	},
}))

const workshopsDb = ref(create({
	schema: {
		_id: 'number',
		name: 'string',
	},
}))

const schools = ref<any[]>([])
const workshops = ref<any[]>([])

onMounted(async () => {
	const { schools: schoolsData, workshops: workshopsData } = await queryContent('form').findOne()

	if (!schoolsData || !workshopsData)
		return

	for (const { name, id } of schoolsData) {
		insert(schoolsDb.value, {
			_id: id,
			name,
		})
	}

	for (const { name, id } of workshopsData) {
		insert(workshopsDb.value, {
			_id: id,
			name,
		})
	}

	schools.value = schoolsData
	workshops.value = workshopsData
})
// #endregion

// #region Interactivity
const { escape } = useMagicKeys({
	passive: false,
	onEventFired(e) {
		const isEscape = e.key === 'escape'
		if (isEscape && e.type === 'keydown')
			e.preventDefault()
	},
})

const handleEscape = () => {
	if (!isOtherDialogsActive.value)
		emits('exit')
}

useFocus(nameField, { initialValue: true })
whenever(escape, handleEscape)
onClickOutside(modal, () => emits('exit'))
// #endregion
</script>

<template>
	<div
		class="
        fixed inset-0
        w-screen h-screen
        px-4
        z-[100]
        bg-black/70
        backdrop-blur-md
        flex justify-center"
	>
		<GlowWrapper class="relative w-full max-w-3xl my-auto">
			<div ref="modal" class="modal text-white relative flex flex-col gap-2 rounded-lg shadow-lg backdrop-blur-lg bg-[#0c0c0c] p-4 sm:p-6 z-40">
				<h1 class="text-xl sm:text-3xl font-bold sm:mb-4">
					Registration Form
				</h1>
				<ul class="space-y-1 sm:mb-4">
					<RegistrationFormField header="Name" icon="gg:rename">
						<TextInput
							ref="nameField"
							placeholder="Enter your name..."
							:error="errors.name"
							@input-change="(input) => nameInput = input"
						/>
					</RegistrationFormField>
					<RegistrationFormField header="Email" icon="ic:round-alternate-email">
						<EmailInput
							placeholder="Enter your email..."
							:error="errors.email"
							@input-change="(input) => emailInput = input"
						/>
					</RegistrationFormField>
					<RegistrationFormField header="School" icon="material-symbols:expand-circle-down-rounded">
						<Select
							placeholder="Select your school..."
							:db="schoolsDb"
							:data="schools"
							:error="errors.school"
							:transformer="(schools: any[]) => schools.map(({ name }) => name)"
							@options-toggled="(isOptionsActive) => isOtherDialogsActive = isOptionsActive"
							@option-selected="(school) => schoolSelection = school"
						/>
					</RegistrationFormField>
					<RegistrationFormField header="Workshops" icon="ph:list-bullets-bold">
						<Select
							placeholder="Leave empty if you do not wish to participate"
							is-multiselect
							:db="workshopsDb"
							:data="workshops"
							:transformer="(workshops: any[]) => workshops.map(({ name }) => name)"
							@options-toggled="(isOptionsActive) => isOtherDialogsActive = isOptionsActive"
							@option-selected="(workshops) => workshopsSelection = workshops"
						/>
					</RegistrationFormField>
					<RegistrationFormField header="Joining" icon="material-symbols:check-box">
						<div class="pl-0 sm:pl-1 p-1">
							<Checkbox @checked="(value) => isJoining = value" />
						</div>
					</RegistrationFormField>
				</ul>
				<div class="relative flex items-center gap-2">
					<Checkbox class="min-w-fit" @checked="(value) => consentedToTOC = value" />
					<p class="text-xs text-right">
						I agree to the
						<NuxtLink to="/terms-and-conditions.pdf" target="_blank" class="link text-cyan-400">
							terms & conditions
						</NuxtLink>
						of the event
					</p>
					<span class="absolute top-1/2 right-0 -translate-y-1/2 text-xs px-1 text-[#fa5152]">
						{{ errors.toc }}
					</span>
				</div>
				<Button class="w-fit mt-4" @click="handleSubmission">
					Join!
				</Button>
			</div>
		</GlowWrapper>
	</div>
</template>

<style scoped>
.link {
	@apply inline-block relative;
}

.link::after {
	@apply content-default absolute rounded-full w-full scale-0 h-0.5 bottom-0 left-0 bg-cyan-400 origin-bottom-right transition-transform duration-300 ease-out;
}

.link:hover::after {
	@apply scale-100 origin-bottom-left
}

.modal {
    box-shadow: 0 -2px 6px hsl(0deg 0% 100% / 17%), 0 5px 18px rgb(0 0 0 / 40%), 0 4px 40px 8px rgb(0 0 0 / 40%), 0 1px 4px -1px rgb(0 0 0 / 30%), inset 0 0 0 0.3px hsl(0deg 0% 100% / 30%), 0 0 0 0.5px hsl(0deg 0% 100% / 40%);
}
</style>
