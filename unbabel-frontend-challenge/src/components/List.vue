<template>
    <div class="body">
        <div class="content">
            <div class="list">
                <Item v-for="(i,index) in itemList" :item="i" :index="index" @clickDelete="handelDeleteClick"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Item from "./Item";

    export default {
        name: "List",
        components: {Item},
        props:{
            itemList :{
                type: Array
            }
        },
        methods:{
            handelDeleteClick(id) {
                this.itemList.splice(id,1)
            }
        }
    }
</script>

<style scoped>

</style>
