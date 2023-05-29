<script setup >
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div class="bg-[url('/img/bg.png')] bg-[length:100%_100%] text-center pt-8 pb-50 xl:pb-[373px]">
    <div class="flex flex-col items-center px-6 xl:px-0">
      <img class="w-[140px]" src="/img/logo.png" alt="">
      <h3 class="mt-12 xl:mt-40 xl:w-[978px] text-[30px] xl:text-7xl text-white">Create Your Content with Our Article
        Generator
      </h3>
      <p class="mt-6 text-5 xl:w-[629px] text-white">
        Artificial intelligence makes it fast & easy to create content for your blog, newspaper, website , and more!
      </p>
      <button class="mt-12 w-[168px] h-[56px] bg-gradient-to-b from-[#1ABAED] to-[#0073DC] text-white rounded">Start Now
      </button>
    </div>

  </div>
</template>
<style scoped lang='less'></style>