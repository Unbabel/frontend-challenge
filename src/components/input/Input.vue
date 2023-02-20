<script>
	// Store
	import { mapState } from "vuex";

	export default {
		props: {
			value: {
				type: String,
			},
			placeholder: {
				type: String,
				default: "Insert text here",
			},
			customStyles: {
				type: String,
				default: "",
			},
			onChangeCallback: {
				type: Function,
			},
		},
		methods: {
			fitToContent() {
				this.$el.style.height = "5px";
				this.$el.style.height = this.$el.scrollHeight + "px";
			},
			onChangeHandler(ev) {
				this.fitToContent();
				this.onChangeCallback(ev.target.value);
			},
			getClasses() {
				const isColorBlindnessActive =
					this.$store.getters.isColorBlindnessActive;
				return `${this.$props.customStyles} ${
					isColorBlindnessActive && "colorBlindness"
				}`;
			},
		},
		mounted() {
			this.fitToContent();
		},
	};
</script>

<template>
	<textarea
		:class="getClasses()"
		:value="value"
		@input="onChangeHandler"
		:placeholder="placeholder"
	>
	</textarea>
</template>

<style scoped>
	textarea {
		width: 100%;
		border: 1px solid transparent;
		outline: none;
		resize: none;
	}

	textarea:focus {
		border: 1px solid var(--palette-lighter-grey);
		border-radius: 3px;
		background-color: var(--palette-dirty-white);
	}

	@media (max-width: 768px) {
		textarea {
			font-size: 0.9rem !important;
		}
	}
</style>
