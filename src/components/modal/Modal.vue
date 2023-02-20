<script>
	// Store
	import { mapState, mapActions } from "vuex";

	export default {
		methods: {
			...mapActions({
				toggleModalVisibility: "toggleModalVisibility",
			}),
			closeModal() {
				this.toggleModalVisibility();
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
	<div id="custom-modal" class="modal" :class="showModal && 'modal-active'">
		<div class="modal-content">
			<span class="close" @click="closeModal">&times;</span>
			<slot></slot>
		</div>
	</div>
</template>

<style scoped>
	.modal {
		display: none; /* Hidden by default */
		position: fixed;
		z-index: 11;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: var(--palette-color); /* Fallback color */
		background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
	}

	.modal-active {
		display: block;
	}

	.modal-content {
		background-color: #fefefe;
		margin: 15% auto;
		padding: 1.25rem;
		border: 1px solid #888;
		width: 80%;
	}

	.close {
		color: #aaa;
		float: right;
		font-size: 1.5rem;
		font-weight: bold;
	}

	.close:hover,
	.close:focus {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}
	@media (max-width: 768px) {
	}
</style>
