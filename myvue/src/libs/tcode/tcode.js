/**
 * Created by mark on 2017/3/7.
 */
import log from 'mark_logger'

function Url() {

    var HOST_NAME = "http://czolympic.cn";
    var HTTP_URL = HOST_NAME + "/apisvc/mobile/ap1/";


    return {
        HOST_NAME: HOST_NAME,
        HTTP_URL, HTTP_URL,
    }
}

import Index from '../../test/Index.vue'
import TestRouter from '../../test/TestRouter.vue'
function Router() {


    var JSON_ROUTER = {
        TestRouter: {
            name: 'TestRouter', component: TestRouter,
        },
        Index: {
            name: 'Index', component: Index,
        }
    }


    return {
        ARRAY_ROUTER: function () {

            var array=[];

            for(var key in JSON_ROUTER){
                var obj={
                    name:JSON_ROUTER[key].name,
                    component:JSON_ROUTER[key].component,
                };
                array.push(obj);
            }

            array.forEach(function (obj) {
                log.d("module--name:"+obj.name);
            })

            return array;
        },
        JSON_ROUTER:JSON_ROUTER,
    }
}


var URL = Url();
var ROUTER = Router();
export {
    URL, ROUTER
};