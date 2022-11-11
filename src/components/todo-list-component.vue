<template>
    <div>
        <div v-if="!todo.edit"
            class="todoTitle"
            :class="{todoDone: todo.done}">{{ todo.text }}</div>
        <div v-else>
            <input type="text" 
                v-model="edit"
                class="editTodoInput"
                @keydown.enter="editTodo(edit, indexNum)"/>  
        </div>  
        <div class="todoDescription">{{ todo.createdAt }}</div>
    </div>
</template>

<script lang="ts">

    import ITodo from "@/types/todos";
    import { defineComponent, PropType, ref } from 'vue';
            
        export default defineComponent({
            emits: [
                "edit-todo", 
            ],
            props: {
                todo: {
                    type: Object as PropType<ITodo>,
                    required: true
                },
                indexNum: {
                    type: Number,
                    required: true
                }
            },
            setup(props, { emit }) {

                const edit = ref("")
                
                function editTodo(text: string, index: number){
                    emit("edit-todo", text, index)
                }

            return { editTodo, edit,}

            },
        })

</script>