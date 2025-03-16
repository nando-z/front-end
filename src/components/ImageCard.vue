<script setup>
import { ref } from 'vue';

const title = ref('title')
const description = ref('description')

</script>

<!-- image card component -->
<template>
    <div class="card compact bg-base-300 shadow-xl">
        <figure>
            <img :src="url" alt="Image" class="h-48 w-full object-cover rounded-t" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{ title }}</h2>
            <p class="text-base-content text-opacity-60">{{ description }}</p>
        </div>
    </div>
</template>
