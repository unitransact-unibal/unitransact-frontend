import axios from "axios";

const state = {
  id: "",
  admission_number: "",
  school_id: "",
  address: "",
  date_of_birth: "",
  telephone: "",
  country: "",
  user_id: -1,
  created_at: "",
  updated_at: "",
  errors: [],
  success_message: "",
};

const getters = {
  id: (state) => state.id,
  admission_number: (state) => state.admission_number,
  school_id: (state) => state.school_id,
  address: (state) => state.address,
  date_of_birth: (state) => state.date_of_birth,
  telephone: (state) => state.telephone,
  country: (state) => state.country,
  user_id: (state) => state.user_id,
  created_at: (state) => state.created_at,
  updated_at: (state) => state.updated_at,
  errors: (state) => state.errors,
  successMessage: (state) => state.success_message,
  student: (state) => {
    let studentDetails = [];
    for (let [key, value] of Object.entries(state)) {
      if (key === "errors" || key === "success_message") {
        continue;
      }
      studentDetails.push({ key: key, value: value });
    }
    return studentDetails;
  },
  studentObj: (state) => ({
    id: state.id,
    admission_number: state.admission_number,
    school_id: state.school_id,
    address: state.address,
    date_of_birth: state.date_of_birth,
    telephone: state.telephone,
    country: state.country,
    user_id: state.user_id,
    created_at: state.created_at,
    updated_at: state.updated_at,
  }),
};

const actions = {
  async createStudent({ commit, rootGetters }, data) {
    const userId = rootGetters["auth/user_id"];

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.withCredentials = true;

    await axios
      .post("/students/", { ...data, user_id: userId })
      .then((response) => {
        console.log("createStudent", response);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log(error.response.data);
          commit("setErrors", error.response.data);
        } else {
          console.log("createStudent", error);
        }
      });
  },
  async updateStudent({ commit, rootGetters }, data) {
    const userId = rootGetters["auth/user_id"];

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.withCredentials = true;

    await axios
      .put(`/students/${userId}/`, { ...data, user_id: userId })
      .then((response) => {
        console.log("updateStudent", response);
        commit("setSuccessMessage", "Data saved successfully.");
        setTimeout(() => {
          console.log("updateStudent", "clearing message");
          commit("setSuccessMessage", "");
        }, 5000);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log(error.response.data);
          commit("setErrors", error.response.data);
        } else {
          console.log("updateStudent", error);
        }
      });
  },
  async getStudent({ commit, rootGetters }) {
    const userId = rootGetters["auth/user_id"];

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.withCredentials = true;

    await axios
      .get(`/students/${userId}/`)
      .then((response) => {
        console.log("getStudent", response);
        commit("setStudent", response.data);
        commit("setErrors", {});
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log("getStudent", error.response.status);
          console.log("getStudent", error.response.data);

          if (error.response.status === 404) {
            commit("setStudent", {
              id: "",
              admission_number: "",
              school_id: "",
              address: "",
              date_of_birth: "",
              telephone: "",
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
  setStudent: (state, details) => {
    state.id = details.id;
    state.admission_number = details.admission_number;
    state.school_id = details.school_id;
    state.address = details.address;
    state.date_of_birth = details.date_of_birth;
    state.telephone = details.telephone;
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
