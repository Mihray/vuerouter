<template>
    <div id="center" class="center">
        <DataCard :userName="userName" v-if="show2"></DataCard>
        <HumanBody v-if="show2"></HumanBody>
        <UpDate  :userName="userName"  v-if="show"></UpDate>
    </div>
</template>
<script>
import HumanBody from './HumanBody.vue';
import DataCard from './DataCard.vue';
import UpDate from './UpDate.vue';

export default {
    created() {
        alert('欢迎使用')
    },
    components: { HumanBody, DataCard, UpDate },
    props:{
        userName:String,
        show:Boolean,
        show2:Boolean,
    },
    data(){
        return{
            
        }
    },
    // showUpdate(){
    //     this.show=true;
    //     console.log('不显示了')
    // }

}
</script>
<style scoped>
.center{
    width: 800px;
    background-color: white;
    height: 600px;
    margin-top: 100px;
    border-radius:6px 6px 6px 6px;
    display: flex;
}
</style>