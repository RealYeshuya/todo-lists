<template>
    <div>
        <div v-if="!update"
            class="todoTitle"
            :class="{todoDone: done}">{{ title }}</div>
        <div v-else>
            <input type="text" 
                :value="editText"
                class="editTodoInput"
                @keydown.enter="editTodo($event, indexNum)"
                />  
        </div>
        <div class="todoDescription">{{ created }}</div>
    </div>
</template>

<script lang="ts">

    import { defineComponent } from 'vue';
        
    export default defineComponent({
        emits: ["edit-text"],
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
        setup(props, {emit}) {
            
            function editTodo(event: any, index: number){

                const update = event.target.value;
                
                if(update != ""){
                    emit("edit-text", {text: update, indexNumber: index})
                } else {
                    alert("Invalid input")
                }
            }

            return{
                editTodo,
            }
        },
    })

</script>