<template>
    <div id="center" class="center">
        <DataCard :userName="userName" v-if="show2" :userDate3="userDate2"></DataCard>
        <HumanBody v-if="show2" :userDate4="userDate2" :clothesSrc1="clothesSrc1"></HumanBody>
        <UpDate  :userName="userName"  v-show="show" @datesubmit="datesub"></UpDate>
        <Hair v-if="show3" :userDate5="userDate2"></Hair>
        <Clothes :userDate8="userDate2" v-if="show4" @choiceClothes="choiceclothes"></Clothes>
    </div>
</template>
<script>
import HumanBody from './HumanBody.vue';
import DataCard from './DataCard.vue';
import UpDate from './UpDate.vue';
import Hair from './Image/Hair.vue';
import Clothes from './Clothes.vue';


export default {
    // created() {
    //     alert('欢迎使用')
    // },
    components: { HumanBody, DataCard, UpDate ,Hair,Clothes},
    props:{
        userName:String,
        show:Boolean,
        show2:Boolean,
        show3:Boolean,
        show4:Boolean,
    },
    data(){
        return{
            // show:false,
            // show2:true,
            // bir:'',
            userDate2:{ },
            clothesSrc1:'',
        }
    },
    methods:{
        datesub(param3){
            // this.bir=param3;
            // console.log(this.bir)
            console.log(param3)
            this.userDate2=param3;
            console.log(this.userDate2.sex)
            this.$emit('closecard',false)
            this.$emit('headP',param3)
        },
        choiceclothes(param9){
            console.log('chose cloth param:', param9 );
            this.clothesSrc1=param9
            console.log(this.clothesSrc1)
        }
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
    /* position: relative; */
}
</style>