<template>
    <div class="list-item-main item" @mouseover="onHover(false)" @mouseleave="onHover(true)">
        <div class="list-item-icon ">
            <div class="check-box">
                <input type="checkbox" value="1" v-bind:id="item.id" name=""/>
                <label v-bind:for="item.id"></label>
            </div>
        </div>
        <div class="list-item-body">
            <div class="list-item-main">
                <div class="list-item-icon">
                    <BaseIcon icon-name="add" width="26" height="26" view-box="0 0 26 26">
                        <PersonIcon/>
                    </BaseIcon>
                </div>
                <div class="list-item-body">
                    <div class="list-item-title"  contenteditable="true"
                         title="Click here to edit title" @focusout="update($event,1)" >{{item.voice}}
                    </div>
                    <div class="list-item-content" contenteditable="true" @focusout="update($event,2)"
                         title="Click here to edit text">{{item.text}}
                    </div>
                </div>
            </div>
        </div>
        <div class="list-item-icon right-button">
            <div v-show="showDelete">
                <span v-on:click="clickDelete">
                <BaseIcon icon-name="add" width="26" height="26" view-box="0 0 26 26">
                    <DeleteIcon/>
                </BaseIcon>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseIcon from "./icons/BaseIcon";
    import PersonIcon from "./icons/PersonIcon";
    import DeleteIcon from "./icons/DeleteIcon";

    export default {
        name: "Item",
        components: {BaseIcon, PersonIcon, DeleteIcon},
        props: {
            item: {
                type: Object
            },
            index:{
                type: Number
            }
        },
        data() {
            return {
                showDelete: false,
                titleHeight: 20,
                contentHeight: 0
            }
        },
        methods: {
            update: function (event, type) {
                if (type === 1) {
                    this.item.voice = event.target.innerText;
                } else if (type === 2) {
                    this.item.text = event.target.innerText
                }
            },
            onHover: function (hide) {
                this.showDelete = !hide;
            },
            clickDelete: function () {
                this.$emit('clickDelete', this.index)
            }
        }
    }
</script>
