<template>
    <div class="button-container">
        <button @click="$emit('on-mark-all-done')" class="markAllDone">Mark All Done</button>       
        <button @click="$emit('on-unmark-all-done')" class="unmarkAllDone">Unmark All Done</button>
        <button @click="$emit('on-remove-all-done')" class="removeAll">Remove All</button>
    </div>
</template>

<script lang="ts">

    import { defineComponent } from 'vue'

    export default defineComponent({
        emits: ["on-mark-all-done", "on-unmark-all-done", "on-remove-all-done"],
    })
</script>