<script setup lang="ts">
const formData = {
	name: '',
	email: '',
	school: '',
}

const count = ref(0)
const buttonText = ref('Next')
const input = ref(null)
const parent = ref(null)

const handleClick = () => {
	const options = Object.keys(formData).length - 1
	if (count.value > options)
		return
	formData[Object.keys(formData)[count.value]] = input.value.innerText
	input.value.innerText = ''
	count.value++
	if (count.value >= options)
		buttonText.value = 'Join'
}
</script>

<template>
	<div
		ref="parent"
		class="
        relative
        flex flex-col justify-center items-center
        overflow-hidden rounded-lg join-card
        mx-4 xs:mx-8 sm:mx-36 lg:mx-48
        my-4 sm:my-8
        px-2 xs:px-3 sm:px-4"
	>
		<div class="z-[100] w-full join-card-content rounded-lg flex flex-col mt-2 xs:mt-3 sm:mt-4">
			<div v-if="count < Object.keys(formData).length - 1" class="w-full h-[48px] sm:h-[80px] max-h-[100px] px-2 sm:px-4 pt-2">
				<div ref="input" class="w-full h-full m-px text-left text-xs sm:text-sm md:text-base" contentEditable="true" :data-placeholder="`Please enter your ${Object.keys(formData)[count]}...`" />
			</div>
			<Chip class="my-2 mx-2 sm:mx-3">
				<Icon name="line-md:calendar" class="text-[#8c8c93]" />
				11 Mar 2023, 8am - 6pm
			</Chip>
		</div>
		<div class="join-card-footer">
			<div class="div absolute -left-4 border-t-[0.5px] -top-3 border-white/20" />
			<div class="relative w-2/3 my-auto flex justify-start items-center text-xs sm:text-sm">
				<NuxtLink to="https://goo.gl/maps/zKPcBLXsqbrSGQb56" class="flex items-center gap-2">
					<Icon name="gis:location-poi" />
					Ngee Ann Polytechnic
				</NuxtLink>
			</div>
			<div class="relative w-1/3 flex justify-end">
				<Button class="text-white/70" @click="handleClick">
					{{ buttonText }}
				</Button>
			</div>
		</div>
	</div>
</template>

<style scoped>
		.join-card {
			box-shadow: 0 -2px 6px hsl(0deg 0% 100% / 17%), 0 5px 18px rgb(0 0 0 / 40%), 0 4px 40px 8px rgb(0 0 0 / 40%), 0 1px 4px -1px rgb(0 0 0 / 30%), inset 0 0 0 0.3px hsl(0deg 0% 100% / 30%), 0 0 0 0.5px hsl(0deg 0% 100% / 40%);
			background: linear-gradient(177.75deg,rgba(26,27,30,.9) 1.89%,rgba(12,13,17,.5) 98.11%);
			z-index: 5001;
		}

		.join-card-content {
			box-shadow: 0 2px 2px rgb(4 4 7 / 45%), 0 8px 24px rgb(4 4 7 / 60%);
			border: .5px solid transparent;
			background: linear-gradient(138.16deg,#313135 -14.83%,#1f2024 92.59%) padding-box,linear-gradient(94.85deg,#8c8c93 .63%,#3f3f43) border-box;
		}

        .join-card-link {
            background: linear-gradient(138.16deg,#313135 -14.83%,#1f2024 92.59%) padding-box,linear-gradient(94.85deg,#8c8c93 .63%,#3f3f43) border-box;
            /* opacity: .6; */
            border: .5px solid transparent;
        }

		.join-card-footer {
			@apply rounded-b-lg pt-2 w-full text-white flex items-end justify-between mb-2 relative z-[1];
		}

		.div {
			width: calc(100% + 32px);
		}

		[contentEditable=true]:empty::before {
			color: #494a4f;
			content: attr(data-placeholder);
			outline: 0px solid transparent;
		}

		[contentEditable=true] {
			outline: 0px solid transparent;
		}
</style>
