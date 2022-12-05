<script setup lang="ts">
const target = ref<Nullable<HTMLElement>>(null)

useEventListener(target, 'mousemove', (e: MouseEvent) => {
	const parent = target.value

	if (parent == null)
		return

	for (const card of parent.getElementsByClassName('glow') as HTMLCollectionOf<HTMLElement>) {
		const rect = card.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top

		card.style.setProperty('--x', `${x}px`)
		card.style.setProperty('--y', `${y}px`)
	}
})
useEventListener(target, 'mouseleave', (e: MouseEvent) => {
	const parent = target.value

	if (parent == null)
		return

	for (const card of parent.getElementsByClassName('glow') as HTMLCollectionOf<HTMLElement>) {
		const x = NaN
		const y = NaN

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
