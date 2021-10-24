import axios from "axios";
import router from "../../router";
import getCookie from "../../cookies";
const state = {
  id: "",
  username: "john-doe",
  first_name: "John",
  last_name: "Doe",
  email: "johndoe@gmail.com",
  token: "",
};

const getters = {
  user_id: (state) => state.id,
  username: (state) => state.username,
  token: (state) => state.token,
  fullName: (state) => `${state.first_name} ${state.last_name}`,
};

const actions = {
  async authenticate({ commit }, credentials) {
    await axios
      .post("/auth/login/", credentials)
      .then((response) => {
        commit("setToken", response.data.key);
        sessionStorage.setItem("token", response.data.key);
        actions.getUser({ commit });
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Authenticating", credentials);
  },
  async getUser({ commit }) {
    const csrftoken = getCookie("csrftoken");

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.withCredentials = true;

    await axios
      .get("/auth/user/")
      .then((response) => {
        console.log(response);
        commit("setBio", response.data);
      })
      .catch((error) => {
        router.replace("/sign-in");
        console.log(error);
      });
  },
};

const mutations = {
  setToken: (state, token) => (state.token = "Token " + token),
  setBio: (state, details) => {
    (state.id = details.pk), (state.username = details.username);
    state.email = details.email;
    state.first_name = details.first_name;
    state.last_name = details.last_name;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
