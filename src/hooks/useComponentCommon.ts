/*
* @Author: TangYun
* @Date: 2022/2/21 15:38
* @Description: 编辑器组件重用逻辑hooks
*/
import { computed } from 'vue'
import { pick } from 'lodash-es'
import { TextComponentProps } from '@/defaultProps'

const useComponentCommon = (
  props: Readonly<Partial<TextComponentProps>>, // Partial表示只是部分属性
  picks: string[]
) => {
  const styleProps = computed(() => pick(props, picks))
  const handleClick = () => {
    if (props.actionType === 'url' && props.url) {
      window.location.href = props.url
    }
  }
  return {
    styleProps,
    handleClick
  }
}

export default useComponentCommon
