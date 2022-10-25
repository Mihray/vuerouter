<template>
    <div class="home"> 
        <div>  
            <HeadPortrait @showUpdate="showUpdate" :userName="userName"></HeadPortrait> 
            <SideBar @myimage="show22"></SideBar>
        </div>
        <Center-Vue class="Center_Vue" :userName="userName"  :show="show" :show2="show2"></Center-Vue>
    </div>
</template>
<script>

import HeadPortrait from './HeadPortrait.vue'
import SideBar from './SideBar.vue'
import CenterVue from './CenterVue.vue'

export default {
    data(){
        return{
            show:false,
            show2:true,
        }
    },
    components:{
        HeadPortrait,
        SideBar,
        CenterVue,
    },
    props:{
        userName:String,
    },
    methods:{
        showUpdate(){
        this.show = !this.show;
    },
        show22(){
            this.show2=!this.show2;
        }
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