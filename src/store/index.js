import { createStore } from 'vuex';
import templates from '@/store/templates';
import user from '@/store/user';
import editor from '@/store/editor';
const store = createStore({
    modules: {
        templates,
        user,
        editor
    }
});
export default store;
//# sourceMappingURL=index.js.map