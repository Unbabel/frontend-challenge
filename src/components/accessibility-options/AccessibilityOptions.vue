<script>
	// Store
	import { mapState, mapActions } from "vuex";

	// Components
	import Modal from "../modal/Modal.vue";
	import ToggleButton from "../toggle-button/ToggleButton.vue";

	// Utils
	import { addOrRemoveClassNameFromElTag } from "../../shared/utils/accessibilityOptions";

	export default {
		components: {
			Modal,
			ToggleButton,
		},
		methods: {
			...mapActions({
				toggleModalVisibility: "toggleModalVisibility",
				toggleAccessibilityOption: "toggleAccessibilityOption",
			}),
			openModal() {
				this.toggleModalVisibility();
			},
			toggleElderMode() {
				addOrRemoveClassNameFromElTag("html", "elder");
				this.toggleAccessibilityOption("elder");
			},
			toggleColorBlindness() {
				this.toggleAccessibilityOption("colorBlindness");
			},
		},
		computed: {
			...mapState({
				showModal: "showModal",
				isElderModeActive: (state) => state.accessibilityOptions.elder,
				isColorBlindnessActive: (state) =>
					state.accessibilityOptions.colorBlindness,
			}),
		},
	};
</script>

<template>
	<div>
		<div class="accessibility-container" aria-label="Accessibility Options">
			<div
				class="accessibility"
				@click="openModal"
				data-test="accessibility-div"
			>
				<img
					src="src/assets/accessibility.svg"
					alt="accessibility-icon"
				/>
			</div>
		</div>
		<Modal>
			<h3>Accessibility Profiles</h3>
			<div class="accessibility-options-grid">
				<p>Elder</p>
				<ToggleButton
					:onChangeCallback="toggleElderMode"
					:checked="isElderModeActive"
				/>
				<p>Color Blindness</p>
				<ToggleButton
					:onChangeCallback="toggleColorBlindness"
					:checked="isColorBlindnessActive"
				/>
			</div>
		</Modal>
	</div>
</template>

<style scoped>
	.accessibility-container {
		position: fixed;
		z-index: 10;
		bottom: 1.25rem;
		left: 0.625rem;
		width: fit-content;
	}
	.accessibility {
		background: var(--palette-purple);
		border-radius: 50%;
		margin: 0.625rem;
		height: fit-content;
		width: fit-content;
		padding: 0.5rem;
		cursor: pointer;

		box-shadow: 0 0 0 0 rgb(129, 94, 194);
		transform: scale(1);
		animation: pulse 2s infinite;
	}

	img {
		height: 2rem;
	}

	@keyframes pulse {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(129, 94, 194, 0.7);
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0 10px rgba(142, 68, 173, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(142, 68, 173, 0);
		}
	}

	h3 {
		text-align: center;
	}

	.accessibility-option {
		column-gap: 2rem;
	}

	.accessibility-options-grid {
		display: grid;
		grid-template-columns: 70% 29%;
		align-items: center;
	}
</style>
