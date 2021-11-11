import axios from "axios";

const state = {
  id: "",
  student_id: "",
  parent_id: "",
  created_at: "",
  updated_at: "",
  student_parent_list: [],
  errors: [],
  success_message: "",
};

const getters = {
  id: (state) => state.id,
  student_id: (state) => state.student_id,
  parent_id: (state) => state.parent_id,
  created_at: (state) => state.created_at,
  updated_at: (state) => state.updated_at,
  studentParentList: (state) => state.student_parent_list,
  errors: (state) => state.errors,
  successMessage: (state) => state.success_message,
  studentParent: (state) => {
    let studentParentDetails = [];
    for (let [key, value] of Object.entries(state)) {
      if (key === "errors" || key === "success_message") {
        continue;
      }
      studentParentDetails.push({ key: key, value: value });
    }
    return studentParentDetails;
  },
  studentParentObj: (state) => ({
    id: state.id,
    student_id: state.student_id,
    parent_id: state.parent_id,
    created_at: state.created_at,
    updated_at: state.updated_at,
  }),
};

const actions = {
  async createStudentParent({ commit, rootGetters }, data) {
    const userId = rootGetters["auth/user_id"];

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.withCredentials = true;

    await axios
      .post("/students/", { ...data })
      .then((response) => {
        console.log("createStudentParent", response);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log(error.response.data);
          commit("setErrors", error.response.data);
        } else {
          console.log("createStudentParent", error);
        }
      });
  },
  async updateStudentParent({ commit, rootGetters }, data, id) {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.withCredentials = true;

    await axios
      .put(`/students/${id}/`, { ...data })
      .then((response) => {
        console.log("updateStudentParent", response);
        commit("setSuccessMessage", "Data saved successfully.");
        setTimeout(() => {
          console.log("updateStudentParent", "clearing message");
          commit("setSuccessMessage", "");
        }, 5000);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log(error.response.data);
          commit("setErrors", error.response.data);
        } else {
          console.log("updateStudentParent", error);
        }
      });
  },
  async getStudentParent({ commit }, id) {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.withCredentials = true;

    await axios
      .get(`/students/${id}/`)
      .then((response) => {
        console.log("getStudentParent", response);
        commit("setStudentParentList", response.data);
        commit("setErrors", {});
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log("getStudentParent", error.response.status);
          console.log("getStudentParent", error.response.data);

          if (error.response.status === 404) {
            commit("setStudent", {
              id: "",
              student_id: "",
              parent_id: "",
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
  async getStudentParentList({ commit }, student_id) {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.withCredentials = true;

    await axios
      .get(`/students/parents/?student_id=${student_id}`)
      .then((response) => {
        console.log("getStudentParentList", response.data);
        commit("setStudentParentList", response.data);
        commit("setErrors", {});
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log("getStudentParentList", error.response.status);
          console.log("getStudentParentList", error.response.data);
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
  setStudentParent: (state, details) => {
    state.id = details.id;
    state.student_id = details.student_id;
    state.parent_id = details.parent_id;
    state.created_at = details.created_at;
    state.updated_at = details.updated_at;
  },
  setStudentParentList: (state, data) =>
    (state.student_parent_list = [...data]),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
