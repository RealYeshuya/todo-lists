<template>
    <div class="addTodo-container">
        <div class="addTodo">
            <h2 style="font-size: 20px; line-height: 28px; text-align: center;">ADD A TODO</h2>
                <input type="text" 
                    class="addTodoInput"
                    :value="newTodo"
                    @keydown.enter="addTodo($event)" />  
          </div>
        </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        emits: ["add-todo"],
        props: {
            newTodo: {
                type: String,
                required: false,
            },
        },
        setup(props, { emit }) {

            function addTodo(event: any){
                if(event.target.value != ""){
                    emit("add-todo", event.target.value)
                } else {
                    alert("Please add a TODO")
                }
                event.target.value = "";
            }

            return {
                addTodo,
            }
        }

    })

</script>