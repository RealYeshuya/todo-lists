import useData from "./use-data";

function useTodo(){

    const { todos } = useData();

    function addTodo(text: string){
        if(text !== ""){
            todos.value.unshift({
                text: text,
                createdAt: new Date(),
                done: false,
                edit: false,
              });
        } else {
            alert("Please add a TODO")
        }
    }

    function editTodo(text: string, indexNumber: number){
        if(text !== ""){
            todos.value[indexNumber].text = text;
            todos.value[indexNumber].edit = false;
            alert("TODO updated!")
        }else {
            alert("Invalid Input")
        }
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
        addTodo,
        editTodo, 
        markAsDone, 
        markAsUndone, 
        removeTodo, 
        editTodoTitle, 
        markAllDone,
        unmarkAllDone,
        removeAllDone
    }
}

export default useTodo;