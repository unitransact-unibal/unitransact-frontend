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
  errors: [],
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
  errors: (state) => state.errors,
  school: (state) => {
    let schoolDetails = [];
    for (let [key, value] of Object.entries(state)) {
      if (key === "errors") {
        continue;
      }
      schoolDetails.push({ key: key, value: value });
    }
    return schoolDetails;
  },
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
        if (error.response && error.response.data) {
          console.log(error.response.data);
          commit("setErrors", error.response.data);
        } else {
          console.log(error);
        }
      });
  },
  async getSchool({ commit, rootGetters }) {
    const userId = rootGetters["auth/user_id"];

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.withCredentials = true;

    await axios
      .get(`/schools/${userId}/`)
      .then((response) => {
        console.log("getSchool", response);
        commit("setSchool", response.data);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log(error.response.status);
          console.log(error.response.data);

          if (error.response.status === 404) {
            commit("setSchool", {
              id: "",
              name: "",
              address: "",
              location: "",
              country: "",
              user_id: -1,
              created_at: "",
              updated_at: "",
              errors: [],
            });
          }
        } else {
          console.log(error);
        }
      });
  },
};

const mutations = {
  setErrors: (state, errors) => {
    state.errors = [];
    for (let [key, value] of Object.entries(errors)) {
      key = key === "user_id" ? "user" : key;
      for (let i in value) {
        state.errors.push({ key: key, value: value[i] });
      }
    }
  },
  setSchool: (state, details) => {
    state.id = details.id;
    state.name = details.name;
    state.address = details.address;
    state.location = details.location;
    state.country = details.country;
    state.user_id = details.user_id;
    state.created_at = details.created_at;
    state.updated_at = details.updated_at;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
