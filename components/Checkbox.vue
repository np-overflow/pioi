<script setup lang="ts">
const emits = defineEmits(['checked'])

const isChecked = ref(false)

const { enter } = useMagicKeys()

const toggleChecked = () => {
	isChecked.value = !isChecked.value
	emits('checked', isChecked.value)
}

whenever(enter, toggleChecked)
</script>

<template>
	<Icon
		size="16"
		tabindex="0"
		:name="isChecked ? 'material-symbols:check-box' : 'material-symbols:check-box-outline-blank'"
		@click="toggleChecked"
	/>
</template>
