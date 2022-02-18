import { createStore } from 'vuex';
import templates from '@/store/templates';
import user from '@/store/user';
const store = createStore({
    modules: {
        templates,
        user
    }
});
export default store;
//# sourceMappingURL=index.js.map