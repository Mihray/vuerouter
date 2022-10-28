<template>
    <div class="image">
        <img class="human" src="../../assets/形象男11.png" v-if="userDate5.sex==='男'" > 
        <img class="human" src="../../assets/形象女11.png" v-if="userDate5.sex==='女'">
        <img class="hair1" :src="hairSrc">
        <!-- <img  class="hair" src="../../assets/发型女33.png"> -->
        <!-- <img  class="hair" src="../../assets/男发型11.png"> -->
        <!-- <img  class="hair" src="../../assets/男发型22.png"> -->
   </div>
   <div class="hair">
        <img  class="hair11" src="../../assets/男女发型44.png" @click="choiceHair">
        <img  class="hair22" src="../../assets/发型女33.png"  @click="choiceHair2">
        <img  class="hair33" src="../../assets/男发型11.png"  @click="choiceHair3">
        <img  class="hair44" src="../../assets/男发型22.png"  @click="choiceHair4">
   </div>
</template>
<script>
export default {
    props:{
        userDate5:Object,
        // haircut: String,
    },
    data(){
        return{
            hairSrc:require('../../assets/男女发型44.png'),
        }
    },
    methods:{
        choiceHair(){
            this.hairSrc=require('../../assets/男女发型44.png')
        },
        choiceHair2(){
            this.hairSrc=require('../../assets/发型女33.png')
        },
        choiceHair3(){
            this.hairSrc=require('../../assets/男发型11.png')
        },
        choiceHair4(){
            this.hairSrc=require('../../assets/男发型22.png')
        }
    }
}
</script>
<style scoped>

.image{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin-left: 20px;
}
.hair1{
    width: 146px;
    height: 180px;
    /* z-index: 2; */
    margin-top: -580px;
}
.human{
    /* position: absolute; */
    /* margin-left: -170px; */
    margin-top:40px;
    width:200px;
    height:550px;
    margin-left: -15px;
}
.hair{
    width:350px;
    height: 350px;
    /* background-color: brown; */
    margin-top: 100px;
    margin-left: 100px;
}
.hair11,.hair22,.hair33,.hair44{
    margin-left: 20px;
    margin-bottom: 20px;
    width: 146px;
    height: 180px;
}
</style>