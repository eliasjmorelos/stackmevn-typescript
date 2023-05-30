<template>
    <div class="col-md-4 offset-md-4">
        <form
            class="card card-body" 
            @submit.prevent="saveTask()">
            <h1 class="text-center h3">Create Task</h1>
            <input 
                class="form-control mb-3"
                type="text" 
                placeholder="Write a title" 
                v-model="task.title" 
                autofocus/>
            <textarea 
                rows="3" 
                class="form-control mb-3"
                placeholder="Write a decription" 
                v-model="task.description">
            </textarea>

            <button
                :disabled="!task.title || !task.description" 
                class="btn btn-primary">Save</button>
        </form>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { Task } from "@/interfaces/Task";
    import {createTask} from "@/services/TaskService";

    export default defineComponent({
        data(){
            return{
                task: {} as Task
            }
        },
        methods: {
            async saveTask(){
                const res = await createTask(this.task)
                console.log(res)
                this.$router.push({name: "tasks"})
            }
        }
    })
</script>