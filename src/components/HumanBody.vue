<template>
    <div>
        <img class="humanbody" src="../assets/形象女11.png"
        v-if="userDate4.sex==='女'">
        <img class="humanbody" src="../assets/形象男11.png"
        v-if="userDate4.sex==='男'">
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
</style>