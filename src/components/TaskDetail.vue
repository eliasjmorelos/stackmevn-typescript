<template>
    <div class="col-md-4 offset-md-4">
       
        <form 
            class="card card-body"
            @submit.prevent="handleUpdate()">
            <h1 class="text-center h3 mb3">Tasks Detail</h1>
            <input 
                type="text" 
                v-model="currentTask.title" 
                class="form-control mb-3"/>
            <textarea 
                rows="3" 
                v-model="currentTask.description"
                class="form-control mb-3">
            </textarea>
            <button  class="btn btn-success">Update</button>
        </form>
        <div class="text-center">
            <button 
            class="btn btn-danger text-center"
            @click="handleDeleteTask()">Delete</button>
        </div>
       
    </div>

</template>

<script lang="ts">
import { deleteTask, getTask, updateTask } from "@/services/TaskService";
import { defineComponent } from "@vue/runtime-core";
import {Task} from "@/interfaces/Task"

   export default defineComponent({
    data(){
        return {
            currentTask: {} as Task
        }
    },
    methods: {
        async loadTask(id: string){
            const res = await getTask(id)
            this.currentTask = res.data

        },
        async handleUpdate(){
            if(typeof this.$route.params.id === "string"){
                const res = await updateTask(this.$route.params.id, this.currentTask)
                console.log(res)
                this.$router.push("/")
            }
            
        },
        async handleDeleteTask(){
            if(typeof this.$route.params.id === "string"){
                const res = await deleteTask(this.$route.params.id)
                console.log(res)
                this.$router.push("/")
            }
        }
    },
    mounted(){
        if(typeof this.$route.params.id === "string"){
            this.loadTask(this.$route.params.id)
        }
        
    }
   })
</script>