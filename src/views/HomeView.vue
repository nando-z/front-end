<script setup>
import { ref, onMounted } from 'vue'

const selectedFile = ref(null)
const previewImage = ref(null)
const imageInput = ref(null)
const imageLabel = ref('')

onMounted(() => {
  imageInput.value.addEventListener('change', (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        previewImage.value = e.target.result
        selectedFile.value = file
        imageLabel.value = file.name
      }
      reader.readAsDataURL(file)
    }
  })
})

const cancelUpload = () => {
  selectedFile.value = null
  previewImage.value = null
  imageInput.value.value = ''
  imageLabel.value = ''
}
</script>

<template>
  <div class="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h1 class="text-4xl sm:text-5xl font-bold text-primary mb-4">
        Welcome to My Galleryg
      </h1>
      <p class="text-lg text-base-content/80">
        Share your favorite moments with the world
      </p>
    </div>

    <div class="w-full mb-4 max-w-xl bg-base-100 rounded-2xl shadow-xl p-8 transition-all duration-300">
      <form @submit.prevent="uploadImage" class="space-y-6">
        <!-- File Upload Section -->
        <div class="space-y-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text text-lg">Upload Your Image</span>
            </label>

            <div class="flex items-center gap-4">
              <input type="file" ref="imageInput" class="hidden" accept="image/*" />
              <button type="button" @click="imageInput.click()"
                class="btn btn-outline btn-primary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Choose Image
              </button>
              <span class="text-sm text-base-content/60 truncate">
                {{ imageLabel || 'No file selected' }}
              </span>
            </div>
          </div>

          <!-- Image Label Input -->
          <div class="form-control">
            <label class="label">
              <span class="label-text text-lg">Image Description</span>
            </label>
            <input type="text" class="input input-bordered text-lg" placeholder="Enter a description..." />
          </div>

          <!-- Preview Image -->
          <div v-if="previewImage"
            class="group relative aspect-video rounded-xl border-2 border-dashed border-base-300 overflow-hidden transition-all duration-300">
            <img :src="previewImage"
              class="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
            <div
              class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button type="button" @click="cancelUpload" class="btn btn-ghost text-white">
                Remove Image
              </button>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-between items-center">
          <button type="button" @click="cancelUpload" class="btn btn-ghost" :disabled="!selectedFile">
            Cancel
          </button>
          <button type="submit" class="btn btn-primary px-8" :disabled="!selectedFile">
            Upload
          </button>
        </div>
      </form>
    </div>
  </div>
</template>