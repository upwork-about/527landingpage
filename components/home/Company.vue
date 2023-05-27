<script setup >
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getImageUrl } from '@/utils'
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
    <div class='rounded-t-[60px]  bg-white flex flex-col items-center pb-20 lg:pb-[178px]'>
      <img class="relative -top-[50px] lg:-top-[280px] w-[1400px]" src="@img/company-thumb.png" alt="">
      <div class="flex flex-col items-center ">
        <p class="text-6 text-[#040c25]">Trusted by the World's Best Companies</p>
        <div class="mt-4 lg:mt-12 flex justify-center flex-wrap gap-y-4 gap-x-8 lg:gap-20">
          <div class="flex gap-2 items-center" v-for="item in list" :key="item.title">
            <img class="w-5" :src="getImageUrl(item.icon)" alt="">
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='less'></style>