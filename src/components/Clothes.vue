<template>
   <div class="zhengti">
        <div class="body">
            <img class="human" v-if="userDate8.sex==='男'" src="@/assets/形象男11.png" > 
            <img class="human" v-if="userDate8.sex==='女'" src="@/assets/形象女11.png" >
        </div>
        <div class="clothes">
            <img class="clothes1" :src="clothesSrc">
        </div>
        <div class="clotheShow">
            <img class="clothes11" src="@/assets/套装1.png" @click="choiceClothes1">
            <img class="clothes2" src="@/assets/吊带套装.png" @click="choiceClothes2">
        </div>
   </div>
</template>
<script>
export default {
  props:{
    userDate8:Object,
  } ,
  data(){
    return{
        clothesSrclujing:'',
        clothesSrc: require('@/assets/套装1.png'),
    }
} ,
methods:{
    choiceClothes1(){
    this.clothesSrclujing=
    this.clothesSrc=require('@/assets/套装1.png')
    console.log('Clothes.vue组件中的src：'+this.clothesSrc)
    this.$emit('choiceClothes',this.clothesSrc)
  },
  choiceClothes2(){
    this.clothesSrc=require('@/assets/吊带套装.png')
  }
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
    margin-top: -553px;
    display:flex;
}
.zhengti{
    width:200px;
    height:600px;
    margin-left: 50px;
}
.clotheShow{
    display: flex;
    margin-left: 250px;
    margin-top: -560px;
}
.clothes11,.clothes2{
    margin-left: 50px;
    width:200px;
    height:600px;
}
</style>