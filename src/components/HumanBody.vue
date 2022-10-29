<template>
    <div>
        <img class="humanbody" src="@/assets/形象女11.png"
        v-if="userDate4.sex==='女'">
        <img class="humanbody" src="@/assets/形象男11.png"
        v-if="userDate4.sex==='男'">
    </div>
    <div class="overall">
        <img  class="hair111" src="@/assets/男发型11.png">
    <div >
        <img class="clothes111" :src="clothesSrc1" > 
    </div>
    </div>

</template>
<script>
export default {
    props:{
        userDate4:Object,
        clothesSrc1:String,
    },
    /**
     * require('URL')
     */
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
.overall{
    display: flex;
    flex-direction:column;
}
.hair111{
    margin-top: 5px;
    margin-left: -165px;
    width: 146px;
    height: 180px;
}
.clothes111{
    width:200px;
    height:560px;
    margin-top: -140px;
    margin-left: -200px;
}
</style>