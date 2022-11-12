<script setup lang="ts">
const goEventRegistration = () => {
	navigateTo('https://forms.office.com/r/9vBBguvmtK', {
		external: true,
	})
}

onKeyStroke('j', (e) => {
	goEventRegistration()
})
</script>

<template>
	<div class="fixed w-full z-[999] invisible sm:visible">
		<div class="max-w-7xl mx-auto">
			<div class="flex w-full py-2 px-4">
				<div class="inline-flex w-1/2">
					<div class="rounded-full p-2 logo">
						<img src="/logo.svg" alt="logo" class="w-5 h-5 -rotate-[15deg]">
					</div>
				</div>
				<div class="inline-flex justify-end w-1/2">
					<Button class="text-white/70" @click="goEventRegistration">
						Join <span class="rounded w-4 h-4 bg-white text-black font-semibold text-center">J</span>
					</Button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.logo{
	box-shadow: 0 2px 2px rgb(4 4 7 / 45%), 0 8px 24px rgb(4 4 7 / 60%);
    border: .5px solid transparent;
    background: linear-gradient(138.16deg,#1f2024 -14.83%,#151519 92.59%) padding-box,linear-gradient(94.85deg,#8c8c93 .63%,#3f3f43) border-box;
}
</style>
