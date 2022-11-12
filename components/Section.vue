<script setup lang="ts">
const props = withDefaults(defineProps<{
	title?: string
}>(), {
	title: 'Lorem Ipsum',
})

const {
	title,
} = toRefs(props)
</script>

<template>
	<div ref="target" class="flex lg:h-screen w-full justify-center">
		<div ref="section" class="w-full lg:w-fit m-auto section h-fit relative overflow-hidden mx-2 px-2 xs:px-3 sm:px-12 py-4 sm:py-8 flex rounded-xl border-gray-300 bg-[#444]">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.section {
    box-shadow: 0 -2px 6px hsl(0deg 0% 100% / 17%), 0 5px 18px rgb(0 0 0 / 40%), 0 4px 40px 8px rgb(0 0 0 / 40%), 0 1px 4px -1px rgb(0 0 0 / 30%), inset 0 0 0 0.3px hsl(0deg 0% 100% / 30%), 0 0 0 0.5px hsl(0deg 0% 100% / 40%);
	background: linear-gradient(177.75deg,rgba(26,27,30,.9) 1.89%,rgba(12,13,17,.5) 98.11%);
}
</style>
