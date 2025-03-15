<template>
    <div class="container mx-auto p-4">
        <header class="mb-4">
            <nav>
                <ul class="flex items-center space-x-3">

                    <li>
                        <RouterLink :to="{ name: 'register' }">Register</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'login' }">Login</RouterLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <RouterView />
        </main>
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
