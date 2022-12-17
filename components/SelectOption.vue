<script setup lang="ts">

</script>

<template>
	<li class="rounded">
		<div class="py-2 px-4">
			<slot />
		</div>
	</li>
</template>

<style scoped>
li:hover {
    @apply bg-[#141418]
}
</style>
