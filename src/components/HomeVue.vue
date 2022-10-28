<template>
    <div class="home"> 
        <div>  
            <HeadPortrait @showUpdate="showUpdate" :userName="userName" :user-date6="userDate7"></HeadPortrait> 
            <SideBar @myimage="show22" @changeImage="changeimaege" @changeClothes="changeclothes"></SideBar>
        </div>
        <Center-Vue class="Center_Vue" :userName="userName"  :show="show" :show2="show2" 
        :show3="show3"  @closecard="Closecard" @headP="haedp" :show4="show4"></Center-Vue>
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
            show3:false,
            userDate7:{ },
            show4:false,
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
            this.show=true;
            // this.show = !this.show;
            this.show4=false;
            this.show2=false;
            this.show3=false;
    },
        show22(){
            this.show2=true;
            // this.show2=!this.show2;
            this.show=false;
            this.show3=false;
            this.show4=false;
        },
        Closecard(param4){
            this.show=param4;
            this.show2=true;
        },
        changeimaege(){
            this.show=false;
            this.show3=true;
            // this.show3=!this.show3;
            this.show2=false;
            this.show4=false;
        },
        haedp(param7){
            console.log(param7)
            this.userDate7=param7;
            console.log(this.userDate7)
        },
        changeclothes(){
            // this.show4=!this.show4;
            this.show4=true;
            this.show=false;
            this.show2=false;
            this.show3=false;
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