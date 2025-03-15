<script setup>
import { ref } from 'vue'

</script>

<template>
  <div class="hero mt-10 bg-base-200">
    <div class="hero-content text-center">
      <h1 class="text-5xl font-bold">My Images</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        <ImageCard v-for="image in images" :key="image.id" :url="image.url" :title="image.title"
          :description="image.description" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  padding: 2rem 1rem;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.grid {
  margin-top: 2rem;
}
</style>
