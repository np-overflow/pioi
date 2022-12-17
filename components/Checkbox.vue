<script setup lang="ts">
const emits = defineEmits(['checked'])

const isChecked = ref(false)

const toggleChecked = () => {
	isChecked.value = !isChecked.value
	emits('checked', isChecked.value)
}
</script>

<template>
	<Icon
		:name="isChecked ? 'material-symbols:check-box' : 'material-symbols:check-box-outline-blank'"
		@click="toggleChecked"
	/>
</template>
