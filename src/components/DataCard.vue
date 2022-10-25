<template>
    <div class="datacard">
        <ul>
            <li style="font-weight:700">我的资料</li>
            <li>昵称：{{userName}}</li>
            <li>性别：{{userDate3.sex}}</li>
            <li>年龄：{{userDate3.age}}</li>
            <li>身高：{{userDate3.height}}</li>
            <li>体重：{{userDate3.weight}}</li>
            <li>服装：</li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        userName:String,
        userDate3:Object,
    },
    data(){
        return {
            // userDate:{
            //     sex:'',
            //     age:'',
            //     height:'',
            //     weight:'',
            //     clothes:'',
            // }
        }
    }
}
</script>
<style scoped>
.datacard{
    width:150px;
    height:400px;
    margin-left:40px;
    margin-top:100px;
    background:#f29191;
    border-radius:6px;
    display:flex;
}
.datacard ul{
    list-style: none;
    padding: 0;
    margin-left:20px;
}
.datacard ul li{
    font-weight:200;
    font-size:16px;
    margin-top: 20px;
}
</style>