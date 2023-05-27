<script setup >
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div
    class='flex flex-col-reverse px-6 lg:px-0 lg:flex-row justify-center gap-[110px] lg:gap-[290px] bg-[#061237] py-[68px] lg:py-[200px]'>
    <div class="flex flex-col items-center lg:items-start w-full lg:w-[500px]">
      <input class="w-full rounded-lg h-[56px] bg-[#040c25] shadow-input-box border-[#1ABAED] border-[1px]" type="text">
      <input class="mt-6 w-full rounded-lg h-[56px] bg-[#040c25] shadow-input-box border-[#1ABAED] border-[1px]"
        type="text">
      <input class="mt-6 w-full rounded-lg h-[56px] bg-[#040c25] shadow-input-box border-[#1ABAED] border-[1px]"
        type="text">
      <button
        class="mt-8 w-[168px] h-[56px] bg-gradient-to-b from-[#1ABAED] to-[#0073DC] text-white rounded">Generate</button>
      <textarea class="mt-16 w-full rounded-lg h-[266px] bg-[#040c25] shadow-input-box border-[#1ABAED] border-[1px]"
        name="" id="" cols="30" rows="10"></textarea>
      <button class="mt-8 w-[168px] h-[56px] bg-gradient-to-b from-[#1ABAED] to-[#0073DC] text-white rounded">Start
        Now</button>
    </div>
    <div class="w-full lg:w-[533px] flex flex-col items-center">
      <h3 class="text-white w-full lg:w-[473px] text-3xl lg:text-4xl">Everything need to quickly write exciting new
        article</h3>
      <p class="mt-4 text-white text-opacity-80 w-full lg:w-[473px] text-sm lg:text-base">From in-depth tutorials, to
        detailed
        changelogs, to
        comprehensive
        documentation, AssemblyAI is focused on
        providing developers a great experience every step of the way.</p>
      <div class="relative form-article-box mt-[66px] w-[273px] h-[299px] lg:w-[533px] lg:h-[412px]">
        <div
          class="absolute form-article-box -top-5 -translate-x-1/4 lg:-translate-x-1/2 w-[193px] lg:w-[350px] p-3 lg:p-6">
          <h4 class="text-white text-base lg:text-2xl font-semibold">Save Your Time</h4>
          <p class="mt-[10px] text-white text-xs lg:text-sm">
            AI content generators can help you scale your content strategy quickly and easily without spending a time.
          </p>
        </div>
        <div
          class="absolute form-article-box top-[115px] lg:top-[78px] right-0 translate-x-1/4 lg:translate-x-1/3 w-[193px] lg:w-[350px] p-3 lg:p-6 ">
          <h4 class="text-white text-base lg:text-2xl font-semibold">Unique Article</h4>
          <p class="mt-[10px] text-white text-xs lg:text-sm">
            AI content generators can help you scale your content strategy quickly and easily without spending a time.
          </p>
        </div>
        <div class="absolute form-article-box -bottom-16 lg:bottom-5 -translate-x-1/3 w-[193px] lg:w-[350px] p-3 lg:p-6">
          <h4 class="text-white text-base lg:text-2xl font-semibold">Different Types of Articles</h4>
          <p class="mt-[10px] text-white text-xs lg:text-sm">
            There are a number of different types of articles that AI can write foryou.
          </p>
        </div>

      </div>
    </div>
  </div>
</template>
<style scoped lang='less'></style>