<script setup>
import { onMounted, ref } from 'vue'
import ImageCard from '@/components/ImageCard.vue'
import axiosClient from '@/axios'

const images = ref([])

onMounted(() => {
  axiosClient.get('/api/images')
    .then(response => {
      console.log(response.data);

      images.value = response.data
    })
})
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="mt-10 text-center">
      <h1 class="text-5xl font-bold">My Images</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        <ImageCard v-for="image in images" :key="image.id" :url="image.url" :title="image.title"
          :description="image.description" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
