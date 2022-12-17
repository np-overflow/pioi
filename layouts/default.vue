<script setup lang="ts">
</script>

<template>
	<slot />
</template>

<style>
::-webkit-scrollbar {
    @apply w-2 h-2 bg-transparent
}
::-webkit-scrollbar-track {
    background: rgba(12 12 12 0);
}
::-webkit-scrollbar-thumb {
    @apply rounded-full;
    background: rgb(24 24 27);
}
</style>
