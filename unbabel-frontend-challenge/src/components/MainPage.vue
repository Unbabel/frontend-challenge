<template>
    <div>
        <Header @clickDownload="handelDownloadClick" @clickUpload="handelUploadClick" />
        <List :itemList="itemList"/>
        <Footer @clickAddButton="handelAddClick"/>
    </div>
</template>

<script>

    import Header from "./Header";
    import List from "./List";
    import { ItemFactory } from "../service/Factory";
    import Footer from "./Footer";

    export default {
        name: "MainPage",
        components: {Footer, List, Header},
        data() {
            return {
                itemList: []
            }
        },
        methods: {
            async handelDownloadClick() {
                const {data} = await ItemFactory.items.getItems();
                this.itemList = data;
            },
            handelAddClick() {
                this.itemList.push({
                    id: this.itemList.length + 1,
                    voice: 'Enter voice here',
                    text: 'Enter text here'
                })
            },
            async handelUploadClick() {
                ItemFactory.items.uploadItems(this.itemList);
            }
        }
    }
</script>

<style scoped>

</style>
