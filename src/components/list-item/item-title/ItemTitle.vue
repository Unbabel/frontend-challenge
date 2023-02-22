<script setup>
	// Components
	import Input from "../../input/Input.vue";

	defineProps({
		text: {
			type: String,
		},
	});

	const emit = defineEmits(["onChangeCallback"]);

	const onChangeHandler = (value) => emit("onChangeCallback", value);
</script>

<template>
	<Input
		customStyles="title-styles"
		:value="text"
		:onChangeCallback="onChangeHandler"
		placeholder="Insert title..."
	/>
</template>

<style scoped>
	.title-styles {
		font-family: "Montserrat";
		font-weight: 600;
		color: var(--palette-light-grey);
		max-height: 1.25rem;
		font-size: 1rem;
	}
</style>
