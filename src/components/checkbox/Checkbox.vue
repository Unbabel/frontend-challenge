<script setup>
	import { computed } from "vue";
	const { id } = defineProps({
		id: {
			type: String,
			required: true,
		},
	});

	const checkboxId = computed(() => "checkbox-" + id);
</script>

<template>
	<div class="checkbox-div">
		<input
			name="cssCheckbox"
			:id="checkboxId"
			type="checkbox"
			class="css-checkbox"
			aria-checked
			checked
		/>
		<label :for="checkboxId"></label>
	</div>
</template>

<style scoped>
	.checkbox-div {
		height: 1rem;
		width: 1rem;
	}

	.css-checkbox {
		position: absolute;
		overflow: hidden;
		clip: rect(0 0 0 0);
		height: 0.0625rem;
		width: 0.0625rem;
		padding: 0;
		border: 0;
	}

	.css-checkbox + label {
		position: relative;
		font-size: 1rem;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
	}

	.css-checkbox + label::before {
		content: " ";
		vertical-align: middle;
		height: 0.75rem;
		width: 0.75rem;
		border-width: 0.125rem;
		border-style: solid;
		border-color: var(--palette-purple);
		border-radius: 0.125rem;
		box-shadow: none;
	}

	.css-checkbox:checked + label::after {
		content: " ";
		background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Ii8+PC9zdmc+");
		background-repeat: no-repeat;
		background-size: 0.6rem 1rem;
		background-position: center center;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: var(--palette-purple);
		font-size: 1rem;
		height: 0.875rem;
		width: 0.985rem;
		border-radius: 0.125rem;
	}
</style>
