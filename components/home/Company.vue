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
    <div
      class='relative -top-[100px] rounded-t-3xl xl:rounded-t-[60px]  bg-white flex flex-col items-center pb-20 xl:pb-[178px]'>
      <!-- <img class="relative -top-[30px] xl:-top-[200px] w-4/5 xl:w-[1256px] company-thumb" src="/img/company-thumb.png"
                                                                                                                          alt=""> -->
      <div class="relative -top-[30px] xl:-top-[200px] w-[90%] xl:w-[1256px] company-thumb">
        <div
          class="w-full bg-[#14addd] px-4 pt-2 pb-8 xl:pt-[38px] xl:pb-[125px] xl:px-[75px] flex items-center rounded-t-md xl:rounded-t-3xl">
          <img src="/img/icon-left.png" alt="" class="mr-2 xl:mr-[30px] w-[5px] h-2 xl:w-auto xl:h-auto">
          <img src="/img/icon-right.png" alt="" class="mr-2 xl:mr-[25px] w-[5px] h-2 xl:w-auto xl:h-auto">
          <input type="text" class="w-3/5 h-3  xl:h-[40px] mr-[15px] pl-[10px]">
          <input type="text" class="w-1/4 h-3  xl:h-[40px] pl-[10px]">
          <div class="bg-[#455A64]  box-border w-3 h-3  xl:w-10 xl:h-10 flex justify-center items-center">
            <img src="/img/icon-search.png" class="w-[10px] h-[10px] xl:w-auto xl:h-auto" alt="">
          </div>
        </div>
        <div class="bg-[#fff] p-[15px] xl:p-[40px] flex flex-row">
          <div class="w-[60%]">
            <div class="flex flex-row gap-[10px] xl:gap-[45px] mb-[35px]">
              <div class="flex-1">
                <h4 class="mb-2 xl:mb-[25px] text-[#A6A6A6]">这里是标题</h4>
                <p class="text-xs xl:text-sm text-[#EBEBEB]">
                  这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容
                </p>
              </div>
              <img class="w-[84px] h-[64px] xl:w-auto xl:h-auto" src="/img/content-img.png" alt="">
            </div>
            <div class="w-full">
              <h4 class="mb-[18px] text-[#A6A6A6]">这里是标题</h4>
              <p class="text-xs xl:text-sm text-[#EBEBEB]">
                这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容
              </p>
            </div>
          </div>
          <div class="ml-[10px] xl:ml-[44px] flex-1">
            <h4 class="h-[15px] block mb-[20px] text-[#A6A6A6]">这里是标题</h4>
            <p class="text-xs xl:text-sm mb-2 xl:mb-[40px] text-[#EBEBEB]">
              这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是
            </p>
            <p class="text-xs xl:text-sm mb-2 xl:mb-[50px] text-[#EBEBEB]">
              这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这
            </p>
            <p class="text-xs xl:text-sm text-[#EBEBEB]">这里是内容这里是这里是内容这里是内容容这里是内容这里是内容</p>
          </div>
        </div>
      </div>
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