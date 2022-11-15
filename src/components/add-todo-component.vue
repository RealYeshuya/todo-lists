<template>
    <div class="addTodo-container">
        <div class="addTodo">
            <h2 style="font-size: 20px; line-height: 28px; text-align: center;">ADD A TODO</h2>
                <input type="text" 
                    v-model="add"
                    class="addTodoInput"
                    placeholder="Add TODO"
                    @keydown.enter="addTodo(add)" /> 
          </div>
        </div>
</template>

<script lang="ts">
    import { defineComponent, ref} from 'vue';

    export default defineComponent({
        emits: ["add-todo"],
        setup(props, { emit }) {

            const add = ref('')
            
            function addTodo(text: string){
                emit("add-todo", text)
                add.value = ""
            }

            return { addTodo, add}
        },
    })
</script>