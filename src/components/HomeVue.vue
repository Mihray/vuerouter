<template>
    <div class="home"> 
        <div>  
            <HeadPortrait :userName="userName"></HeadPortrait> 
            <SideBar></SideBar>
        </div>
        <Center-Vue class="Center_Vue" :userName="userName"></Center-Vue>
    </div>
</template>
<script>

import HeadPortrait from './HeadPortrait.vue'
import SideBar from './SideBar.vue'
import CenterVue from './CenterVue.vue'

export default {
    components:{
        HeadPortrait,
        SideBar,
        CenterVue,
    },
    props:{
        userName:String,
    }
}
</script>
<style scoped>
.home{
    display: flex;
}
.Center_Vue{
    margin-left: 70px;
    /* margin-top: 50px; */
}
</style>