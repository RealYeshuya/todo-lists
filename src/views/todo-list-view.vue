<template>
  <div class="todoList-all">
    <header-component />
    <!-- LIST CONTAINER -->

    <div class="todoList-container">
      <div class="todoList">
        <div class="todoItem-container" style="height: 500px">

          <div>
            <!-- BUTTONS TO MARK, UNMARK AND REMOVE ALL TODO -->
            <div v-if="(todos.length !== 0)">
              <button-component 
                @on-mark-all-done="markAllDone" 
                @on-unmark-all-done="unmarkAllDone" 
                @on-remove-all-done="removeAllDone"/>
            </div>
          </div>

          <div class="todoItems">
            <!-- DRAGGABLE LIST OF ALL TODOS -->
            <draggable 
              v-model="todos" 
              @start="drag=true" 
              @end="drag=false" 
              item-key="index">
              <template #item="{ element, index }">
                <div class="p-8 my-2 bg-white shadow-md rounded flex items-center justify-between"
                  :class="{'bg-green-500': element.done}">
                  <todo-list-component
                    :todo="element"
                    :indexNum="index"
                    @edit-todo="editTodo"/>

                  <!-- BUTTONS FOR MARK, UNMARK AND REMOVE TODO ITEM -->
                  <todo-item-button-component 
                    :mark="element.done"
                    :edit="element.edit"
                    :indexNum="index"
                    @on-edit-title="editTodoTitle"
                    @on-mark-done-todo="markAsDone"
                    @on-unmark-done-todo="markAsUndone"
                    @on-remove-todo="removeTodo"/>
                </div>
              </template>
            </draggable>
          </div>

          <!-- IF TODO LIST IS EMPTY -->
          <empty-list-component v-if="todos.length === 0"/>
        </div>

        <!-- ADD TODO COMPONENT -->
        <add-todo-component @addTodo="addTodo"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

  import {defineComponent, ref} from "vue"
  import draggable from "vuedraggable"
  import AddTodoComponent from "@/components/add-todo-component.vue"
  import ButtonComponent from "@/components/button-component.vue"
  import EmptyListComponent from "@/components/empty-list-component.vue"
  import TodoItemButtonComponent from "@/components/todo-item-button-component.vue"
  import TodoListComponent from "@/components/todo-list-component.vue"
  import HeaderComponent from "@/components/header-component.vue"
  import useTodo from "@/composable/use-todo"

  export default defineComponent({
    components : { 
      AddTodoComponent,
      ButtonComponent, 
      EmptyListComponent, 
      HeaderComponent, 
      TodoItemButtonComponent,
      TodoListComponent,
      draggable, 
    },
    data(){
      return {
        drag: false, 
      }
    },
    setup(){

      const { 
        todos, 
        addTodo,
        editTodo,
        editTodoTitle,
        markAsDone,
        markAsUndone,
        removeTodo,
        markAllDone,
        unmarkAllDone,
        removeAllDone,
      } = useTodo();
      
      const indexNumber = ref(0); // const indexNumber = {value: 0}
      const newTodo = ref('')
      const text = ref('')

      return {
        todos,
        newTodo,
        text,
        indexNumber, 
        addTodo,
        editTodo,
        editTodoTitle,
        markAsDone,
        markAsUndone,
        removeTodo,
        markAllDone,
        unmarkAllDone,
        removeAllDone,
      }
    }
  })
</script>
