<script setup >
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div
    class='flex flex-col xl:flex-row items-center justify-center gap-[160px] bg-white pt-20 pb-40 xl:py-[200px] overflow-hidden'>

    <div class="w-full px-6 xl:px-0 xl:w-[533px] flex flex-col items-center text-left">
      <h3 class="text-h w-full  xl:w-[473px] text-4xl font-bold">
        Get a complete article in just few minutes with Access Media
      </h3>
      <p class="mt-4 text-h text-opacity-70 w-full xl:w-[473px] text-base">
        Lorem ipsum dolor sit amet consectetur. In pulvinar odio tristique etiam. Faucibus quis velit amet est tortor
        integer amet. Cras aliquet convallis amet pellentesque arcu vel. Varius.
      </p>
      <div class="relative article-box mt-[66px] w-[83%] xs:w-[273px] h-[407px] xl:w-[533px] xl:h-[412px] text-left">
        <div
          class="absolute article-box -top-5 -translate-x-[15%] xs:-translate-x-[44px] xl:-translate-x-1/3 w-[193px] xl:w-[350px] p-3 xl:p-6">
          <h4 class="text-h text-base xl:text-2xl font-semibold">Generate Fresh Article</h4>
          <p class="mt-[10px] text-h text-xs xl:text-sm">
            AI writing, you can overcome writer article and create new content that aligns with the latest trends by using
            the right words
          </p>
        </div>
        <div
          class="absolute article-box top-[170px] xl:top-[78px] right-0 translate-x-[10%] xs:translate-x-[21px] xl:translate-x-1/3 w-[193px] xl:w-[350px] p-3 xl:p-6 overflow-hidden">
          <h4 class="text-h text-base xl:text-2xl font-semibold">Targeted Content</h4>
          <p class="mt-[10px] text-h text-xs xl:text-sm">
            AI writers can help you create targeted content for specific demographics.
          </p>
        </div>
        <div
          class="absolute article-box -bottom-5 xl:bottom-5 -translate-x-[20%] xs:-translate-x-[56px] xl:-translate-x-1/4 w-[193px] xl:w-[350px] p-3 xl:p-6">
          <h4 class="text-h text-base xl:text-2xl font-semibold">Publish</h4>
          <p class="mt-[10px] text-h text-xs xl:text-sm">
            Lorem ipsum dolor sit amet consectetur. Id nunc mi sem metus adipiscing risus nisi
          </p>
        </div>
      </div>
      <button
        class="mt-24 xl:mt-12 w-[168px] h-[56px] bg-gradient-to-b from-[#1ABAED] to-[#0073DC] text-white rounded">Start
        Now
      </button>
    </div>
    <div class="hidden xl:flex flex-col w-[700px]">
      <img src="/img/article-thumb.png" alt="">
    </div>
  </div>
</template>
<style scoped lang='less'></style>