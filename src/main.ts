import {createApp} from 'vue';
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faFacebook, faGithub, faLinkedinIn, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faTelegram, faLinkedinIn, faFacebook, faGithub, faEnvelope)

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
