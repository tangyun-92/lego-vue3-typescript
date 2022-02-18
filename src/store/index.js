import { createStore } from 'vuex';
const testData = [
    {
        id: 1,
        title: '测试标题',
        author: 'ty',
        copiedCount: 2,
        coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-889755.png'
    },
    {
        id: 2,
        title: '测试标题',
        author: 'ty',
        copiedCount: 2,
        coverImg: 'http://static-dev.imooc-lego.com/imooc-test/sZHlgv.png'
    },
    {
        id: 3,
        title: '测试标题',
        author: 'ty',
        copiedCount: 2,
        coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-323204.png'
    },
    {
        id: 4,
        title: '测试标题',
        author: 'ty',
        copiedCount: 2,
        coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-677311.png'
    },
    {
        id: 5,
        title: '测试标题',
        author: 'ty',
        copiedCount: 2,
        coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-726751.png'
    },
    {
        id: 6,
        title: '测试标题',
        author: 'ty',
        copiedCount: 2,
        coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-682056.png'
    }
];
const store = createStore({
    state: {
        templates: testData,
        user: {
            isLogin: false
        }
    },
    mutations: {
        login(state) {
            state.user = { ...state.user, isLogin: true, userName: 'ty' };
        },
        logout(state) {
            state.user = { isLogin: false };
        }
    },
    getters: {
        getTemplateById: (state) => (id) => {
            return state.templates.find((item) => item.id === id);
        }
    }
});
export default store;
//# sourceMappingURL=index.js.map