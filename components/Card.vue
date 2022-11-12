<script setup lang="ts">
const target = ref(null)

// TODO: Rewrite location logic to a singular wrapper to resolve performance issues
// const { elementX, elementY } = useMouseInElement(target)
// :style="{ '--x': `${elementX}px`, '--y': `${elementY}px` }"
</script>

<template>
	<div ref="target" class="card flex relative rounded-md bg-[#444]">
		<div class="content">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.card::before {
    @apply content-default absolute inset-0;
    background: radial-gradient(16rem circle at var(--x) var(--y),hsla(0,0%,100%,.5),transparent 40%);
    border-radius: inherit;
}

.content {
    @apply m-px h-full text-white text-xs bg-base-100;
    border-radius: inherit;
    z-index: 1000;
}
</style>
