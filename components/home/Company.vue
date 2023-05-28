<script setup >
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'


const props = defineProps({})
onMounted(() => { })
const list = computed(() => {
  return [
    {
      icon: 'company-list-1.png',
      title: 'Layers'
    },
    {
      icon: 'company-list-2.png',
      title: 'Sisyphus'
    },
    {
      icon: 'company-list-3.png',
      title: 'Circooles'
    },
    {
      icon: 'company-list-4.png',
      title: 'Catalog'
    },
    {
      icon: 'company-list-5.png',
      title: 'Quotient'
    },
  ]
})
</script>
<template>
  <div class="bg-[#061237]">
    <div class='rounded-t-[60px]  bg-white flex flex-col items-center pb-20 xl:pb-[178px]'>
      <img class="relative -top-[30px] xl:-top-[200px] w-4/5 xl:w-[1256px] company-thumb" src="/img/company-thumb.png"
        alt="">
      <div class="flex flex-col items-center px-6 xl:px-0">
        <p class="text-6 text-[#040c25]">Trusted by the World's Best Companies</p>
        <div class="mt-4 xl:mt-12 flex justify-center flex-wrap gap-y-4 gap-x-8 xl:gap-20">
          <div class="flex gap-2 xl:gap-4 items-center" v-for="item in list" :key="item.title">
            <img class="w-5 xl:w-10" :src="`/img/${item.icon}`" alt="">
            <span class="text-sm xl:text-xl font-medium">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='less'></style>