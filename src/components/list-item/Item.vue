<script>
	// Store
	import { mapActions } from "vuex";

	// Components
	import ItemTitle from "./item-title/ItemTitle.vue";
	import ItemBody from "./item-body/ItemBody.vue";
	import Checkbox from "../checkbox/Checkbox.vue";
	import IconButton from "../icon-button/IconButton.vue";

	export default {
		components: {
			ItemTitle,
			ItemBody,
			Checkbox,
			IconButton,
		},
		props: {
			itemId: {
				type: String,
				required: true,
			},
			title: {
				type: String,
			},
			content: {
				type: String,
			},
		},
		methods: {
			...mapActions({
				deleteListItem: "deleteListItem",
				editListItem: "editListItem",
			}),
			onDeleteCallback() {
				this.deleteListItem(this.itemId);
			},
			editListItemTitle(value) {
				this.editListItem({
					itemId: this.itemId,
					key: "voice",
					value: value,
				});
			},
			editListItemBody(value) {
				this.editListItem({
					itemId: this.itemId,
					key: "text",
					value: value,
				});
			},
		},
		data() {
			return {
				showDeleteBtn: false,
			};
		},
	};
</script>

<template>
	<div
		class="item-container"
		@mouseover="showDeleteBtn = true"
		@mouseleave="showDeleteBtn = false"
	>
		<div class="grid-container">
			<Checkbox :id="itemId" />
			<img src="src/assets/person.svg" alt="person-icon" />
			<div class="item-title-wrapper text-margin">
				<ItemTitle
					:text="title"
					@onChangeCallback="editListItemTitle"
				/>
			</div>
			<span class="delete-span" :class="showDeleteBtn && 'visible'">
				<IconButton
					icon="src/assets/delete.svg"
					@onClickCallback="onDeleteCallback"
				/>
			</span>
			<div class="empty-cell"><!-- Empty cell --></div>
			<div class="empty-cell"><!-- Empty cell --></div>
			<div class="item-body-wrapper text-margin">
				<ItemBody
					:content="content"
					@onChangeCallback="editListItemBody"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.grid-container {
		display: grid;
		grid-template-columns: min-content min-content auto min-content;
		width: 100%;
		align-content: center;
		align-items: center;
		column-gap: 1rem;
	}

	.grid-container-row-2 {
		display: grid;
		grid-template-columns: repeat(auto-fill, 10% 10% 80%);
		width: 100%;
		align-content: center;
		align-items: center;
	}

	.item-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.item-title-wrapper {
		width: 100%;
		padding-top: 0.5rem;
	}

	.visible {
		visibility: visible !important;
	}

	.delete-span {
		width: 100%;
		text-align: end;
		visibility: hidden;
	}

	.text-margin {
		margin-left: -0.5rem;
	}

	@media (max-width: 768px) {
		.empty-cell {
			display: none;
		}

		.item-body-wrapper {
			grid-column-start: 1;
			grid-column-end: 5;
		}
	}

	/* Check if on mobile */
	@media (pointer: none), (pointer: coarse) {
		.delete-span {
			visibility: visible;
		}
	}
</style>
