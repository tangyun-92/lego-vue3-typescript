import { createStore } from 'vuex'
import templates, { TemplatesProps } from '@/store/templates'
import user, { UserProps } from '@/store/user'

// 全局应用接口类型
export interface GlobalDataProps {
  user: UserProps;
  templates: TemplatesProps;
}

const store = createStore<GlobalDataProps>({
  modules: {
    templates,
    user
  }
})

export default store
