<template>
  <component :is="tag" :style="styleProps" class="l-text-component">
    {{ text }}
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { pick } from 'lodash-es'
import { textDefaultProps, transformToComponentProps, textStylePropNames } from '@/defaultProps'

const defaultProps = transformToComponentProps(textDefaultProps)

export default defineComponent({
  name: 'LText',
  props: {
    ...defaultProps,
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props) {
    const styleProps = computed(() => pick(props, textStylePropNames))
    console.log(styleProps.value)

    return {
      styleProps
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
</style>
