<script setup lang="ts">
import { create, insert } from '@lyrasearch/lyra'
import * as z from 'zod'

const {
    public: {
        turnstileSiteKey
    }
} = useRuntimeConfig()

// #region Refs & Emits
const emits = defineEmits(['exit'])

const modal = ref<HTMLElement | null>(null)
const nameField = ref<HTMLInputElement | null>(null)

const form = ref<Record<string, any>>({
	name: '',
	email: '',
	school: '',
	workshops: [],
	joining: true,
    vegetarian: false,
})

const consentedToTOC = ref(false)
const isOtherDialogsActive = ref(false)
// #endregion

// #region Form
const schema = z.object({
	name: z.string().min(1, 'Required!'),
	email: z.string().email({ message: 'Invalid email' }),
	school: z.string({ required_error: 'Required!' }).min(1, 'Required!'),
	workshops: z.string().array().optional(),
	joining: z.boolean(),
    vegetarian: z.boolean(),
}).strict()

const errors = ref<Record<string, string>>({})

const handleChange = async(key: string, input: any) => {
	errors.value[key] = await getZodError(schema.shape[key as keyof typeof schema.shape], input)
	form.value[key] = input
}

const handleSubmission = async (event: Event) => {
	if (!consentedToTOC.value) return errors.value.validations = 'You must agree to the TOC'

	errors.value = await getZodErrors(schema, form.value)

	if (Object.keys(errors.value).length > 0) return

    const turnstile = new FormData(event.currentTarget as HTMLFormElement).get('cf-turnstile-response')

	const { data, error } = await useFetch('/api/create', {
		method: 'POST',
		body: {
            ...form.value,
            turnstile
        },
	})

    if (error.value) return errors.value.validations = error.value?.statusMessage || 'Something went wrong'
	if (data.value?.statusCode === 200) emits('exit')
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

onBeforeUnmount(() => {
    document.querySelector('#cf-script')?.remove()
})

onMounted(async () => {
    const newScript = document.createElement('script');
    newScript.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    newScript.id = 'cf-script'
    document.body.appendChild(newScript);

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
		<GlowWrapper class="relative w-full max-w-2xl xl:max-w-3xl mt-12 sm:mt-32 md:mt-36 lg:mt-48">
			<div ref="modal" class="modal text-white relative flex flex-col gap-2 rounded-lg shadow-lg backdrop-blur-lg bg-[#0c0c0c] p-4 sm:p-6 z-40">
				<!-- <h1 class="text-xl sm:text-3xl font-bold sm:mb-4">
					Registration Form
				</h1>
                <form @submit.prevent="handleSubmission">
                    <ul class="space-y-1 sm:mb-2">
                        <FormField header="Name" icon="gg:rename">
                            <TextInput
                                tabindex="0"
                                ref="nameField"
                                placeholder="Enter your name..."
                                :error="errors.name"
                                @input-change="(name) => handleChange('name', name)"
                            />
                        </FormField>
                        <FormField header="Email" icon="ic:round-alternate-email">
                            <EmailInput
                                placeholder="Enter your email..."
                                :error="errors.email"
                                @input-change="(email) => handleChange('email', email)"
                            />
                        </FormField>
                        <FormField header="School" icon="material-symbols:expand-circle-down-rounded">
                            <SingleSelect
                                placeholder="Select your school..."
                                :db="schoolsDb"
                                :data="schools"
                                :error="errors.school"
                                :transformer="(schools: any[]) => schools.map(({ name }) => name)"
                                @options-toggled="(isOptionsActive) => isOtherDialogsActive = isOptionsActive"
                                @option-selected="(school) => handleChange('school', school[0])"
                            />
                        </FormField>
                        <FormField header="Workshops" icon="ph:list-bullets-bold">
                            <MultiSelect
                                placeholder="Leave empty if you do not wish to participate"
                                :db="workshopsDb"
                                :data="workshops"
                                :transformer="(workshops: any[]) => workshops.map(({ name }) => name)"
                                @options-toggled="(isOptionsActive) => isOtherDialogsActive = isOptionsActive"
                                @option-selected="(workshops) => handleChange('workshops', workshops)"
                            />
                        </FormField>
                        <FormField header="Vegetarian" icon="bx:leaf">
                            <div class="pl-0 sm:pl-1 p-1">
                                <Checkbox @checked="(value) => handleChange('vegetarian', value)" />
                            </div>
                        </FormField>
                    </ul>
                    <div class="relative w-full p-1">
                        <span class="absolute w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] -left-4 sm:-left-6 border-t-[0.5px] border-white/20"></span>
                    </div>
                    <div class="relative flex text-white text-sm lg:text-base font-medium min-h-8 justify-start items-center gap-4 sm:mt-2">
                        <div class="flex items-center justify-start text-gray-300 gap-x-2 sm:mr-0 sm:min-w-[20%]">
                            <Checkbox class="" @checked="(value) => consentedToTOC = value" />
                        </div>
                        <p class="text-xs text-right">
                            I agree to the
                            <NuxtLink to="/terms-and-conditions.pdf" target="_blank" class="link text-cyan-400">
                                terms & conditions
                            </NuxtLink>
                            of the event
                        </p>
                        <span v-if="errors.validations" class="absolute flex items-center -bottom-1/2 sm:top-1/2 sm:-translate-y-1/2 right-0 text-xs sm:px-1 text-error">
						    {{ errors.validations }}
					    </span>
                    </div>

                    <div class="flex flex-col-reverse md:flex-row justify-between items-center mt-6">
                        <Button class="w-fit mt-4" type="submit">
                            Join!
                        </Button>

                        <div class="cf-turnstile" :data-sitekey="turnstileSiteKey"></div>
                    </div>
                </form> -->
                <div class="inline-flex justify-center items-center">
                    <h1 class="py-24 text-xl sm:text-3xl font-bold">Registration closed!</h1>
                </div>
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
