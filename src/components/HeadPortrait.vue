<template>
    <div id="headimg" class="headimg" @focus="headimg">
        <!-- <img src="../assets/头像.jpg" style="width:100px;height:100px;"> -->
    </div>
</template>
<script>
export default {
    data(){

    },
    methods:{
        
    }
}
</script>
<style>
.headimg{
    width:100px;
    height:100px;
    margin:50px 0 50px 40px;
    border-radius:50%;
    background:url(../assets/头像.jpg);
    /* backgrond自适应 */
    -moz-background-size:100% 100%; 
    background-size:100% 100%;
}
</style>