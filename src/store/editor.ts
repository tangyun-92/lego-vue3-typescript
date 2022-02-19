/*
* @Author: TangYun
* @Date: 2022/2/19 21:59
* @Description: 编辑器store
*/
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
      text: 'hello',
      fontSize: '20px',
      color: 'red',
      lineHeight: '1',
      textAlign: 'left',
      fontFamily: '"SimSun","STSong"',
    },
  },
  {
    id: uuidv4(),
    name: 'LText',
    props: {
      text: 'hello1',
      fontSize: '10px',
      fontWeight: 'bold',
      lineHeight: '2',
      textAlign: 'right',
      fontFamily: '"SimHei","STHeiti"',
    },
  },
  {
    id: uuidv4(),
    name: 'LText',
    props: {
      text: 'hello2',
      fontSize: '15px',
      actionType: 'url',
      url: 'https://www.baidu.com',
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
