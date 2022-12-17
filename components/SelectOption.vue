<script setup lang="ts">
const props = defineProps<{
	isMultiselect?: boolean
	isOptionSelected: boolean
	value: string
}>()

const emits = defineEmits(['optionSelected'])

const {
	value,
} = toRefs(props)

const toggleOptionSelection = () => {
	emits('optionSelected', value.value)
}
</script>

<template>
	<li class="rounded" @click="toggleOptionSelection">
		<div class="flex items-center gap-2 py-2 px-4">
			<Icon v-if="isMultiselect" size="16" :name="isOptionSelected ? 'material-symbols:check-box' : 'material-symbols:check-box-outline-blank'" />
			{{ value }}
		</div>
	</li>
</template>

<style scoped>
li:hover {
    @apply bg-[#141418]
}
</style>
