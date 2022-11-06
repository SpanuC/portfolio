import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { MotionPlugin } from "@vueuse/motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faTelegram,
  faGithub,
  faSpotify,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faArrowRight,
  faTelegram,
  faGithub,
  faSpotify,
  faLinkedin,
  faCopyright
);

createApp(App)
  .use(MotionPlugin)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
