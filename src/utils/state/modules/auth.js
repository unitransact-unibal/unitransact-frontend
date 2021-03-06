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
  errors: [],
};

const getters = {
  user_id: (state) => state.id,
  username: (state) => state.username,
  token: (state) => state.token,
  fullName: (state) => `${state.first_name} ${state.last_name}`,
  errors: (state) => state.errors,
};

const actions = {
  async authenticate({ commit }, credentials) {
    await axios
      .post("/auth/login/", credentials)
      .then((response) => {
        commit("setToken", response.data.key);
        // sessionStorage.setItem("token", response.data.key);
        actions.getUser({ commit });
        router.push("/");
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log("authenticate", error.response.data);
          commit("setErrors", error.response.data);
        } else {
          console.log("authenticate", error);
        }
      });
    console.log("Authenticating", credentials);
  },
  async getUser({ commit }) {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.withCredentials = true;

    await axios
      .get("/auth/user/")
      .then((response) => {
        console.log("getUser", response);
        commit("setBio", response.data);
      })
      .catch((error) => {
        router.replace("/sign-in");
        console.log("getUser", error);
      });
  },
  async signOut() {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.withCredentials = true;

    await axios
      .post("/auth/logout/")
      .then((response) => {
        console.log("signOut", response);
        router.replace("/sign-in");
      })
      .catch((error) => {
        console.log("signOut", error);
        router.replace("/sign-in");
      });
  },
};

const mutations = {
  setErrors: (state, errors) => {
    state.errors = [];
    for (let [key, value] of Object.entries(errors)) {
      key = key.replaceAll("_", " ");
      for (let i in value) {
        state.errors.push({ key: key, value: value[i] });
      }
    }
  },
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
