<script setup>
	import { computed } from "vue";

	const { checked, onChangeCallback } = defineProps({
		checked: {
			type: Boolean,
			required: true,
		},
		onChangeCallback: {
			type: Function,
			required: true,
		},
	});

	const isChecked = computed(() => checked);
</script>

<template>
	<div>
		<label class="switch">
			<input type="checkbox" :checked="isChecked" />
			<span class="slider" @click="onChangeCallback"></span>
		</label>
	</div>
</template>

<style scoped>
	.switch {
		position: relative;
		display: inline-block;
		width: 3rem;
		height: 1.5rem;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--palette-lighter-grey);
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 2.125rem;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 1rem;
		width: 1rem;
		left: 0.25rem;
		bottom: 0.25rem;
		background-color: var(--palette-white);
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}

	input:checked + .slider {
		background-color: #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(1.625rem);
		-ms-transform: translateX(1.625rem);
		transform: translateX(1.625rem);
	}
</style>
