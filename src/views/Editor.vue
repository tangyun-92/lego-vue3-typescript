/*
* @Author: TangYun
* @Date: 2022/2/20 15:54
* @Description: 编辑器
*/
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
            <editor-wrapper
              v-for="component in components"
              :key="component.id"
              :id="component.id"
              :active="component.id === (currentElement && currentElement.id)"
              @setActive="setActive"
            >
              <div class="preview-item">
                <component
                  :is="component.name"
                  v-bind="component.props"
                  :showDelIcon="true"
                />
                <span
                  class="del-icon"
                  @click="removeItem(component.id)"
                >x</span>
              </div>
            </editor-wrapper>
          </div>
        </a-layout-content>
      </a-layout>
      <a-layout-sider
        width="300"
        style="background: #fff"
        class="settings-panel"
      >
        组件属性
        <pre>
          {{ currentElement && currentElement.props }}
        </pre>
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
import EditorWrapper from '@/components/EditorWrapper.vue'
import { ComponentData } from '@/store/editor'

export default defineComponent({
  name: 'Editor',
  components: {
    LText,
    ComponentsList,
    EditorWrapper
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const components = computed(() => store.state.editor.components)
    const currentElement = computed<ComponentData | null>(() => store.getters.getCurrentElement)
    const addItem = (props: any) => {
      store.commit('addComponent', props)
    }
    const removeItem = (id: string) => {
      store.commit('removeComponent', id)
    }
    const setActive = (id: string) => {
      store.commit('setActive', id)
    }

    return {
      components,
      defaultTextTemplates,
      addItem,
      removeItem,
      setActive,
      currentElement
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

.preview-list .preview-item {
  display: flex;
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

.del-icon {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #999;
  border-radius: 50%;
  text-align: center;
  line-height: 12px;
  font-family: sans-serif;
  font-size: 12px;
  color: #999;
  font-weight: 100;
}
</style>
