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
    const csrftoken = getCookie("csrftoken");
    console.log(rootGetters["auth/token"]);
    await axios
      .post("/schools", data, {
        headers: {
          Authorization: state.token,
          "X-CSRFToken": csrftoken,
        },
      })
      .then((response) => {
        console.log(response);
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
