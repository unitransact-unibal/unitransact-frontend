import axios from "axios";
import router from "../../router";
const state = {
  username: "john-doe",
  first_name: "John",
  last_name: "Doe",
  email: "johndoe@gmail.com",
  token: "",
};

const getters = {
  username: (state) => state.username,
  token: (state) => state.token,
};

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const actions = {
  async authenticate({ commit }, credentials) {
    await axios
      .post("/auth/login/", credentials)
      .then((response) => {
        commit("setToken", response.data.key);
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
    await axios
      .get("/auth/user/", {
        headers: {
          Authorization: state.token,
          "X-CSRFToken": csrftoken,
        },
      })
      .then((response) => {
        console.log(response);
        commit("setBio", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const mutations = {
  setToken: (state, token) => (state.token = "Token " + token),
  setBio: (state, details) => {
    state.username = details.username;
    state.email = details.email;
    state.first_name = details.first_name;
    state.last_name = details.last_name;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
