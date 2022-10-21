<template>
  <div class="todoList-all">
    <h1 class="title">MY TODOLIST</h1>
    <!-- LIST CONTAINER -->

    <div class="todoList-container">
      <div class="todoList">
        <div class="todoItem-container" style="height: 500px">

          <!-- BUTTONS TO MARK, UNMARK AND REMOVE ALL TODO -->
          <div v-if="(todos.length !== 0)">
            <div class="button-container">
              <button @click="markAllDone" class="markAllDone">Mark All Done</button>       
              <button @click="unmarkAllDone" class="unmarkAllDone">Unmark All Done</button>
              <button @click="removeAllDone" class="removeAll">Remove All</button>
            </div>
          </div>

          <!-- LIST OF ALL TODOS -->
          <div v-for="(todo, index) in todos" 
            :key="index"
            class="p-8 bg-white shadow-md rounded flex items-center justify-between"
            :class="{'bg-green-500': todo.done}">
            <div>
              <div class="todoTitle"
                  :class="{todoDone: todo.done}">{{ todo.text }}</div>
              <div class="todoDescription">{{ todo.createdAt }}</div>
            </div>
            <!-- BUTTONS FOR MARK, UNMARK AND REMOVE TODO ITEM -->
            <div class="space-x-2">
              <button v-if="!todo.done"
                      class="px-2 text-blue-600" 
                      @click="isOpen = true; todoTask = todo.text; indexNumber = index"
                      title="Edit TODO">&#9998;</button>
              <button class="px-2 text-red-600" 
                      @click="removeTodo(index)"
                      title="Remove TODO">&times;</button>
              <button v-if="!todo.done" 
                      class="px-2 text-green-600" 
                      @click="markAsDone(index)"
                      title="Mark as done">&check;</button>
              <button v-else
                    class="px-2 text-orange-600" 
                    @click="markAsUndone(index)"
                    title="Mark as undone">&#8630;</button>
            </div>
          </div>

          <!-- IF TODO LIST IS EMPTY SHOW MESSAGE -->
          <div v-if="todos.length === 0" 
            class="todo-empty">
            You don't have any task to do.
          </div>
        </div>

        <div class="addTodo-container">
          <div class="addTodo">
            <h2 style="font-size: 20px; line-height: 28px; text-align: center;">ADD A TODO</h2>
            <input type="text" 
              v-model="todoText"
              @keydown.enter="addTodo"
              class="addTodoInput">
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- MODAL TO EDIT TASK -->
  <Modal 
    :open="isOpen" @close="isOpen = !isOpen"
    :title="'Edit Task'"
    :task="todoTask"
    :indexNum="indexNumber">
  </Modal>
</template>

<script lang="ts">

import {defineComponent, ref} from "vue";
import Modal from "./ModalView.vue"
import ITodo from "@/types/todos.interface"
export default defineComponent({
  components : { Modal },
  setup(){
    const todos = ref<ITodo[]>([]);

    const todoText = ref(""); // const todoText = {value: ""}
    const todoTask = ref(""); // const todoTask = {value: ""}
    const indexNumber = ref(0); // const indexNumber = {value: 0}
    const isOpen = ref(false); // const isOpen = {value: false}

    //To add new item to the list
    function addTodo(): void {
      todos.value.unshift({
        text: todoText.value,
        createdAt: new Date(),
        done: false,
      });

      todoText.value = "";
    }

    function markAsDone(index: number): void {
      todos.value[index].done = true;
      //console.log(index);
    }

    function markAsUndone(index: number): void {
      todos.value[index].done = false;
    }

    function removeTodo(index: number): void {
      if (confirm("Are you sure?")){
        todos.value.splice(index, 1);
      }
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
      todoText,
      isOpen,
      todoTask,
      indexNumber,
      addTodo,
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
