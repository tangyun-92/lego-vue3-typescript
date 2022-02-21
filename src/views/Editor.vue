/* * @Author: TangYun * @Date: 2022/2/18 22:27 * @Description: 编辑器页面 */
<template>
  <div class="editor-container">
    <a-layout>
      <a-layout-sider width="300" style="background: #fff">
        <div class="sidebar-container">
          组件列表
          <components-list
            :list="defaultTextTemplates"
            @onItemClick="addItem"
          ></components-list>
        </div>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content class="preview-container">
          <p>画布区域</p>
          <div class="preview-list" id="canvas-area">
            <component
              v-for="component in components"
              :key="component.id"
              :is="component.name"
              v-bind="component.props"
            ></component>
          </div>
        </a-layout-content>
      </a-layout>
      <a-layout-sider
        width="300"
        style="background: #fff"
        class="settings-panel"
      >
        组件属性
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '@/store'
import LText from '@/components/LText.vue'
import ComponentsList from '@/components/ComponentsList.vue'
import { defaultTextTemplates } from '@/defaultTextTemplates'

export default defineComponent({
  name: 'Editor',
  components: {
    LText,
    ComponentsList
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const components = computed(() => store.state.editor.components)
    const addItem = (props: any) => {
      store.commit('addComponent', props)
    }

    return {
      components,
      defaultTextTemplates,
      addItem
    }
  }
})
</script>

<style>
.editor-container .preview-container {
  padding: 24px;
  margin: 0;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.editor-container .preview-list {
  padding: 0;
  min-width: 375px;
  min-height: 200px;
  border: 1px solid #efefef;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  margin: 50px 0 0;
  max-height: 80vh;
}

.page-title {
  display: flex;
}

.page-title .inline-edit span {
  font-weight: 500;
  margin-left: 10px;
  font-size: 16px;
}

.preview-list.canvas-fix .edit-wrapper > * {
  box-shadow: none !important;
}

.preview-list.canvas-fix {
  position: absolute;
  max-height: none;
}
</style>
