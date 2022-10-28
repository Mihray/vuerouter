<template>
    <div>
        <img class="humanbody" src="../assets/形象女11.png"
        v-if="userDate4.sex==='女'">
        <img class="humanbody" src="../assets/形象男11.png"
        v-if="userDate4.sex==='男'">
    </div>
    <div class="hair">
        <img  class="hair" src="../assets/男发型11.png">
    </div>
    <div class="clothes">
        <img class="clothes11" src="../assets/套装1.png" > 
    </div>

</template>
<script>
export default {
    props:{
        userDate4:Object,
    },
    data(){
        return{
            // six:'woman'
        }
    },
    methods: {

    },
}
</script>
<style>
.humanbody{
    width:200px;
    height:550px;
    margin-left: 50px;
    margin-top: 40px;
}
.hair{
    margin-left: -200px;
}
.clothes{

}
</style>