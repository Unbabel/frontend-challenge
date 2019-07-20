<template>
    <li v-if="item">
        <div class="checkbox">
            <label></label>
            <input type="checkbox" name="custom-checkbox">
        </div>
        <div class="info-container">
            <img src="../assets/person.svg" alt="user image">
            <h1>{{ item.voice  }}</h1>
            <p>{{ item.text }}</p>
        </div>
    </li>
</template>

<script>
export default {
    name: 'Item',
    props: {
        item: {
                type: Object,
                default: () => ({
                    voice: String,
                    text: String
                })
            }
    }
}
</script>

<style lang="scss">

</style>


