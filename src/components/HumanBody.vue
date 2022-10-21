<template>
    <div>
        <img class="humanbody" src="../assets/形象女11.png"
        v-if="six==='woman'">
        <img class="humanbody" src="../assets/形象男11.png"
        v-if="six==='man'">
    </div>
</template>
<script>
export default {
    data(){
        return{
            six:'woman'
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
    margin-left: 250px;
    margin-top: 25px;
}
</style>