<script setup >
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div class='flex flex-col lg:flex-row items-center justify-center gap-[160px] bg-white pt-20 pb-40 lg:py-[200px]'>

    <div class="w-full px-6 lg:px-0 lg:w-[533px] flex flex-col items-center text-center">
      <h3 class="text-h w-full  lg:w-[473px] text-4xl">
        Get a complete article in just few minutes with Access Media
      </h3>
      <p class="mt-4 text-h text-opacity-80 w-full lg:w-[473px] text-base">
        Lorem ipsum dolor sit amet consectetur. In pulvinar odio tristique etiam. Faucibus quis velit amet est tortor
        integer amet. Cras aliquet convallis amet pellentesque arcu vel. Varius.
      </p>
      <div class="relative article-box mt-[66px] w-[273px] h-[407px] lg:w-[533px] lg:h-[412px] text-left">
        <div class="absolute article-box -top-5 -translate-x-1/4 lg:-translate-x-1/2 w-[193px] lg:w-[350px] p-3 lg:p-6">
          <h4 class="text-h text-base lg:text-2xl font-semibold">Generate Fresh Article</h4>
          <p class="mt-[10px] text-h text-sm">
            AI writing, you can overcome writer article and create new content that aligns with the latest trends by using
            the right words
          </p>
        </div>
        <div
          class="absolute article-box top-[115px] lg:top-[78px] right-0 translate-x-1/4 lg:translate-x-1/3 w-[193px] lg:w-[350px] p-3 lg:p-6 overflow-hidden">
          <h4 class="text-h text-base lg:text-2xl font-semibold">targeted content</h4>
          <p class="mt-[10px] text-h text-sm">
            AI writers can help you create targeted content for specific demographics.
          </p>
        </div>
        <div class="absolute article-box -bottom-16 lg:bottom-5 -translate-x-1/3 w-[193px] lg:w-[350px] p-3 lg:p-6">
          <h4 class="text-h text-base lg:text-2xl font-semibold">Publish</h4>
          <p class="mt-[10px] text-h text-sm">
            Lorem ipsum dolor sit amet consectetur. Id nunc mi sem metus adipiscing risus nisi
          </p>
        </div>
      </div>
      <button
        class="mt-24 lg:mt-12 w-[168px] h-[56px] bg-gradient-to-b from-[#1ABAED] to-[#0073DC] text-white rounded">Start
        Now
      </button>
    </div>
    <div class="hidden xl:flex flex-col w-[700px]">
      <img src="/img/article-thumb.png" alt="">
    </div>
  </div>
</template>
<style scoped lang='less'></style>