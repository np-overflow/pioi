<script setup lang="ts">
import type { Lyra } from '@lyrasearch/lyra'
import { search as lyraSearch } from '@lyrasearch/lyra'

// #region Props & Emits
const props = defineProps<{
	transformer: (...args: any[]) => any[]
	handler: (...args: any[]) => void
	db: Lyra<LyraSchema>
	data: any[]
	currentSelection: string[]
	error?: string
	isMultiselect?: boolean
}>()

const emits = defineEmits(['optionsToggled', 'optionSelected'])

const {
	db,
	data,
	handler,
	isMultiselect
} = toRefs(props)
// #endregion

// #region Refs
const isOptionsActive = ref(false)
const wasEscapeCalled = ref(false)
const wasToggleCalled = ref(false)
const options = ref<HTMLDivElement | null>(null)
const trigger = ref<HTMLDivElement | null>(null)
const input = ref<HTMLInputElement | null>(null)

const search = ref('')
const searchResults = ref<any[]>([])
// #endregion

// #region Handlers
const toggleOptions = () => {
	isOptionsActive.value = !isOptionsActive.value
	wasToggleCalled.value = true
	emits('optionsToggled', isOptionsActive.value)
}

const handleTriggerFocus = (isFocused: boolean) => {
	if (wasToggleCalled.value) return wasToggleCalled.value = false
	if (wasEscapeCalled.value) return wasEscapeCalled.value = false
	if (isFocused && !isOptionsActive.value) return toggleOptions()
}

const handleInputFocus = (isFocused: boolean) => {
	if (isFocused) return
	handleEscape()
	if (shift.value || !tab.value) return
	wasEscapeCalled.value = false
}

const handleEscape = () => {
	if (!isOptionsActive.value) return
	isOptionsActive.value = false
	wasEscapeCalled.value = true
	emits('optionsToggled', false)
}

const handleSelect = (selection: string) => {
	handler.value(selection)
	if (!isMultiselect?.value) handleEscape()
}
// #endregion
// #region Search
watch(search, (newVal) => {
	if (!newVal) {
		searchResults.value = []
		return
	}

	const res = lyraSearch(db.value, {
		term: newVal,
		properties: '*',
	})

	const dataHits = res.hits.map(({ document }) => {
		const { _id } = document
		return data.value[_id]
	})

	if (dataHits.length && !dataHits.some(data => !data)) searchResults.value = [...new Set(dataHits)]
	else searchResults.value = []
})
// #endregion

// #region Interactivity
const { escape, shift, tab } = useMagicKeys()

const { focused: inputFocused } = useFocus(input, { initialValue: true })
const { focused: triggerFocused } = useFocus(trigger)
watch(inputFocused, handleInputFocus)
watch(triggerFocused, handleTriggerFocus)
whenever(escape, handleEscape)
onClickOutside(options, handleEscape)
// #endregion
</script>

<template>
	<div ref="options" class="relative w-full">
		<div ref="trigger" tabindex="0" class="text-gray-400 w-full rounded focus:bg-[#18181b] hover:bg-[#18181b] pl-0 sm:pl-1 p-1" :class="error ? 'error' : ''">
			<slot />
		</div>
		<span v-if="error" class="absolute top-1/2 right-0 -translate-y-1/2 text-xs px-1 text-[#fa5152]">
			{{ error }}
		</span>
		<div v-if="isOptionsActive" class="absolute top-0 z-20 w-full rounded bg-[#0a0a06] border-[0.5px] border-white/20 scale-105 animate-expand">
			<div class="flex items-center px-4 py-2 border-b-[0.5px] border-white/20">
				<Icon name="line-md:search" class="text-white -scale-x-100 mr-2" />
				<input
					ref="input"
					v-model="search"
					class="w-full bg-transparent focus:outline-0 text-sm"
					type="text"
					placeholder="Type to search..."
				>
			</div>
			<ul v-if="searchResults.length <= 0" class="p-1 text-sm">
				<SelectOption
					v-for="option in transformer(data)"
					:key="option"
					:value="option"
					:is-option-selected="currentSelection.includes(option)"
					:is-multiselect="isMultiselect"
					@option-selected="handleSelect"
				/>
			</ul>
			<ul v-else class="p-1 text-sm">
				<SelectOption
					v-for="searchOption in transformer(searchResults)"
					:key="searchOption"
					:value="searchOption"
					:is-option-selected="currentSelection.includes(searchOption)"
					:is-multiselect="isMultiselect"
					@option-selected="handleSelect"
				/>
			</ul>
		</div>
	</div>
</template>

<style scoped>
.error {
    @apply outline-[0.5px] outline outline-[#fa5152] text-[#fa5152] text-xs sm:text-sm;
}
</style>
