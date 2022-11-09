<template>
    <div class="addTodo-container">
        <div class="addTodo">
            <h2 style="font-size: 20px; line-height: 28px; text-align: center;">ADD A TODO</h2>
                <input type="text" 
                    ref="add"
                    class="addTodoInput"
                    placeholder="Add TODO"
                    @keydown.enter="$emit('add-todo', $event.target.value)"
                    @keyup.enter="resetInput" /> 
          </div>
        </div>
</template>

<script lang="ts">
    import { defineComponent, Ref } from 'vue';

        export default defineComponent({
            emits: ["add-todo"],
            methods: {
                resetInput() {
                    (this.$refs["add"] as Ref).value = "";
                }
            },
        })
</script>