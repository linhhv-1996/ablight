<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Analytics />
  </div>
</template>

<script setup>
// Import component Analytics
import { Analytics } from '@vercel/analytics/nuxt'
</script>
