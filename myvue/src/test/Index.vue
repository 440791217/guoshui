<template>
    <div id="app">
        <gg-header :title=ggnav.title>
            <p slot="left"></p>


        </gg-header>
        <mt-button @click="showToast" size="large" type="danger">showToast</mt-button>
        <mt-button @click="showHttp" size="large" type="primary">showHttp</mt-button>
        <mt-button @click="testRouter" size="large" type="danger">testRouter</mt-button>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                ggnav:{
                    title:'首页'
                },
                msg: 'Welcome to Your Vue.js Ap1p'
            }
        },
        mounted: function () {
            this.Logger.d("123123");
        },
        methods: {
            showToast () {
                this.ggToast.show({
                    f_message: 'hello baby'
                });
            },
            showHttp(){

                this.ggToast.show({
                    f_message: 'please see the information of the console'
                })

                function s001() {

                    function succ(body) {

                    }

                    var cmd = {}

                    return {
                        f_suffix: 's001',
                        f_content: cmd,
                        f_callback: {
                            succ: succ
                        }
                    }

                }

                this.HttpClient.post(s001());

            },
            testRouter(){

                this.ggRouter.push({




                    f_name: this.ggRouter.jsonRouter.TestRouter.name,
                    f_params: {
                        f_name: 'bbxiong'
                    }
                });
            }
        }
    }
</script>