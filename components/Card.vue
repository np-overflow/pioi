<script setup lang="ts">
const target = ref(null)
</script>

<template>
	<div ref="target" class="glow flex flex-col relative rounded-md bg-[#444]">
		<div class="content">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.glow::before {
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
