<template>
	<header class="header">
		<div class="header__content">
			<h1 class="header__title">{{ $t('title') }}</h1>
			<section class="header__buttons">
				<button v-for="button in buttons" :key="button.id" @click="button.action" class="btn">
					<svg width="24" height="24">
						<use :href="`src/assets/images/sprite.svg#${button.id}`" />
					</svg>
				</button>
			</section>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'

export default defineComponent({
	data: () => ({
		buttons: [{
			id: '',
			action: () => { }
		}]
	}),
	created() {
		this.buttons = [
			{
				id: 'upload',
				action: () => { }
			},
			{
				id: 'fetch-document',
				action: () => { this.fetchNotes() }
			}
		]
	},
	methods: {
		...mapActions(['fetchNotes'])
	}
})
</script>

<style lang="scss" scoped>
.header {
	position: -webkit-sticky;
	position: sticky;
	top: 0;

	display: flex;
	align-items: center;
	justify-content: center;

	height: 69px;

	&__content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		width: 100%;
		padding: 0 24px;

		@media(min-width: 768px) {
			max-width: 738px;
		}
	}

	&__title {
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
		font-size: 18px;
	}

	&__buttons {
		display: flex;
	}
}

button {
	margin-left: 24px;
}
</style>