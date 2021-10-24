import { createApp } from "vue";
import router from "./utils/router";
import state from "./utils/state";
import axios from "axios";

import App from "./App.vue";
import "./assets/styles.css";

axios.defaults.baseURL = "http://localhost:8000/api/v1";

createApp(App).use(router).use(state).mount("#app");
