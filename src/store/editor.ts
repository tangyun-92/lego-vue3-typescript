import { Module } from 'vuex'
import { GlobalDataProps } from '@/store/index'
import { v4 as uuidv4 } from 'uuid'

interface ComponentData {
  // 这个元素的属性
  props: { [key: string]: any};
  // id，uuid v4 插件生成
  id: string;
  //业务组件库名称：l-text, l-image 等
  name: string;
}

export interface EditorProps {
  // 供中间编辑器渲染的数组
  components: ComponentData[];
  //当前编辑的元素
  currentElement: string;
}

export const testComponents: ComponentData[] = [
  {
    id: uuidv4(),
    name: 'LText',
    props: {
      text: 'hello'
    },
  },
  {
    id: uuidv4(),
    name: 'LText',
    props: {
      text: 'hello1'
    },
  },
  {
    id: uuidv4(),
    name: 'LText',
    props: {
      text: 'hello2'
    },
  },
]

const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testComponents,
    currentElement: ''
  }
}

export default editor
