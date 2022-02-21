<template>
  <div class="props-table">
    <div
      v-for="(value, key) in finalProps"
      :key="key"
      class="prop-item"
    >
      <component
        v-if="value"
        :is="value.component"
        :value="value.value"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { TextComponentProps } from '@/defaultProps'
import { reduce } from 'lodash-es'
import { mapPropsToForms, PropsToForms } from '@/propsMap'

export default defineComponent({
  name: 'PropsTable',
  props: {
    props: {
      type: Object as PropType<TextComponentProps>,
      required: true
    }
  },
  setup(props) {
    const finalProps = computed(() => {
      return reduce(props.props, (result, value, key) => {
        const newKey = key as keyof TextComponentProps
        const item = mapPropsToForms[newKey]
        if (item) {
          item.value = value
          result[newKey] = item
        }
        return result
      }, {} as PropsToForms)
    })

    return {
      finalProps
    }
  }
})
</script>

<style>
.prop-item {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}

.label {
  width: 28%;
}

.prop-component {
  width: 70%;
}
</style>
