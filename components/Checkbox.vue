<script setup lang="ts">
const isChecked = ref(false)

const toggleChecked = () => {
	isChecked.value = !isChecked.value
}
</script>

<template>
	<Icon
		:name="isChecked ? 'material-symbols:check-box' : 'material-symbols:check-box-outline-blank'"
		@click="toggleChecked"
	/>
</template>

<style scoped>

</style>
