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
                    v-model="text"
                    :indexNum="index" 
                    :title="element.text" 
                    :created="element.createdAt" 
                    :done="element.done"
                    :update="element.edit"
                    @edit-text="editTodo"/>

                  <!-- BUTTONS FOR MARK, UNMARK AND REMOVE TODO ITEM -->
                  <todo-item-button-component 
                    :mark="element.done"
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
        <add-todo-component 
          v-model="newTodo"
          @add-todo="addTodo" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">

  import {defineComponent, ref} from "vue"
  import ITodo from "@/types/todos.interface" 
  import draggable from 'vuedraggable'
  import AddTodoComponent from "@/components/AddTodoComponent.vue"
  import ButtonComponent from "@/components/ButtonComponent.vue"
  import EmptyListComponent from "@/components/EmptyListComponent.vue"
  import TodoItemButtonComponent from "@/components/TodoItemButtonComponent.vue"
  import TodoListComponent from "@/components/TodoListComponent.vue"
  import HeaderComponent from "@/components/HeaderComponent.vue"

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
        text: "",
        newTodo: "",
        drag: false, 
      }
    },
    setup(){
      const todos = ref<ITodo[]>([]);

      const indexNumber = ref(0); // const indexNumber = {value: 0}

      //To add new item to the list
      function addTodo(newTodo: string): void {
        todos.value.unshift({
          text: newTodo,
          createdAt: new Date(),
          done: false,
          edit: false,
        });
      }

      function editTodo(update: { text: string; indexNumber: number; }){
        todos.value[update.indexNumber].text = update.text;
        todos.value[update.indexNumber].edit = false;
        //alert(value.text + value.indexNumber);
        //editTodoText.value = "";
      }

      function markAsDone(index: number): void {
        todos.value[index].done = true;
      }

      function markAsUndone(index: number): void {
        todos.value[index].done = false;
      }

      function removeTodo(index: number): void {
        if (confirm("Are you sure?")){
          todos.value.splice(index, 1);
        }
      }

      function editTodoTitle(index: number): void {
        todos.value[index].edit = true;
      }

      function markAllDone(){
        todos.value.forEach((todo) => todo.done = true);
      }

      function unmarkAllDone(){
        todos.value.forEach((todo) => todo.done = false);
      }

      function removeAllDone(){
        if (confirm("Are you sure to delete all?")){
          todos.value = [];
        }
      }

      return {
        todos,
        indexNumber,
        addTodo,
        editTodoTitle,
        editTodo,
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
