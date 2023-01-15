<template>
    <dialog ref="toast" :class="`${toast.status}`">
        <p>{{ $t(`toast.${toast.message }`) }}</p>
    </dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations, mapState } from 'vuex';

export default defineComponent({
    computed: {
        ...mapState(['toast'])
    },
    methods: {
        ...mapMutations(['clearToast'])
    },
    watch: {
        toast(newValue) {
            if (newValue.status === 'none') return
            
            const toast = this.$refs.toast as HTMLDialogElement
            toast.showModal()
            setTimeout(() => {
                toast.close()
                this.clearToast()
            }, 2000)
        }
    }
})
</script>

<style lang="scss" scoped>
dialog {
    top: auto;
    left: 12px;
    bottom: 12px;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 7px;

    &::backdrop {
        background: none;
    }

    p {
        margin: 0;
        margin-left: 8px;
        padding: 8px 12px;
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 14px;
    }
}

.success {
    background-color: #47D764;
}

.error {
    background-color: #ff355b;
}
</style>

