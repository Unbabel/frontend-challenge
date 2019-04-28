<template>
    <div class="header">
        <div class="content">
            <span class="app-title">Transcriptions</span>
            <ul class="ul-left">
                <li v-on:click="clickUpload">
                    <BaseIcon icon-name="add" width="24" height="24" view-box="0 0 24 24">
                        <UploadIcon/>
                    </BaseIcon>
                </li>
                <li v-on:click="clickDownload">
                    <BaseIcon icon-name="add" width="24" height="24" view-box="0 0 24 24" >
                        <DownloadIcon />
                    </BaseIcon>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import BaseIcon from "./icons/BaseIcon";
    import AddIcon from "./icons/AddIcon";
    import UploadIcon from "./icons/UploadIcon";
    import DownloadIcon from "./icons/DownloadIcon";

    export default {
        name: "Header",
        components: {
            BaseIcon,
            AddIcon,
            UploadIcon,
            DownloadIcon
        },
        methods: {
            clickDownload: function() {
                this.$emit('clickDownload')
            },
            clickUpload: function() {
                this.$emit('clickUpload')
            }
        }
    }
</script>

<style scoped>

</style>
