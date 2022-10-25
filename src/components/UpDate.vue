<template>
    <form class="update">
        <!-- <label class="xiugaiziliao">修改资料</label> -->
        <div class="username">
            <!-- <label class="xiugaiziliao">修改资料</label> -->
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
            <input class="birthdayBox" type="date" v-model="userDate.birthday" min="1960-01-01" @change="countAge" required>
        </div>
        <div class="age">
            <label>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：</label>
            <input v-model="userDate.age" :value="userDate.age+'岁'">
        </div>
        <div class="height">
            <label>身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高：</label>
            <input v-model="userDate.height">
        </div>
        <div class="weight">
            <label>体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重：</label>
            <input v-model="userDate.weight">
        </div>
        <div class="clothes">
            <div>
                <img>
            </div>
        </div>
            <button class="submit" @click="submit" type="primary">保存</button>
    </form>
</template>
<script>
export default {
    props:{
        userName:String,
    } ,
    data(){
        return {
            year:'',
            brthYear:'',
            arr:'',
            userDate:{
                sex:'',
                birthday:'',
                age:'',
                height:'',
                weight:'',
            },
        }
    },
    methods:{
        countAge(){
            var aData = new Date();
            // console.log(aData)
            this.year=aData.getYear();
            // console.log(this.year)
            // console.log(this.userDate.birthday)
            // console.log((this.userDate.birthday.split('').slice(0,4)).map(Number))
            this.arr=(this.userDate.birthday.split('').slice(0,4)).map(Number)
            // console.log(this.arr)
            this.brthYear=this.arr[0]*1000+this.arr[1]*100+this.arr[2]*10+this.arr[3];
            // console.log(this.brthYear)
            this.userDate.age=1900+this.year-this.brthYear;
            console.log(this.userDate.age)
        }
    }
}
</script>
<style scoped>
.update{
    position:absolute;
    width: 600px;
    background-color: #f29191;
    height: 500px;
    margin-top: 60px;
    border-radius:6px 6px 6px 6px;
    /* display: flex; */
    margin-left:100px;
}
.username{
    margin-left:50px;
    font-size:18px;
    font-weight:200;
    margin-top:70px;
}
.sex,.height,.weight,.birthday,.clothes,.age{
    margin-left:50px;
    font-size:18px;
    font-weight:200;
    margin-top:15px;
}
.username input,.height input,.weight input,.birthdayBox,.age input{
    outline:none;
    width: 300px;
    height: 40px;
    border-radius: 4px;
    border-width:1px;
    border-color:white;
    /* margin-top:20px; */
}
/* .birthday{
    display: flex;
} */
/* .birthdayBox{
    outline:none;
    width: 300px;
    height: 250px;
    background-color:white;
    border-radius: 4px;
    border-width:1px;
    border-color:white;
} */
.submit{
    width: 70px;
    height: 40px;
    border-radius: 4px;
    border-width:1px;
    border-color:white;
    margin-left:250px;
    background-color: white;
}
</style>