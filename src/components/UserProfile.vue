/*
* @Author: TangYun
* @Date: 2022/2/18 22:25
* @Description: 用户状态组件
*/
<template>
  <a-button
    type="primary"
    class="user-profile-component"
    v-if="!user.isLogin"
    @click="login"
    >登录
  </a-button>
  <div v-else>
    <a-dropdown-button class="user-profile-component">
      <router-link to="/setting">{{ user.userName }}</router-link>
      <template v-slot:overlay>
        <a-menu class="user-profile-dropdown">
          <a-menu-item key="0" @click="logout">登出</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { UserProps } from '@/store/user'
import { message } from 'ant-design-vue'

export default defineComponent({
  name: 'UserProfile',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    /**
     * 登录
     */
    const login = () => {
      store.commit('login')
      message.success('登录成功', 2)
    }
    /**
     * 退出登录
     */
    const logout = () => {
      store.commit('logout')
      message.success('退出登录成功，2秒后跳转到首页', 2)
      setTimeout(() => {
        router.push('/')
      }, 2000)
    }

    return {
      login,
      logout
    }
  }
})
</script>

<style>
.user-profile-dropdown {
  border-radius: 2px !important;
}

.user-operation > * {
  margin-left: 30px !important;
}
</style>
