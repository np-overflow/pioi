<template>
	<div class="py-0.5 px-2 text-xs rounded-full w-fit flex items-center gap-2">
		<slot />
	</div>
</template>

<style scoped>
div {
    box-shadow: 0 2px 2px rgb(4 4 7 / 45%), 0 8px 24px rgb(4 4 7 / 60%);
    border: .5px solid transparent;
    background: linear-gradient(138.16deg,#18181b -14.83%,#0c0c0c 92.59%) padding-box,linear-gradient(94.85deg,#8c8c93 .63%,#3f3f43) border-box;
}
</style>
