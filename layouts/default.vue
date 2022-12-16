<script setup lang="ts">
const { ctrl_j } = useMagicKeys({
	passive: false,
	onEventFired(e) {
		const isCtrl_j = e.ctrlKey && e.key === 'j'
		if (isCtrl_j && e.type === 'keydown')
			e.preventDefault()
	},
})

whenever(ctrl_j, () => {
	// eslint-disable-next-line no-console
	console.log('Ctrl j')
})
</script>

<template>
	<Header />
	<main class="relative min-h-[calc(100vh-4rem)] flex flex-col text-white overflow-x-clip">
		<slot />
	</main>
	<Footer />
</template>

<style>
::-webkit-scrollbar {
    @apply w-2 h-2 bg-transparent
}
::-webkit-scrollbar-track {
    background: rgba(12 12 12 0);
}
::-webkit-scrollbar-thumb {
    @apply rounded-full;
    background: rgb(24 24 27);
}
</style>
