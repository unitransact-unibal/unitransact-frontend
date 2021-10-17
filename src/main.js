import { createApp } from "vue";
import router from "./utils/router";

import App from "./App.vue";
import "./assets/styles.css";

createApp(App).use(router).mount("#app");
