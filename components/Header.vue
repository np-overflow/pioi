<script setup lang="ts">
</script>

<template>
	<header class="sticky top-0 z-[9999] min-h-[4rem] text-white backdrop-blur-md bg-[#0c0c0cbf]">
		<div class="mx-auto px-4 max-w-7xl relative">
			<nav class="flex w-full py-2">
				<div class="inline-flex w-1/2">
					<div class="rounded-full p-2 logo">
						<img src="/logo.svg" alt="logo" class="w-5 h-5 -rotate-[15deg]">
					</div>
				</div>
				<GlowWrapper class="inline-flex justify-end w-1/2">
					<Button class="text-white/70">
						Join
						<KBD>Ctrl</KBD>
						<KBD>J</KBD>
					</Button>
				</GlowWrapper>
			</nav>
		</div>
	</header>
</template>

<style scoped>
.logo{
	box-shadow: 0 2px 2px rgb(4 4 7 / 45%), 0 8px 24px rgb(4 4 7 / 60%);
    border: .5px solid transparent;
    background: linear-gradient(138.16deg,#18181b -14.83%,#0c0c0c 92.59%) padding-box,linear-gradient(94.85deg,#8c8c93 .63%,#3f3f43) border-box;
}
</style>
