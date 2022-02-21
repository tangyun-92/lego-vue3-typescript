<template>
  <div class="props-table">
    <div
      v-for="(value, key) in finalProps"
      :key="key"
      class="prop-item"
    >
      <span class="label" v-if="value.text">{{ value.text }}</span>
      <div class="prop-component">
        <component
          v-if="value"
          :is="value.component"
          :value="value.value"
          v-bind="value.extraProps"
        >
          <template v-if="value.options">
            <component
              :is="value.subComponent"
              v-for="(option, k) in value.options"
              :key="k"
              :value="option.value"
            >
              {{ option.text }}
            </component>
          </template>
        </component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { TextComponentProps } from '@/defaultProps'
import { reduce } from 'lodash'
import { mapPropsToForms, PropsToForms } from '@/propsMap'

interface FormProps {
  component: string;
  subComponent?: string;
  value: string;
  extraProps?: { [key: string]: any };
  text?: string;
  options?: { text: string; value: any }[];
  valueProp: string;
  eventName: string;
  events: { [key: string]: (e: any) => void };
}

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
          item.value = item.initTransform ? item.initTransform(value) : value
          result[newKey] = item
        }
        return result
      }, {} as { [key: string]: FormProps })
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
