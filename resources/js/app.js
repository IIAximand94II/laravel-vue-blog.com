import Vue from "vue";
import router from "./router";
import Index from './components/Index'
import HeaderComponent from "./components/layouts/HeaderComponent";
import FooterComponent from "./components/layouts/FooterComponent";
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import Vue2Editor from "vue2-editor";

Vue.use(Vue2Editor);

// font
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
// end font

require('./bootstrap');

Vue.component('v-select', vSelect)

const app = new Vue({
    el: '#app',

    components:{
        Index,
        HeaderComponent,
        FooterComponent,
    },

    router,
    Vue2Editor,

})
