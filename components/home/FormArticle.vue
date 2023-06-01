<script setup >
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div
    class='flex flex-col-reverse px-6 xl:px-0 xl:flex-row justify-center gap-[110px] xl:gap-[250px] bg-[#061237] pb-[68px] xl:pt-[100px] xl:pb-[200px] overflow-hidden'>
    <div class="flex flex-col items-center xl:items-start w-full xl:w-[500px]">
      <input
        class="text-white pl-4 w-full rounded-lg h-[56px] bg-[#040c25] shadow-input-box border-[#1ABAED] border-[1px]"
        type="text">
      <input
        class="text-white pl-4 mt-6 w-full rounded-lg h-[56px] bg-[#040c25] shadow-input-box border-[#1ABAED] border-[1px]"
        type="text">
      <input
        class="text-white pl-4 mt-6 w-full rounded-lg h-[56px] bg-[#040c25] shadow-input-box border-[#1ABAED] border-[1px]"
        type="text">
      <button
        class="mt-8 w-[168px] h-[56px] bg-gradient-to-b from-[#1ABAED] to-[#0073DC] text-white rounded">Generate</button>
      <textarea
        class="text-white pl-4 mt-16 w-full rounded-lg h-[266px] bg-[#040c25] shadow-input-box border-[#1ABAED] border-[1px]"
        name="" id="" cols="30" rows="10"></textarea>
      <button class="mt-8 w-[168px] h-[56px] bg-gradient-to-b from-[#1ABAED] to-[#0073DC] text-white rounded">Start
        Now</button>
    </div>
    <div class="w-full xl:w-[533px] flex flex-col items-center">
      <h3 class="text-white w-full font-bold xl:w-[473px] text-3xl xl:text-4xl">
        Everything need to quickly write exciting new article
      </h3>
      <p class="mt-4 text-white text-opacity-80 w-full xl:w-[473px] text-sm xl:text-base">From in-depth tutorials, to
        detailed
        changelogs, to
        comprehensive
        documentation, AssemblyAI is focused on
        providing developers a great experience every step of the way.</p>
      <div
        class="relative form-article-box mt-[66px] w-[83%] xs:w-[273px] h-[299px] xl:w-[533px] xl:h-[412px] text-left xl:scale-x-90 xxl:scale-x-100">
        <div
          class="absolute form-article-box -top-5 -translate-x-[15%] xs:-translate-x-[44px] xl:-translate-x-1/2 w-[193px] xl:w-[350px] p-3 xl:p-6">
          <h4 class="text-white text-base xl:text-2xl font-semibold">Save Your Time</h4>
          <p class="mt-[10px] text-white text-xs xl:text-sm">
            AI content generators can help you scale your content strategy quickly and easily without spending a time.
          </p>
        </div>
        <div
          class="absolute form-article-box top-[115px] xl:top-[78px] right-0 translate-x-[10%] xs:translate-x-[21px] xl:translate-x-1/3 w-[193px] xl:w-[350px] p-3 xl:p-6 ">
          <h4 class="text-white text-base xl:text-2xl font-semibold">Unique Article</h4>
          <p class="mt-[10px] text-white text-xs xl:text-sm">
            AI can also help to ensure that your articles are error-free and of high quality.
          </p>
        </div>
        <div
          class="absolute form-article-box -bottom-16 xl:bottom-5 -translate-x-[20%] xs:-translate-x-[56px] xl:-translate-x-1/3 w-[193px] xl:w-[350px] p-3 xl:p-6">
          <h4 class="text-white text-base xl:text-2xl font-semibold">Different Types of Articles</h4>
          <p class="mt-[10px] text-white text-xs xl:text-sm">
            There are a number of different types of articles that AI can write foryou.
          </p>
        </div>

      </div>
    </div>
  </div>
</template>
<style scoped lang='less'></style>