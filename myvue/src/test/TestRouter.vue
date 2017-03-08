<template>
    <div id="app">
        <gg-header :title=ggnav.title>



        </gg-header>
        <mt-button size="large" type="danger">dddd</mt-button>

    </div>
</template>
<style>

</style>
<script>
    export default{
        name: 'app',
        data(){
            return{
                ggnav:{
                    title:'测试路由'
                },
                msg:'hello vue'
            }
        },
    }
</script>
