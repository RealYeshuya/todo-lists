<template>
    <!-- The Modal View -->
    <Transition name="slide-fade">
        <div class="vue-modal" v-show="open">
            <div class="vue-modal-inner">
                <div class="vue-modal-content">
                    <div> <h1 class="modal-title">{{title}}</h1> </div>
                    <div class="edit-task-form">
                        <div class="label">Task:</div>
                        <input type="text" class="edit-task-input">
                        <div class="edit-task-button-container">
                            <button type="button" @click="close" class="close-button">Close</button>
                            <button type="button" @click="close" class="update-button">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script lang="ts">
export default {
    props: {
        open: {
            type: Boolean,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        task: {
            type: String,
            required: true,
        },
        indexNum: {
            type: Number,
            required: true,
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
*,
::before
::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.vue-modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
}

.vue-modal-inner{
    max-width: 500px;
    margin: 2rem auto;
}

.vue-modal-content{
    position: relative;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-clip: padding-box;
    border-radius: 4px;
    padding: 1rem;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.modal-title{
    font-size: 32px;
    text-align: center;
}

.edit-task-form{
    margin-top: 15px;
}

.label {
    font-size: 24px;
    margin-bottom: 5px;
}

.edit-task-input {
    width: 100%;
    padding: 8px;
    border-width: 1px;
    border-radius: 4px;
}

.edit-task-button-container{
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
}

.close-button{
    width: 200px;
    margin-bottom: 16px;
    background-color: #343434;
    padding: 12px;
    border-radius: 4px;
    color: white;
}

.close-button:hover{
    background-color: #e6e4e4;
    color: #757474;
}

.update-button{
    width: 200px;
    margin-bottom: 16px;
    background-color: #343434;
    padding: 16px;
    border-radius: 4px;
    color: white;
}

.update-button:hover{
    background-color: #e6e4e4;
    color: #757474;
}
</style>