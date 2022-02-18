/*
* @Author: TangYun
* @Date: 2022/2/18 22:23
* @Description: 用户store
*/
// 用户接口类型
import { Module } from 'vuex'
import { GlobalDataProps } from '@/store/index'

export interface UserProps {
  isLogin: boolean;
  userName?: string;
}

const user: Module<UserProps, GlobalDataProps> = {
  state: {
    isLogin: false,
    userName: ''
  },
  mutations: {
    login(state) {
      state.isLogin = true
      state.userName = 'ty'
    },
    logout(state) {
      state.isLogin = false
    }
  }
}

export default user
