<template>
    <li v-if="item">
        <label class="custom-checkbox">
            <input name="custom checkbox" type="checkbox">
            <span class="checkmark"></span>
        </label>
        <div class="info-container">
            <h1>
                <img src="../assets/person.svg" alt="user image">
                {{ item.voice  }}
            </h1>
            <p>{{ item.text }}</p>
        </div>
        <button @click="$emit('del-item', item.id)">
            <img src="../assets/delete.svg" aria-hiden="true">
            <span class="sr-only">Delete item</span>
        </button>
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

<style lang="scss" scoped>
    .custom-checkbox {
        position: relative;
        border: 1px solid #859EFF;
        width: 16px;
        height: 16px;
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
    li {
        border-bottom: 1px solid #eee;
        padding: 1rem;
        display: grid;
        grid-template-columns: 30px auto 60px;
        grid-gap: 15px;
        &:hover button {
            opacity: 1;
        }
        .info-container {
            width: 90%;
        }
    }
    button {
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }
</style>


