import axios from "axios";
const state = {
  username: "john-doe",
  full_name: "John Doe",
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
        console.log(response.data.key);
        commit("setToken", response.data.key);
        actions.getUser({ commit });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Authenticating", credentials);
  },
  async getUser({ commit }) {
    console.log(state.token);
    const csrftoken = getCookie("csrftoken");
    await axios
      .get("/auth/user/", {
        headers: {
          Authorization: "Token " + state.token,
          "X-CSRFToken": csrftoken,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const mutations = {
  setToken: (state, token) => (state.token = token),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
