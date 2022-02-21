<template>
  <component
    :is="tag"
    :style="styleProps"
    class="l-text-component"
    @click="handleClick"
  >
    {{ text }}
    <span v-if="showDelIcon" class="del-icon" @click="removeItem">x</span>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  textDefaultProps,
  transformToComponentProps,
  textStylePropNames
} from '@/defaultProps'
import useComponentCommon from '@/hooks/useComponentCommon'

const defaultProps = transformToComponentProps(textDefaultProps)

export default defineComponent({
  name: 'LText',
  props: {
    ...defaultProps,
    showDelIcon: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  emits: ['remove-item'],
  setup(props, context) {
    const { styleProps, handleClick } = useComponentCommon(
      props,
      textStylePropNames
    )
    const removeItem = () => {
      context.emit('remove-item')
    }

    return {
      styleProps,
      handleClick,
      removeItem
    }
  }
})
</script>

<style scoped>
h2.l-text-component,
p.l-text-component {
  margin-bottom: 0;
}
button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.l-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
  position: relative !important;
  margin: 5px 0;
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
