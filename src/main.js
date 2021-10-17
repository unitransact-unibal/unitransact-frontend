import { createApp } from "vue";
import router from "./utils/router";
import state from "./utils/state";

import App from "./App.vue";
import "./assets/styles.css";

createApp(App).use(router).use(state).mount("#app");
