<template>
    <main>
        <ul :key="item.id" v-for="item of items">
            <Item :item="item"/>
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

