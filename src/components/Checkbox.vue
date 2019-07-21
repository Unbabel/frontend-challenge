<template>
    <label class="custom-checkbox" tabindex="0">
        <input type="checkbox" id="checkbox" v-model="checked" role="checkbox" :aria-checked="checked" name="custom checkbox">
        <span class="checkmark"></span>
    </label>
</template>



<script>
export default {
    name: 'Checkbox',
    data() {
        return {
            checked: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .custom-checkbox {
        position: relative;
        border: 2px solid #859EFF;
        border-radius: 2px;
        width: 16px;
        height: 16px;
        margin-top: 5px;
        &:hover {
            cursor: pointer;
        }
        input {
            opacity: 0;
            position: absolute;
            left: 0;
            top: 0;
            &:checked ~ .checkmark {
                background-color: #859EFF;
            }
            &:checked ~ .checkmark:after {
                opacity: 1;
            }
            &:focus ~ .checkmark:after {
                outline: rgb(59, 153, 252) auto 5px;
            }
        }

        .checkmark {
            display: block;

            position: absolute;
            top: -2px;
            left: -2px;
            height: 16px;
            width: 16px;
            border-radius: 2px;
            &:after {
                content: "";
                display: block;
                height: 16px;
                width: 16px;
                background-image: url(/img/check.ee008a56.svg);
                background-repeat: no-repeat;
                background-position: center;
                transition: opacity 0.2s ease-in-out;
            }
        }
    }
</style>


