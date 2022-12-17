<script setup lang="ts">
import type { Lyra } from '@lyrasearch/lyra'
import { search as lyraSearch } from '@lyrasearch/lyra'

const props = defineProps<{
	transformer: (...args: any[]) => any[]
	db: Lyra<LyraSchema>
	data: any[]
	placeholder?: string
}>()

const emits = defineEmits(['optionsToggled'])

const {
	transformer,
	db,
	data,
} = toRefs(props)

const isOptionsActive = ref(false)
const optionsEl = ref<HTMLDivElement | null>(null)
const input = ref<HTMLInputElement | null>(null)
const search = ref('')
const searchResults = ref<any[]>([])
const currentSelection = ref('')
useFocus(input, { initialValue: true })

const toggleOptions = () => {
	isOptionsActive.value = !isOptionsActive.value
	emits('optionsToggled', isOptionsActive.value)
}

const handleSelect = (selection: string) => {
	currentSelection.value = selection
	toggleOptions()
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
	if (!newVal)
		return

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
		<div class="text-gray-400 w-full rounded hover:bg-[#18181b] py-1" @click="toggleOptions">
			<p>
				{{ currentSelection ? currentSelection : (placeholder ? placeholder : 'Empty') }}
			</p>
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
			<ul class="p-1 text-sm">
				<!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
				<SelectOption v-for="option in transformer(data)" v-if="searchResults.length <= 0" :key="option" @click="() => handleSelect(option)">
					{{ option }}
				</SelectOption>
				<SelectOption v-for="searchOption in transformer(searchResults)" v-else :key="searchOption" @click="() => handleSelect(searchOption)">
					{{ searchOption }}
				</SelectOption>
			</ul>
		</div>
	</div>
</template>

<style scoped>

</style>
