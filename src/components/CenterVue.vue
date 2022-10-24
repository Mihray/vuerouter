<template>
    <div id="center" class="center">
        <DataCard></DataCard>
        <HumanBody></HumanBody>
    </div>
</template>
<script>
import HumanBody from './HumanBody.vue';
import DataCard from './DataCard.vue';

export default {
    components: { HumanBody, DataCard }
}
</script>
<style scoped>
.center{
    width: 800px;
    background-color: white;;
    height: 600px;
    margin-top: 100px;
    border-radius:6px 6px 6px 6px;
    display: flex;
}
</style>