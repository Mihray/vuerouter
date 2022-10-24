<template>
    <div id="center" class="center">
        <DataCard :userName="userName"></DataCard>
        <HumanBody ></HumanBody>
        <UpDate :userName="userName"></UpDate>
    </div>
</template>
<script>
import HumanBody from './HumanBody.vue';
import DataCard from './DataCard.vue';
import UpDate from './UpDate.vue';

export default {
    components: { HumanBody, DataCard, UpDate },
    props:{
        userName:String,
    }
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