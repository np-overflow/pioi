<script setup lang="ts">
const props = withDefaults(defineProps<{
	skewLeft?: boolean
}>(), {
	skewLeft: false,
})

const {
	skewLeft,
} = toRefs(props)

const skew = computed(() => {
	if (skewLeft.value)
		return '-15deg'
	return '15deg'
})
</script>

<template>
	<div ref="target" class="flex lg:h-screen w-full justify-center">
		<div
			ref="section"
			class="
			section relative rounded-xl
			flex items-center justify-center
			w-full lg:w-fit h-fit
			px-2 xs:px-3 sm:px-10
			py-4 sm:py-8
			mx-2 mb-8
			border-gray-300 bg-[#444]
			transition-all duration-500"
		>
			<span class="block absolute inset-0 z-50 pointer-events-none" />
			<slot />
		</div>
	</div>
</template>

<style scoped>
.section {
    box-shadow: 0 -2px 6px hsl(0deg 0% 100% / 17%), 0 5px 18px rgb(0 0 0 / 40%), 0 4px 40px 8px rgb(0 0 0 / 40%), 0 1px 4px -1px rgb(0 0 0 / 30%), inset 0 0 0 0.3px hsl(0deg 0% 100% / 30%), 0 0 0 0.5px hsl(0deg 0% 100% / 40%);
	background: linear-gradient(177.75deg,rgba(26,27,30,.9) 1.89%,rgba(12,13,17,.5) 98.11%);
}

.section::after {
		filter: blur(32px)
	}
.section::before,
.section::after {
	@apply content-default
	absolute
	hidden sm:block
	w-1/2 h-[105%] lg:h-[110%]
	bg-gradient-to-br from-[#ffbc00] to-[#ff0058]
	rounded-md
	transition-all duration-500
	-z-10;
	transform: skewX(v-bind(skew));
}

.section:hover::before,
.section:hover::after {
	@apply skew-x-0;
	width: calc(100% - 90px);
}

span::before,
span::after {
	@apply content-default
	absolute
	backdrop-blur-sm
	rounded-md
	w-12 h-12
	sm:w-16 sm:h-16
	transition-all duration-500;
	animation: animate 2s ease-in-out infinite;
	box-shadow: 0 -2px 6px hsl(0deg 0% 100% / 17%), 0 5px 18px rgb(0 0 0 / 40%), 0 4px 40px 8px rgb(0 0 0 / 40%), 0 1px 4px -1px rgb(0 0 0 / 30%), inset 0 0 0 0.3px hsl(0deg 0% 100% / 30%), 0 0 0 0.5px hsl(0deg 0% 100% / 40%);
	background: linear-gradient(177.75deg,rgba(26,27,30,.4) 1.89%,rgba(12,13,17,.2) 98.11%);
}

span::before {
	@apply
	-top-10 right-8
	sm:-top-8 sm:right-16
}

.section:hover span::before {
	@apply sm:-top-6 sm:right-14;
}

span::after {
	@apply
	-bottom-11 left-8
	sm:-bottom-8 sm:left-16;
	animation-delay: -1s;
}

.section:hover span::after {
	@apply sm:-bottom-6 sm:left-14;
}

@keyframes animate {
	0%, 100% {
		transform: translateY(8px);
	}
	50% {
		transform: translateY(-24px);
	}
}
</style>
