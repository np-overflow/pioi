<script setup lang="ts">
const props = withDefaults(defineProps<{
	isStyled?: boolean
}>(), {
	isStyled: false,
})

const {
	isStyled,
} = toRefs(props)

const target = ref(null)
</script>

<template>
	<div ref="target" class="glow card" :class="isStyled ? 'styled' : ''">
		<div class="content">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.glow::before {
    @apply content-default absolute inset-0;
    background: radial-gradient(24rem circle at var(--x) var(--y),hsla(0,0%,100%,.7),transparent 40%);
    border-radius: inherit;
}

.card {
    @apply flex flex-col relative rounded-md bg-[#18181b];
}

.styled {
    @apply bg-[#0c0c0c];
    box-shadow: 0 -2px 6px hsl(0deg 0% 100% / 17%), 0 5px 18px rgb(0 0 0 / 40%), 0 4px 40px 8px rgb(0 0 0 / 40%), 0 1px 4px -1px rgb(0 0 0 / 30%), inset 0 0 0 0.3px hsl(0deg 0% 100% / 30%), 0 0 0 0.5px hsl(0deg 0% 100% / 40%);
}

.content {
    @apply m-px h-full text-white text-xs bg-[#0c0c0c];
    border-radius: inherit;
    z-index: 1000;
}
</style>
