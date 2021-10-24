import Vuex from "vuex";
import auth from "./modules/auth";
import schools from "./modules/schools";

export default new Vuex.Store({
  modules: { auth, schools },
});
