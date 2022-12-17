<script setup lang="ts">
import type { Lyra } from '@lyrasearch/lyra'
import { search as lyraSearch } from '@lyrasearch/lyra'

const props = defineProps<{
	transformer: (...args: any[]) => any[]
	db: Lyra<LyraSchema>
	data: any[]
	placeholder?: string
	isMultiselect?: boolean
}>()

const emits = defineEmits(['optionsToggled'])

const {
	transformer,
	db,
	data,
	isMultiselect,
} = toRefs(props)

const isOptionsActive = ref(false)
const optionsEl = ref<HTMLDivElement | null>(null)
const input = ref<HTMLInputElement | null>(null)
const search = ref('')
const searchResults = ref<any[]>([])
const currentSelection = ref<string[]>([])
useFocus(input, { initialValue: true })

const toggleOptions = () => {
	isOptionsActive.value = !isOptionsActive.value
	emits('optionsToggled', isOptionsActive.value)
}

const handleSelect = (selection: string) => {
	if (currentSelection.value.includes(selection)) {
		currentSelection.value.splice(currentSelection.value.indexOf(selection), 1)
		return
	}
	if (!isMultiselect?.value) {
		currentSelection.value[0] = selection
		toggleOptions()
		return
	}
	currentSelection.value.push(selection)
	currentSelection.value.sort()
}

const handleEscape = () => {
	if (!isOptionsActive.value)
		return
	isOptionsActive.value = false
	emits('optionsToggled', false)
}

const { escape } = useMagicKeys({
	passive: false,
	onEventFired(e) {
		const isEscape = e.key === 'escape'
		if (isEscape && e.type === 'keydown')
			e.preventDefault()
	},
})

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

	if (dataHits.length && !dataHits.some(data => !data))
		searchResults.value = [...new Set(dataHits)]
	else
		searchResults.value = []
})

whenever(escape, handleEscape)
onClickOutside(optionsEl, toggleOptions)
</script>

<template>
	<div class="relative w-full">
		<div class="text-gray-400 w-full rounded hover:bg-[#18181b] p-1" @click="toggleOptions">
			<div v-if="!isMultiselect">
				<p v-if="currentSelection.length > 0" class="text-white">
					{{ currentSelection[0] }}
				</p>
				<p v-else>
					{{ placeholder ? placeholder : 'Empty' }}
				</p>
			</div>
			<ul v-else class="flex flex-wrap gap-2">
				<p v-if="currentSelection.length <= 0">
					{{ placeholder ? placeholder : 'Empty' }}
				</p>
				<li v-for="selection in currentSelection" v-else :key="selection" class="p-1 bg-[#141418] text-white rounded w-fit text-xs border-[0.5px] border-white/20">
					{{ selection }}
				</li>
			</ul>
		</div>
		<div v-if="isOptionsActive" ref="optionsEl" class="absolute top-0 z-10 w-full rounded bg-[#0a0a06] border-[0.5px] border-white/20">
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
					:key="option" :value="option"
					:is-multiselect="isMultiselect"
					:is-option-selected="currentSelection.includes(option)"
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

</style>
