<template>
	<header class="header">
		<div class="header__content">
			<span class="header__title">{{ $t('title') }}</span>
			<section class="header__buttons">
				<button v-for="button in buttons">
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

export default defineComponent({
	data: () => ({
		buttons: [
			{
				id: 'upload'
			},
			{
				id: 'fetch-document'
			}
		]
	})
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
	background-color: white;
	box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

	&__content {
		display: flex;
		align-items: center;
		justify-content: space-between;
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
		color: #414C5E;
	}

	&__buttons {
		display: flex;
	}
}

button {
	display: flex;
	align-items: center;
	background: none;
	border: none;
	padding: 0;
	cursor: pointer;
	margin-left: 24px;
}
</style>