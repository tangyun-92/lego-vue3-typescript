/*
* @Author: TangYun
* @Date: 2022/2/18 10:53
* @Description: 允许.vue文件导入--定义文件
*/
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
