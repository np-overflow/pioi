<script setup lang="ts">
const target = ref(null)

useEventListener(target, 'mousemove', (e) => {
	for (const card of target.value.getElementsByClassName('glow')) {
		const rect = card.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top

		card.style.setProperty('--x', `${x}px`)
		card.style.setProperty('--y', `${y}px`)
	}
})
</script>

<template>
	<div ref="target">
		<slot />
	</div>
</template>

<style scoped>

</style>
