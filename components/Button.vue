<template>
	<button v-bind="$attrs" class="glow cursor-pointer flex h-fit relative rounded-md bg-[#18181b]">
		<div class="content">
			<slot />
		</div>
	</button>
</template>

<style scoped>
.glow::before {
    @apply content-default absolute inset-0;
    background: radial-gradient(8rem circle at var(--x) var(--y),hsla(0,0%,100%,.5),transparent 40%);
    border-radius: inherit;
}

.content {
    @apply m-px py-2 px-4 text-white flex justify-between items-center gap-2 text-xs bg-[#0c0c0c];
    border-radius: inherit;
    z-index: 10;
}
</style>
