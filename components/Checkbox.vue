<script setup lang="ts">
const emits = defineEmits(['checked'])

const isChecked = ref(false)
const check = ref<Nullable<HTMLElement>>(null)

const { enter } = useMagicKeys()
const { focused } = useFocus(check)

const toggleChecked = () => {
	isChecked.value = !isChecked.value
	emits('checked', isChecked.value)
}

whenever(enter, () => {
	if (focused.value) toggleChecked()
})
</script>

<template>
	<span ref="check" tabindex="0" @click="toggleChecked" class="focus:outline-0 focus:scale-110 transition-all duration-300 ease-in-out">
		<Icon
			ref="check"
			size="16"
			:name="isChecked ? 'material-symbols:check-box' : 'material-symbols:check-box-outline-blank'"
		/>
	</span>
</template>
