<template>
    <div style="display:flex;">
        <div id="headimg" class="headimg" @focus="headimg">
        <!-- <img src="../assets/头像.jpg" style="width:100px;height:100px;"> -->
        </div>
        <span>{{userName}}</span>
    </div>
</template>
<script>
// import eventBus from '@/router/EventBus';
export default {
    data(){
        return{
            
        }
    },
    methods:{
        // receiveuserName(){
        //     eventBus.$on('pushuserName',(HuserName)=>{
        //         this.userName=HuserName;
        //     })
        // }
    },
    props:{
        userName:String,
    }
}
</script>
<style>
.headimg{
    width:100px;
    height:100px;
    margin:50px 20px 50px 40px;
    border-radius:50%;
    background:url(../assets/头像.jpg);
    /* backgrond自适应 */
    -moz-background-size:100% 100%; 
    background-size:100% 100%;
}
span{
    margin-top:60px;
}
</style>