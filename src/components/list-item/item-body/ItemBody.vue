<script setup>
	// Components
	import Input from "../../input/Input.vue";

	defineProps({
		content: {
			type: String,
		},
	});

	const emit = defineEmits(["onChangeCallback"]);

	const onChangeHandler = (value) => emit("onChangeCallback", value);
</script>

<template>
	<Input
		customStyles="content-styles"
		:value="content"
		:onChangeCallback="onChangeHandler"
		placeholder="Insert content..."
	/>
</template>

<style scoped>
	.content-styles {
		font-family: "Open Sans";
		font-weight: 400;
		color: var(--palette-grey);
		text-justify: distribute;
		font-size: 1.125rem;
	}
</style>
