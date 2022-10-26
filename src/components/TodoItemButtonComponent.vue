<template>
    <div class="space-x-2">
        <button v-if="!mark"
            class="px-2 text-blue-600" 
            @click="editTodoTitle(indexNum)"
            title="Edit TODO">&#9998;</button>
        <button class="px-2 text-red-600" 
            @click="removeTodo(indexNum)"
            title="Remove TODO">&times;</button>
        <button v-if="!mark" 
            class="px-2 text-green-600" 
            @click="markAsDone(indexNum)"
            title="Mark as done">&check;</button>
        <button v-else
            class="px-2 text-orange-600" 
            @click="markAsUndone(indexNum)"
            title="Mark as undone">&#8630;
        </button>
    </div>
</template>

<script lang="ts">

    import { defineComponent } from 'vue'

    export default defineComponent({
        props: {
            mark: {
                type: Boolean,
                required: true,
            },
            indexNum: {
                type: Number,
                required: true,
            }
        },
        emits: ["on-edit-title", "on-remove-todo", "on-mark-done-todo", "on-unmark-done-todo"],
        setup(props, {emit}){

            function editTodoTitle(index: number){
                emit("on-edit-title", index)
            }

            function removeTodo(index: number){
                emit("on-remove-todo", index)
            }

            function markAsDone(index: number){
                emit("on-mark-done-todo", index)
            }

            function markAsUndone(index: number){
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