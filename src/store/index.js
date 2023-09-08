import { createStore } from "vuex";
import userData from "./modules/user";
import trendings from "./modules/trendings";
import auth from "./modules/auth";
import starred from './modules/starred'

export default createStore({
  modules: {
    userData,
    trendings,
    auth,
    starred
  }
})