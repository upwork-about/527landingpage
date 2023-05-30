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
    <div class='relative -top-[100px] rounded-t-[60px]  bg-white flex flex-col items-center pb-20 xl:pb-[178px]'>
      <!-- <img class="relative -top-[30px] xl:-top-[200px] w-4/5 xl:w-[1256px] company-thumb" src="/img/company-thumb.png"
        alt=""> -->
        <div class="relative -top-[30px] xl:-top-[200px] w-4/5 xl:w-[1256px] company-thumb ">
          <div class="w-full bg-[#14addd] xl:pt-[37.72px] xl:pb-[125.72px] xl:px-[75px] flex rounded-t-3xl">
            <img src="/img/icon-left.png" alt="" class="mr-[30px]">
            <img src="/img/icon-right.png" alt="" class="mr-[25px]">
            <input type="text" class="flex-1 mr-[15px] pl-[10px]">
            <input type="text" class="pl-[10px]">
            <div class="bg-[#455A64]  box-border w-[40px] h-[40px] flex justify-center items-center">
              <img src="/img/icon-search.png" class="" alt="">
            </div>
          </div>
          <div class="bg-[#fff] p-[40px] flex flex-row rounded-b-3xl">
            <div class="">
                <div class="flex flex-row mb-[35px]">
                  <div class="mr-[45px]">
                    <h4 class="mb-[25px]">这里是标题</h4>
                    <p class="w-[362px]">这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容</p>
                  </div>
                  <img src="/img/content-img.png" alt="">
                </div> 
                <div class="h-[175px] w-full">
                  <h4 class="mb-[18px]">这里是标题</h4>
                  <p class="w-[726px]">这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容</p>
                </div>
            </div>
            <div class="ml-[44px] flex-1">
              <h4 class="h-[15px] block mb-[20px]">这里是标题</h4>
              <p class="leading-[3rem mb-[40px]">这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容</p>
              <p class="leading-[3rem mb-[50px]">这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容</p>
              <p class="leading-[3rem">这里是内容这里是这里是内容这里是内容容这里是内容这里是内容这里是内容这里是内容这容这里是内容这里是内容这里是内容</p>
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