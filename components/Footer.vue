<script setup lang="ts">

</script>

<template>
	<div class="max-w-7xl mx-auto text-white">
		<footer class="w-full flex flex-col items-center p-4 gap-4">
			<p class="text-center text-xs text-gray-400">
				Copyright © 2022 Overflow - All rights reserved
			</p>
			<div class="flex text-center items-center gap-4 text-xs">
				<NuxtLink class="link">
					Terms & Conditions
				</NuxtLink>
				<NuxtLink class="link">
					Privacy Policy
				</NuxtLink>
				<NuxtLink class="link">
					Rules & Regulations
				</NuxtLink>
				<NuxtLink class="link">
					Code of Conduct
				</NuxtLink>
			</div>
			<div class="inline-flex gap-4">
				<NuxtLink to="mailto:np.ict.overflow@gmail.com">
					<Icon size="24" name="line-md:email" />
				</NuxtLink>
				<NuxtLink to="https://www.instagram.com/npoverflow/">
					<Icon size="24" name="line-md:instagram" />
				</NuxtLink>
				<NuxtLink to="https://discord.gg/gUzY5FrvbM">
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

.link {
	@apply inline-block relative;
}

.link::after {
	@apply content-default absolute w-full scale-0 h-0.5 bottom-0 left-0 bg-white origin-bottom-right transition-transform duration-300 ease-out;
}

.link:hover::after {
	@apply scale-100 origin-bottom-left
}
</style>
