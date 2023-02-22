<script>
	// Store
	import { mapState, mapActions } from "vuex";

	// Components
	import ListItem from "../components/list-item/Item.vue";
	import IconButton from "../components/icon-button/IconButton.vue";
	import DefaultPage from "../components/default-page/DefaultPage.vue";

	const lastItem = (currItemId, lastItemId) => {
		if (typeof currItemId === "number" && typeof lastItemId === "number") {
			return currItemId === lastItemId;
		}

		return false;
	};

	export default {
		components: {
			DefaultPage,
			ListItem,
			IconButton,
		},
		computed: {
			...mapState({
				listItems: "listItems",
			}),
		},
		methods: {
			lastItem,
			...mapActions({
				onAddClick: "addListItem",
			}),
			onBtnClickHandler() {
				this.onAddClick();
			},
		},
	};
</script>

<template>
	<div v-if="listItems.length > 0" class="transcriptions-container">
		<div class="transcriptions-inner-container">
			<div v-for="listItem in listItems">
				<div class="list">
					<ListItem
						:itemId="listItem.id.toString()"
						:title="listItem.voice"
						:content="listItem.text"
					/>
				</div>
				<hr v-if="!lastItem(listItem.id, listItems.at(-1)?.id)" />
			</div>
		</div>
		<div class="transcriptions-button-div">
			<IconButton
				icon="src/assets/add-row.svg"
				@onClickCallback="onAddClick"
			/>
		</div>
	</div>
	<div v-else>
		<DefaultPage
			image-src="src/assets/empty.svg"
			page-label="You don't have any transcriptions. Create one!"
			btn-label="Create"
			:btn-handler="onBtnClickHandler"
		/>
	</div>
</template>

<style>
	.transcriptions-container {
		margin: 1.5rem auto;
		width: 60%;
		display: flex;
		flex-direction: column;
	}

	.transcriptions-inner-container {
		background-color: var(--palette-white);
		border: 1px solid var(--palette-lighter-grey);
	}

	.list {
		padding: 1.5rem 1.3rem 1.5rem 1.75rem;
	}

	.transcriptions-button-div {
		width: fit-content;
		margin: 1.5rem auto 0 auto;
	}

	hr {
		border: none;
		border-top: 1px solid var(--palette-lighter-grey);
	}

	@media (max-width: 768px) {
		.transcriptions-container {
			width: 90%;
		}

		.list {
			padding: 0.5rem 1.2rem 0.5rem 1.75rem;
		}
	}
</style>
