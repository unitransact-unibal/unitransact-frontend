import axios from "axios";

const state = {
  id: "",
  national_id: "",
  telephone: "",
  address: "",
  country: "",
  user_id: -1,
  created_at: "",
  updated_at: "",
  errors: [],
  success_message: "",
};

const getters = {
  id: (state) => state.id,
  national_id: (state) => state.national_id,
  telephone: (state) => state.telephone,
  address: (state) => state.address,
  country: (state) => state.country,
  user_id: (state) => state.user_id,
  created_at: (state) => state.created_at,
  updated_at: (state) => state.updated_at,
  errors: (state) => state.errors,
  successMessage: (state) => state.success_message,
  parent: (state) => {
    let parentDetails = [];
    for (let [key, value] of Object.entries(state)) {
      if (key === "errors" || key === "success_message") {
        continue;
      }
      parentDetails.push({ key: key, value: value });
    }
    return parentDetails;
  },
  parentObj: (state) => ({
    id: state.id,
    national_id: state.national_id,
    telephone: state.telephone,
    address: state.address,
    country: state.country,
    user_id: state.user_id,
    created_at: state.created_at,
    updated_at: state.updated_at,
  }),
};

const actions = {
  async createParent({ commit, rootGetters }, data) {
    const userId = rootGetters["auth/user_id"];

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.withCredentials = true;

    await axios
      .post("/parents/", { ...data, user_id: userId })
      .then((response) => {
        console.log("createParent", response);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log(error.response.data);
          commit("setErrors", error.response.data);
        } else {
          console.log("createParent", error);
        }
      });
  },
  async updateParent({ commit, rootGetters }, data) {
    const userId = rootGetters["auth/user_id"];

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.withCredentials = true;

    await axios
      .put(`/parents/${userId}/`, { ...data, user_id: userId })
      .then((response) => {
        console.log("updateParent", response);
        commit("setSuccessMessage", "Data saved successfully.");
        setTimeout(() => {
          console.log("updateParent", "clearing message");
          commit("setSuccessMessage", "");
        }, 5000);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log(error.response.data);
          commit("setErrors", error.response.data);
        } else {
          console.log("updateParent", error);
        }
      });
  },
  async getParent({ commit, rootGetters }) {
    const userId = rootGetters["auth/user_id"];

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.withCredentials = true;

    await axios
      .get(`/parents/${userId}/`)
      .then((response) => {
        console.log("getParent", response);
        commit("setParent", response.data);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log("getParent", error.response.status);
          console.log("getParent", error.response.data);

          if (error.response.status === 404) {
            commit("getParent", {
              id: "",
              national_id: "",
              telephone: "",
              address: "",
              country: "",
              user_id: -1,
              created_at: "",
              updated_at: "",
              errors: [],
              success_message: "",
            });
          }
        } else {
          console.log(error);
        }
      });
  },
};

const mutations = {
  setSuccessMessage: (state, msg) => (state.success_message = msg),
  setErrors: (state, errors) => {
    state.errors = [];
    for (let [key, value] of Object.entries(errors)) {
      key = key === "user_id" ? "user" : key;
      for (let i in value) {
        state.errors.push({ key: key, value: value[i] });
      }
    }
  },
  setParent: (state, details) => {
    state.id = details.id;
    state.national_id = details.national_id;
    state.telephone = details.telephone;
    state.address = details.address;
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
