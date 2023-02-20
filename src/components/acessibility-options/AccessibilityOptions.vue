<script>
	// Store
	import { mapState, mapActions } from "vuex";

	// Components
	import Modal from "../modal/Modal.vue";

	export default {
		components: {
			Modal,
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
				const [html] = document.getElementsByTagName("html");
				const htmlClassNames = Array.from(html.classList);

				if (htmlClassNames.includes("elder")) {
					html.classList.remove("elder");
				} else {
					html.classList.add("elder");
				}
			},
			toggleColorBlindness() {
				this.toggleAccessibilityOption("colorBlindness");
			},
		},
		computed: {
			...mapState({
				showModal: "showModal",
			}),
		},
	};
</script>

<template>
	<div>
		<div class="acessibility-container" aria-label="Accessibility Options">
			<div class="acessibility" @click="openModal">
				<img
					src="src/assets/acessibility.svg"
					alt="acessibility-icon"
				/>
			</div>
		</div>
		<Modal>
			<h3>Accessibility Profiles</h3>
			<div class="accessibility-option flex-center">
				<p>Elder</p>
				<button @click="toggleElderMode">Toggle</button>
			</div>
			<div class="accessibility-option flex-center">
				<p>Color Blindness</p>
				<button @click="toggleColorBlindness">Toggle</button>
			</div>
		</Modal>
	</div>
</template>

<style scoped>
	.acessibility-container {
		position: fixed;
		z-index: 10;
		bottom: 1.25rem;
		left: 0.625rem;
		width: fit-content;
	}
	.acessibility {
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

	.accessibility-option {
		column-gap: 2rem;
	}
</style>
