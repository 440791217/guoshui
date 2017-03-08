<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        mounted(){
            this.ggRouter.push({
               f_name:this.ggRouter.jsonRouter.Index.name,
            });
        }
    }
</script>
