<template>
    <div class="space-x-2">
        <button v-if="!mark"
            class="px-2 text-blue-600" 
            @click="editTodoTitle(index)"
            title="Edit TODO">&#9998;</button>
        <button class="px-2 text-red-600" 
            :class="{'disableButton': edit}"
            @click="removeTodo(index)"
            title="Remove TODO">&times;</button>
        <button v-if="!mark" 
            class="px-2 text-green-600" 
            :class="{'disableButton': edit}"
            @click="markAsDone(index)"
            title="Mark as done">&check;</button>
        <button v-else
            class="px-2 text-orange-600" 
            @click="markAsUndone(index)"
            title="Mark as undone">&#8630;
        </button>
    </div>
</template>

<script lang="ts">

    import { defineComponent } from 'vue'

    export default defineComponent({
        emits: ["on-edit-title", "on-remove-todo", "on-mark-done-todo", "on-unmark-done-todo"],
        props: {
            mark: {
                type: Boolean,
                required: true,
            },
            edit: {
                type: Boolean,
                required: true,
            },
            index: {
                type: Number,
                required: true,
            }
        },
        setup(props, {emit}){

            const editTodoTitle = (index: number) => {
                emit("on-edit-title", index)
            }

            const removeTodo = (index: number) => {
                emit("on-remove-todo", index)
            }

            const markAsDone = (index: number) => {
                emit("on-mark-done-todo", index)
            }

            const markAsUndone = (index: number) => {
                emit("on-unmark-done-todo", index)
            }
            
            return {
                editTodoTitle,
                removeTodo,
                markAsDone,
                markAsUndone,
            }
        },
    })

</script>