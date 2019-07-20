<template>
    <main class="container" v-if="items.length">
        <ul>
            <Item 
                :key="item.id" 
                v-for="item of items" 
                :item="item" 
                @edit-item="$emit('edit-item', item)" 
                @del-item="$emit('del-item', item.id)"/>
        </ul>
    </main>
</template>

<script>

import Item from './Item'

export default {
    name: 'List',
    props: {
        items: {
            type: Array,
            default: () => [{ 
                id: Number,
                voice: String,
                text: String
            }]
        }
    },
    components: {
        Item
    }
}
</script>

<style lang="scss" scoped>
    main {
        background: #fff;
        transition: all .5s;
        ul {
            padding: 0;
            list-style: none;
            border-radius: 1px;
            border: 1px solid #eee;
        }
    }
    .container {
        margin: 15px auto;
    }
    @media (min-width: 768px) {
        .container {
            width: 750px;
        }
    }
    @media (min-width: 1200px) {
        .container {
            width: 1170px;
        }
    }
</style>


