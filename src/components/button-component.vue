<template>
    <div class="button-container">
        <button @click="markAllDone" class="markAllDone">Mark All Done</button>       
        <button @click="unmarkAllDone" class="unmarkAllDone">Unmark All Done</button>
        <button @click="removeAllDone" class="removeAll">Remove All</button>
    </div>
</template>

<script lang="ts">

    import { defineComponent } from 'vue'

    export default defineComponent({
        emits: ["on-mark-all-done", "on-unmark-all-done", "on-remove-all-done"],
        setup(props, { emit }){
            function markAllDone(){
                emit("on-mark-all-done")
            }
        
            function unmarkAllDone(){
                emit("on-unmark-all-done")
            }
        
            function removeAllDone(){
                emit("on-remove-all-done")
            }
        
            return {
                markAllDone,
                unmarkAllDone,
                removeAllDone,
            }
        }
    })
</script>