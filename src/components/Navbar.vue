<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <router-link to="/" class="navbar-brand">Vue TypeScript</router-link>
            <div class="">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Tasks</router-link>
                    </li>
                     <li class="nav-item">
                        <router-link class="nav-link" to="/tasks/new">Create Task</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/runtime-core";
    export default defineComponent({
        name: "MyNavbar",
    });
</script>