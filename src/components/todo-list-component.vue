<template>
    <div>
        <div v-if="!update"
            class="todoTitle"
            :class="{todoDone: done}">{{ title }}</div>
        <div v-else>
            <input type="text" 
                class="editTodoInput"
                @keydown.enter="$emit('edit-todo', $event.target.value, indexNum)" 
                @keydown.esc="$emit('cancel-edit', indexNum)"/>  
        </div>  
        <div class="todoDescription">{{ created }}</div>
    </div>
</template>

<script lang="ts">

    // import useTodo from "@/composable/use-todo";
    import { defineComponent } from 'vue';
            
        export default defineComponent({
            emits: ["edit-todo", "cancel-edit"],
            props: {
                indexNum: {
                    type: Number,
                    required: true,
                },
                title: {
                    type: String,
                    required: true,
                },
                created: {
                    type: Date,
                    required: false,
                },
                done: {
                    type: Boolean,
                    required: true,
                },
                update: {
                    type: Boolean,
                    required: true,
                },
                editText: {
                    type: String,
                    required: false,
                },
            },
            data() {
                return {
                    updateTodo: ""
                }
            }
        })

</script>