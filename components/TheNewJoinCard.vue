<script setup lang="ts">

</script>

<template>
	<div
		class="
		box
		mx-4 xs:mx-8 sm:mx-36 lg:mx-48"
	>
		<span class="block absolute inset-0 z-50 pointer-events-none" />
		<div
			ref="parent"
			class="
			relative
			flex flex-col justify-center items-center
			rounded-lg join-card
			w-full
			my-4 sm:my-8
			px-2 xs:px-3 sm:px-4
			transition-all duration-500
			z-40"
		>
			<div
				class="
				z-50 w-full join-card-content rounded-lg
				flex flex-col
				my-2
				xs:my-3 sm:my-4"
			>
				<div class="w-full h-[48px] sm:h-[80px] max-h-[100px] px-2 sm:px-4 pt-2">
					<NuxtLink to="https://goo.gl/maps/zKPcBLXsqbrSGQb56" class="mt-6 flex justify-center items-center gap-2">
						<Icon name="gis:location-poi" />
						Ngee Ann Polytechnic
					</NuxtLink>
					<!-- <input ref="input" class="w-full m-px text-left text-xs sm:text-sm" placeholder="Test"> -->
				</div>
				<Chip class="my-3 mx-auto">
					<Icon name="line-md:calendar" class="text-[#8c8c93]" />
					11 Mar 2023, 8am - 6pm
				</Chip>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.box {
		@apply relative flex justify-center items-center transition-all duration-500;
	}

	.join-card {
		box-shadow: 0 -2px 6px hsl(0deg 0% 100% / 17%), 0 5px 18px rgb(0 0 0 / 40%), 0 4px 40px 8px rgb(0 0 0 / 40%), 0 1px 4px -1px rgb(0 0 0 / 30%), inset 0 0 0 0.3px hsl(0deg 0% 100% / 30%), 0 0 0 0.5px hsl(0deg 0% 100% / 40%);
		background: linear-gradient(177.75deg,rgba(26,27,30,.9) 1.89%,rgba(12,13,17,.5) 98.11%);
	}

	.box::after {
		filter: blur(32px)
	}
	.box::before,
	.box::after {
		@apply content-default
		absolute
		w-1/2 h-full
		bg-gradient-to-br from-[#ffbc00] to-[#ff0058]
		rounded-md skew-x-[15deg]
		transition-all duration-500
		-z-10;
	}

	.box:hover::before,
	.box:hover::after {
		@apply skew-x-0;
		width: calc(100% - 90px);
	}

	span::before,
	span::after {
		@apply content-default
		absolute
		backdrop-blur-sm
		rounded-md
		/* opacity-0 */
		w-16 h-16
		transition-all duration-500;
		animation: animate 2s ease-in-out infinite;
		/* box-shadow: 0 6px 12px rgba(0, 0, 0, .05); */
		box-shadow: 0 -2px 6px hsl(0deg 0% 100% / 17%), 0 5px 18px rgb(0 0 0 / 40%), 0 4px 40px 8px rgb(0 0 0 / 40%), 0 1px 4px -1px rgb(0 0 0 / 30%), inset 0 0 0 0.3px hsl(0deg 0% 100% / 30%), 0 0 0 0.5px hsl(0deg 0% 100% / 40%);
		background: linear-gradient(177.75deg,rgba(26,27,30,.4) 1.89%,rgba(12,13,17,.2) 98.11%);
	}

	.box:hover span::before,
	.box:hover span::after {
		@apply w-16 h-16;
	}

	span::before {
		@apply -top-8 left-16;
	}

	.box:hover span::before {
		@apply -top-6 left-14;
	}

	span::after {
		@apply -bottom-8 right-16;
		animation-delay: -1s;
	}

	.box:hover span::after {
		@apply -bottom-6 right-14;
	}

	@keyframes animate {
		0%, 100% {
			transform: translateY(8px);
		}
		50% {
			transform: translateY(-24px);
		}
	}

	.join-card-content {
		box-shadow: 0 2px 2px rgb(4 4 7 / 45%), 0 8px 24px rgb(4 4 7 / 60%);
		border: .5px solid transparent;
		background: linear-gradient(138.16deg,#313135 -14.83%,#1f2024 92.59%) padding-box,linear-gradient(94.85deg,#8c8c93 .63%,#3f3f43) border-box;
	}
</style>
