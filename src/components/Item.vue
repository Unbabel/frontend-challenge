<template>
    <li v-if="item">
        <Checkbox/>
        <img src="../assets/person.svg" alt="user image">
        <div class="info-container">
            <h1 contenteditable="true" 
                @focusout="editItem($event, 'voice')"
            >{{ item.voice  }}</h1>
            <p 
                contenteditable="true" 
                @focusout="editItem($event, 'text')"
            >{{ item.text }}</p>
        </div>
        <button @click="$emit('del-item', item.id)">
            <img src="../assets/delete.svg" alt="Delete item" >
            <span class="sr-only">Delete item</span>
        </button>
    </li>
</template>

<script>
import Checkbox from './Checkbox'

export default {
    name: 'Item',
    components: {
        Checkbox
    },
    props: {
        item: {
                type: Object,
                default: () => ({
                    voice: String,
                    text: String
                })
            }
    },
    methods: {
        editItem($event, target) {
            this.item[target] = $event.target.innerText;
            this.$emit('edit-item', this.item)
        }
    }
}
</script>

<style lang="scss" scoped>
    li {
        border-bottom: 1px solid #eee;
        padding: 1.5rem 1rem;
        display: grid;
        grid-template-columns: 16px 20px auto 60px;
        grid-gap: 15px;
        &:hover button {
            opacity: 1;
        }
        .info-container {
            padding-bottom: 1rem;
        }

        h1 {
            font-family: 'Montserrat', sans-serif;
            font-weight: var(--semi-bold);
            font-size: 16px;
            color: var(--title-item-color);
        }

        p {
            font-family: 'Open Sans', sans-serif;
            font-size: 16px;
            color: var(--item-color);
        }
    }
    button {
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }
</style>


