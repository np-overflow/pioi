<script setup lang="ts">

</script>

<template>
	<div class="max-w-7xl mx-auto">
		<footer class="footer items-center p-4">
			<div class="items-center grid-flow-col">
				<div class="rounded-full p-2 logo">
					<img src="logo.svg" alt="logo" class="w-5 h-5 -rotate-[15deg]">
				</div>
				<p>Copyright © 2022 - All right reserved</p>
			</div>
			<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
				<NuxtLink to="mailto:np.ict.overflow@gmail.com">
					<Icon size="24" name="line-md:email" />
				</NuxtLink>
				<NuxtLink to="">
					<Icon size="24" name="line-md:instagram" />
				</NuxtLink>
				<NuxtLink to="">
					<Icon size="24" name="line-md:discord" />
				</NuxtLink>
			</div>
		</footer>
	</div>
</template>

<style scoped>
.logo{
	box-shadow: 0 2px 2px rgb(4 4 7 / 45%), 0 8px 24px rgb(4 4 7 / 60%);
    border: .5px solid transparent;
    background: linear-gradient(138.16deg,#1f2024 -14.83%,#151519 92.59%) padding-box,linear-gradient(94.85deg,#8c8c93 .63%,#3f3f43) border-box;
}
</style>
