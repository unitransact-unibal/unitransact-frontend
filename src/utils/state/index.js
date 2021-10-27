import Vuex from "vuex";
import auth from "./modules/auth";
import schools from "./modules/schools";
import parents from "./modules/parents";

export default new Vuex.Store({
  modules: { auth, schools, parents },
});
