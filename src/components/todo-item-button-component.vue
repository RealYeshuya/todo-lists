<template>
    <div class="space-x-2">
        <button v-if="!mark"
            class="px-2 text-blue-600" 
            @click="$emit('on-edit-title', indexNum)"
            title="Edit TODO">&#9998;</button>
        <button class="px-2 text-red-600" 
            :class="{'disableButton': edit}"
            @click="$emit('on-remove-todo', indexNum)"
            title="Remove TODO">&times;</button>
        <button v-if="!mark" 
            class="px-2 text-green-600" 
            :class="{'disableButton': edit}"
            @click="$emit('on-mark-done-todo', indexNum)"
            title="Mark as done">&check;</button>
        <button v-else
            class="px-2 text-orange-600" 
            @click="$emit('on-unmark-done-todo', indexNum)"
            title="Mark as undone">&#8630;
        </button>
    </div>
</template>

<script lang="ts">

    import { defineComponent } from 'vue'

    export default defineComponent({
        emits: ["on-edit-title", "on-remove-todo", "on-mark-done-todo", "on-unmark-done-todo"],
        props: {
            mark: {
                type: Boolean,
                required: true,
            },
            edit: {
                type: Boolean,
                required: true,
            },
            indexNum: {
                type: Number,
                required: true,
            }
        },
    })

</script>