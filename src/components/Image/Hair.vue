<template>
    <div class="image">
        <img  class="hair" src="../../assets/男女发型44.png">
        <!-- <img  class="hair" src="../../assets/发型女33.png"> -->
        <!-- <img  class="hair" src="../../assets/男发型11.png"> -->
        <!-- <img  class="hair" src="../../assets/男发型22.png">
        <img class="human" src="../../assets/形象男11.png" > -->
        <img class="human" src="../../assets/形象女11.png">
   </div>
   <div class="container">
        <div class="box1"></div>
        <div class="box2">
            <div class="box2_1"></div>
        </div>
   </div>

   <div class="c2">
    <div class="box1"></div>
   </div>
</template>
<script>
export default {
    props:{
        sex: String,
        haircut: String,


    }
}
</script>
<style scoped>

.image{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
}
.hair{
    width: 146px;
    height: 180px;
    z-index: 2;
}
.human{
    /* position: absolute; */
    /* margin-left: -170px; */
    margin-top:-170px;
    width:200px;
    height:550px;
}
</style>