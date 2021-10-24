import axios from "axios";
import getCookie from "../../cookies";

const state = {
  id: "",
  name: "",
  address: "",
  location: "",
  country: "",
  user_id: -1,
  created_at: "",
  updated_at: "",
};

const getters = {
  id: (state) => state.id,
  name: (state) => state.name,
  address: (state) => state.address,
  location: (state) => state.location,
  country: (state) => state.country,
  user_id: (state) => state.user_id,
  created_at: (state) => state.created_at,
  updated_at: (state) => state.updated_at,
};

const actions = {
  async createSchool({ commit, rootGetters }, data) {
    const userId = rootGetters["auth/user_id"];

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.withCredentials = true;

    await axios
      .post("/schools/", { ...data, user_id: userId })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  },
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
