<template>
    <div id="center" class="center">
        <HumanBody></HumanBody>
    </div>
</template>
<script>
import HumanBody from './HumanBody.vue';

export default {
    components: { HumanBody }
}
</script>
<style scoped>
.center{
    width: 800px;
    background-color: white;;
    height: 600px;
    margin-top: 100px;
    border-radius:6px 6px 6px 6px;
}
</style>