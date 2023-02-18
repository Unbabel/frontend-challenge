<script>
	import DefaultPage from "../components/default-page/DefaultPage.vue";
	export default {
		components: {
			DefaultPage,
		},
		methods: {
			onBtnClickHandler() {
				this.$router.push("/");
			},
		},
	};
</script>

<template>
	<DefaultPage
		image-src="src/assets/not-found.svg"
		page-label="Ah, the dreaded 404. Let's get you back on track."
		btn-label="Take Me Home"
		:btn-handler="onBtnClickHandler"
	/>
</template>

<style></style>
