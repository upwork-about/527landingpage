<script setup >
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
onMounted(() => { })
let list = computed(() => {
  return [
    {
      title: 'Product',
      linkList: [
        {
          title: 'Product',
          link: '',
        },
        {
          title: 'Product',
          link: '',
        },
        {
          title: 'Product',
          link: '',
        }
      ]
    },
    {
      title: 'Feature',
      linkList: [
        {
          title: 'Feature',
          link: '',
        },
        {
          title: 'Feature',
          link: '',
        },
        {
          title: 'Feature',
          link: '',
        }
      ]
    },
    {
      title: 'Resource',
      linkList: [
        {
          title: 'Resource',
          link: '',
        },
        {
          title: 'Resource',
          link: '',
        },
        {
          title: 'Resource',
          link: '',
        }
      ]
    },
    {
      title: 'Company',
      linkList: [
        {
          title: 'Company',
          link: '',
        },
        {
          title: 'Company',
          link: '',
        },
        {
          title: 'Company',
          link: '',
        }
      ]
    },
  ]
})
</script>
<template>
  <div class='bg-white relative'>
    <div
      class="absolute left-1/2 -top-[100px] -translate-x-1/2 flex flex-col items-center w-4/5 rounded-3xl xl:w-[1345px] px-8 xl:px-0 py-20 bg-[url('/img/footer-thumb.png')] bg-[length:100%_100%]">
      <h3 class="text-3xl xl:text-[48px] text-white">Let's talk</h3>
      <p class="mt-5 text-sm xl:text-base text-center text-slate-400 xl:w-[575px]">
        Our product specialists and customer success team are always available to help you write your content. Feel free
        to contact us for any queries.
      </p>
      <button class="mt-12 w-[168px] h-[56px] bg-gradient-to-b from-[#1ABAED] to-[#0073DC] text-white rounded">Contact Us
      </button>
    </div>
    <div
      class="flex flex-col items-center xl:items-stretch  xl:flex-row justify-center gap-10 xl:gap-[270px] bg-[#061237] rounded-t-3xl xl:rounded-t-[60px] pt-[363px] pb-[110px]">
      <img class="w-[140px] h-[60px]" src="/img/logo.png" alt="">
      <div class="flex flex-wrap px-6 xl:px-0 gap-y-10 xl:gap-40 ">
        <div class="flex flex-col  gap-6 text-white w-[160px] pl-4 xl:w-auto" v-for="item in list" :key="item.title">
          <h5 class="text-xl">{{ item.title }}</h5>
          <div class="flex flex-col gap-4 ">
            <a class="cursor-pointer" v-for="(link, i) in item.linkList" :key="i">{{ link.title }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#061237] xl:hidden flex gap-4 text-[#FFFFFFB2] text-sm xl:text-base justify-end px-6 pb-4">
      <a>Privacy</a>
      <a>Terms</a>
    </div>
    <div class="bg-[#061237]">
      <div
        class="px-6 xl:px-0 xl:max-w-[1320px] mx-auto h-14 xl:h-20 border-t-2 border-t-line flex items-center justify-center xl:justify-between text-[#FFFFFFB2] text-sm xl:text-base">
        <p>© 2010-2020 Access Media. All rights reserved.</p>
        <div class="hidden xl:flex  gap-4 cursor-pointer">
          <a>Privacy</a>
          <a>Terms</a>
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped lang='less'></style>