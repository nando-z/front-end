<!-- this is page not found -->
<script setup></script>
<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-900">
    <h1 class="text-7xl font-bold text-error">404</h1>
    <p class="text-3xl text-base-content mt-4">Page Not Found</p>
    <router-link :to="{ name: 'home' }" class="btn btn-lg mt-6">Go to Home</router-link>
  </div>
</template>
