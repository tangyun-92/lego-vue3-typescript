<template>
  <div class="content-container">
    <TemplateList :list="testData" />
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import TemplateList from "@/components/TemplateList";

const testData = [
  {
    id: 1,
    title: '测试标题',
    author: 'ty',
    copiedCount: 2,
    coverImg:
        'https://static.imooc-lego.com/upload-files/screenshot-889755.png',
  },
  {
    id: 2,
    title: '测试标题',
    author: 'ty',
    copiedCount: 2,
    coverImg: 'http://static-dev.imooc-lego.com/imooc-test/sZHlgv.png',
  },
  {
    id: 3,
    title: '测试标题',
    author: 'ty',
    copiedCount: 2,
    coverImg:
        'https://static.imooc-lego.com/upload-files/screenshot-323204.png',
  },
  {
    id: 4,
    title: '测试标题',
    author: 'ty',
    copiedCount: 2,
    coverImg:
        'https://static.imooc-lego.com/upload-files/screenshot-677311.png',
  },
  {
    id: 5,
    title: '测试标题',
    author: 'ty',
    copiedCount: 2,
    coverImg:
        'https://static.imooc-lego.com/upload-files/screenshot-726751.png',
  },
  {
    id: 6,
    title: '测试标题',
    author: 'ty',
    copiedCount: 2,
    coverImg:
        'https://static.imooc-lego.com/upload-files/screenshot-682056.png',
  },
]

export default defineComponent({
  name: "Home",
  components: {
    TemplateList
  },
  setup() {
    return {
      testData
    }
  }
})
</script>

<style>
.page-title {
  color: #fff;
}

.content-container {
  background: #fff;
  padding: 0 24px 24px 30px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 50px auto;
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-title {
  color: #fff;
}
</style>
