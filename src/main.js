import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* CSS */ 
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"
import './assets/css/main.css'

/* Font Awesome */
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)
dom.watch();


const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router)
app.mount('#app')
