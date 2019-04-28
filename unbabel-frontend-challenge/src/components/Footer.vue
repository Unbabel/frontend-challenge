<template>
    <div class="footer">
        <div class="content">
            <div class="text-center footer-icon">
                <span v-on:click="clickAdd">
                    <BaseIcon icon-name="add" width="32" height="32" view-box="0 0 32 32">
                        <AddIcon/>
                    </BaseIcon>
                </span>
            </div>

        </div>
    </div>
</template>

<script>
    import BaseIcon from "./icons/BaseIcon";
    import AddIcon from "./icons/AddIcon";

    export default {
        name: "Footer",
        components: {
            BaseIcon,
            AddIcon
        },
        methods: {
            clickAdd: function () {
                this.$emit("clickAddButton");
            }
        }
    }
</script>

<style scoped>

</style>
