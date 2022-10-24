<template>
    <div class="update">
        <div class="username">
            <label>昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：</label>
            <input :value="userName">
        </div>
        <div class="sex">
            <label>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</label>
            <input type="radio" id="woman" value="woman" v-model="userDate.sex">
            <label for="woman">女</label>
            <input type="radio" id="man" value="man" v-model="userDate.sex">
            <label for="man">男</label>
        </div>
        <div class="birthday">
            <label>出生日期：</label>
            <div class="birthdayBox"></div>
        </div>
        <div class="height">
            <label>身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高：</label>
            <input>
        </div>
        <div class="weight">
            <label>体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重：</label>
            <input>
        </div>
        <div class="clothes">
            <div>
                <img>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        userName:String,
    } ,
    data(){
        return {
            userDate:{
                sex:'',
                birthday:'',
                height:'',
                weight:'',
                clothes:'',
            },
        }
    }
}
</script>
<style scoped>
.update{
    width: 600px;
    background-color: #f29191;
    height: 500px;
    margin-top: 60px;
    border-radius:6px 6px 6px 6px;
    /* display: flex; */
    margin-left:-350px;
}
.username,.sex,.height,.weight,.birthday,.clothes{
    margin-left:50px;
    font-size:18px;
    font-weight:200;
    margin-top:10px;
}
.username input,.height input,.weight input{
    outline:none;
    width: 300px;
    height: 40px;
    border-radius: 4px;
    border-width:1px;
    border-color:white;
    /* margin-top:20px; */
}
.birthday{
    display: flex;
}
.birthdayBox{
    width: 300px;
    height: 250px;
    background-color:white;
    border-radius: 4px;
    border-width:1px;
}
</style>