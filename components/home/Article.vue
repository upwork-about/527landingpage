<script setup >
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div class='flex flex-col lg:flex-row justify-center gap-[290px] bg-white pt-20 pb-40 lg:py-[200px]'>

    <div class="w-full px-6 lg:px-0 lg:w-[533px] flex flex-col items-center">
      <h3 class="text-h w-full  lg:w-[473px] text-4xl">Everything need to quickly write exciting new article</h3>
      <p class="mt-4 text-h text-opacity-80 w-full lg:w-[473px] text-base">
        From in-depth tutorials, to detailed changelogs, to comprehensive documentation, AssemblyAI is focused on
        providing developers a great experience every step of the way.
      </p>
      <div class="relative article-box mt-[66px] w-[273px] h-[407px] lg:w-[533px] lg:h-[412px]">
        <div class="absolute article-box -top-5 -translate-x-1/4 lg:-translate-x-1/2 w-[193px] lg:w-[350px] p-3 lg:p-6">
          <h4 class="text-h text-base lg:text-2xl font-semibold">Save Your Time</h4>
          <p class="mt-[10px] text-h text-sm">
            AI content generators can help you scale your content strategy quickly and easily without spending a time.
          </p>
        </div>
        <div
          class="absolute article-box top-[115px] lg:top-[78px] right-0 translate-x-1/4 lg:translate-x-1/3 w-[193px] lg:w-[350px] p-3 lg:p-6 overflow-hidden">
          <h4 class="text-h text-base lg:text-2xl font-semibold">Unique Article</h4>
          <p class="mt-[10px] text-h text-sm">
            AI content generators can help you scale your content strategy quickly and easily without spending a time.
          </p>
        </div>
        <div class="absolute article-box -bottom-16 lg:bottom-5 -translate-x-1/3 w-[193px] lg:w-[350px] p-3 lg:p-6">
          <h4 class="text-h text-base lg:text-2xl font-semibold">Different Types of Articles</h4>
          <p class="mt-[10px] text-h text-sm">
            There are a number of different types of articles that AI can write foryou.
          </p>
        </div>
      </div>
      <button
        class="mt-24 lg:mt-12 w-[168px] h-[56px] bg-gradient-to-b from-[#1ABAED] to-[#0073DC] text-white rounded">Start
        Now
      </button>
    </div>
    <div class="hidden lg:flex flex-col w-[500px]">
      <img src="@img/article-thumb.png" alt="">
    </div>
  </div>
</template>
<style scoped lang='less'></style>