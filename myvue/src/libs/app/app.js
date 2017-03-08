/**
 * Created by mark on 2017/3/7.
 */
import Vue from 'vue'
import log from 'mark_logger'

/*
 init log
 */
import Logger from 'mark_vue_lib/src/lib/log/log'
Vue.use(Logger);

/*
 init mintUi
 */
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi);
/*
 init toast
 */
import ggToast from 'mark_vue_lib/src/lib/toast/toast'
Vue.use(ggToast);

/*
 init HttpClient
 */
import HttpClient from 'mark_vue_lib/src/lib/http/http'
import {URL} from '../tcode/tcode'
Vue.use(HttpClient);
{
    var config = Vue.prototype.HttpClient;
    config.httpUrl = URL.HTTP_URL;
    log.d("httpClient.httpUrl:" + config.httpUrl)
    config.headers = {'Content-Type': 'application/x-www-form-urlencoded'};
    config.reqOptions = {
        headers: config.headers
    }
}


/*
 init router
 */
import VueRouter from 'vue-router'
import ggRouter from 'mark_vue_lib/src/lib/router/router'
import {ROUTER} from '../tcode/tcode'

var router;
Vue.use(VueRouter);
{
    // var routers = [
    //     {
    //         name: 'TestRouter', component: TestRouter,
    //     },
    //     {
    //         name: 'Index', component: Index,
    //     }
    // ]
    var routers=ROUTER.ARRAY_ROUTER();
    router = new VueRouter({
        // routes // （缩写）相当于 routes: routes
        routes: ggRouter.configRouter(
            {
                array: routers,
            }
        )
    });
    ggRouter.setJsonRouter(ROUTER.JSON_ROUTER)
    Vue.use(ggRouter, {
        router: router
    });
}

import App from '../../test/App.vue'
import ggHeader from  'mark_vue_lib/src/component/header/header.vue'

Vue.component(ggHeader.name,ggHeader);

new Vue({
    router,
    el: '#app',
    render: h => h(App),
});