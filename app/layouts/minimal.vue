<template>
  <slot />
</template>

<script setup>
// Bạn vẫn có thể dùng useHead ở đây để đặt các thẻ meta chung cho các trang dùng layout này
useHead({
  bodyAttrs: {
    // Thêm class vào thẻ <body> để đảm bảo màu nền và font chữ được kế thừa
    class: 'bg-base-bg text-zinc-100 antialiased'
  },
  htmlAttrs: {
    lang: 'en'
  },
})
</script>
