<template>
    <label class="checkbox">
        <input type="checkbox">
        <span class="checkmark">
            <svg width="10" height="8">
                <use href="src/assets/images/sprite.svg#checkmark" />
            </svg>
        </span>
    </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@mixin checkbox-size {
    height: 14px;
    width: 14px;
}

.checkbox {
    border: 2px solid var(--unb-purple);
    border-radius: 25%;
    flex-shrink: 0;

    .checkmark {
        display: none;
    }

    @include checkbox-size;
}

input[type="checkbox"] {
    position: absolute;
    margin: 0;
    opacity: 0;

    &:checked~.checkmark {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--unb-purple);

        @include checkbox-size;
    }

    @include checkbox-size;
}
</style>