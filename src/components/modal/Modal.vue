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
			<div class="flex-row-end">
				<span class="close" @click="closeModal">&times;</span>
			</div>
			<div class="modal-slot-content">
				<slot></slot>
			</div>
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
		width: fit-content;
		min-width: 25%;
	}

	.modal-slot-content {
		margin: 0rem 2rem 0.5rem 2rem;
	}

	.flex-row-end {
		display: flex;
		flex-direction: row;
		justify-content: end;
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
