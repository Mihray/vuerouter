<template>
   <div class="zhengti">
        <div class="body">
            <img class="human" v-if="userDate8.sex==='男'" src="../assets/形象男11.png" > 
            <img class="human" v-if="userDate8.sex==='女'" src="../assets/形象女11.png" >
        </div>
        <div class="clothes">
            <img class="clothes1" src="../assets/吊带套装.png">
        </div>
        <div class="clotheShow">
            <!-- <img class="clothes1" src="../assets/套装1.png">
            <img class="clothes1" src="../assets/吊带套装.png"> -->
        </div>
   </div>
</template>
<script>
export default {
  props:{
    userDate8:Object,
  }  
}
</script>
<style scoped>
.human{
    width:200px;
    height:550px;
    /* margin-top: */
}
.clothes1{
    width:200px;
    height:560px;
    margin-top: -560px;
    /* display:flex; */
}
.zhengti{
    width:200px;
    height:600px;
}
</style>