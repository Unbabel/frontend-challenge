<template>
    <label class="custom-checkbox">
        <input name="custom checkbox" type="checkbox">
        <span class="checkmark"></span>
    </label>
</template>

<script>
export default {
    name: 'Checkbox'
}
</script>

<style lang="scss" scoped>
    .custom-checkbox {
        position: relative;
        border: 1px solid #859EFF;
        width: 16px;
        height: 16px;
        border-radius: 1px;
        &:hover {
            cursor: pointer;
        }
        input {
            opacity: 0;
            &:checked ~ .checkmark {
                background-color: #859EFF;
            }
            &:checked ~ .checkmark:after {
                opacity: 1;
            }
        }
        .checkmark {
            display: block;

            position: absolute;
            top: 0;
            left: 0;
            height: 15px;
            width: 15px;
            background-color: transparent;
            &:after {
                content: "";
                border: 2px solid #fff;
                border-left: 0;
                border-top: 0;
                height: 9px;
                width: 4px;
                left: 4px;
                top: 0;
                border-radius: 1px;
                opacity: 0;
                position: absolute;
                transform: rotate(45deg);
                transition: opacity 0.2s ease-in-out;
            }
        }
    }
</style>


