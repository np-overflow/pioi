<script setup lang="ts">
const { y } = useWindowScroll()
</script>

<template>
	<div class="absolute bg-[#111] left-1/2 -translate-x-1/2 w-[80%] aspect-square rounded-full border-white/30" :style="{ '--pageScroll': `${y}px` }" />
</template>

<style scoped>
div {
    /* top: calc(-50% + var(--pageScroll));  */
    box-shadow: 0 -2px 6px hsl(0deg 0% 100% / 17%), 0 5px 18px rgb(0 0 0 / 40%), 0 4px 40px 8px rgb(0 0 0 / 40%), 0 1px 4px -1px rgb(0 0 0 / 30%), inset 0 0 0 0.3px hsl(0deg 0% 100% / 30%), 0 0 0 0.5px hsl(0deg 0% 100% / 40%);
}
</style>
