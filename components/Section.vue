<script setup lang="ts">
</script>

<template>
	<div class="flex lg:h-screen w-full justify-center">
		<section
			class="
			section glow relative rounded-xl
			flex items-center justify-center
			w-full h-fit
			px-2 xs:px-3 sm:px-10
			py-4 sm:py-8
			mx-2 mb-8
			border-gray-300 bg-[#18181b]
			transition-all duration-500"
		>
			<span class="block absolute inset-0 z-50 pointer-events-none" />
			<slot />
		</section>
	</div>
</template>

<style scoped>
.section {
    box-shadow: 0 -2px 6px hsl(0deg 0% 100% / 17%), 0 5px 18px rgb(0 0 0 / 40%), 0 4px 40px 8px rgb(0 0 0 / 40%), 0 1px 4px -1px rgb(0 0 0 / 30%), inset 0 0 0 0.3px hsl(0deg 0% 100% / 30%), 0 0 0 0.5px hsl(0deg 0% 100% / 40%);
	background: rgb(12, 12, 12)
}

.section::after {
	filter: blur(32px)
}

.section::after {
	@apply content-default
	absolute
	block
	w-[calc(100%-60px)] sm:w-1/2 h-full
	bg-gradient-to-br from-[#ffbc00] to-[#ff0058]
	rounded-md
	sm:skew-x-[15deg]
	transition-all duration-500
	-z-10;
}

.section:hover::after {
	@apply skew-x-0 sm:h-[110%] sm:w-[calc(100%-90px)];
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
	background: linear-gradient(177.75deg,rgba(24, 24, 27, 0.7) 1.89%,rgba(12,12, 12, 0.2) 98.11%);
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
