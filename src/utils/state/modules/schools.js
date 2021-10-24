import axios from "axios";

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
  async createUser({ commit, rootGetters }, data) {
    console.log(routGetters["auth/token"]);
    return;
    await axios.post("/schools", data).then((response) => {
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
