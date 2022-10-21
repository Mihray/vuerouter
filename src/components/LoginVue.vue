<template>
    <div class="login">
        <div class="box-card">
                <div style="display: flex;justify-content: center;">
                    <span style="margin-top:10px;font-size:24px">通用后台管理系统</span>
                </div>
        <form class="form">
            <div class="userName">
                    <label prop="userName">
                        <span style="color:brown">*</span>用户名
                    </label>
                    <input type="username" v-model="userName" placeholder="请输入用户名" 
                    @blur="verification_username">
                    <label class="warn_name" v-show="show">长度在4-10位字符之间</label>
            </div>
            <div class="password">
                    <label prop="password">
                        <span style="color:brown">*</span>密&nbsp; &nbsp;码 
                    </label>
                    <input type="password" v-model="password" placeholder="请输入密码"
                    @blur="verification_password">
                    <label class="warn_pass" v-show="show2">长度在6-12位字符之间</label>
            </div>
            <button  class="loginBut" type="primary" @click="login">登录</button>
        </form>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
                userName:'',
                password:'',
                show:false,
                show2:false,
        }
    },
    methods:{
        verification_username(){
            if(!(/(^[a-zA-Z0-9]{4,10}$)/).test(this.userName)){
               this.show=true;
               console.log("不符合条件")
            }else{
                this.show=false;
                console.log("符合条件")
            }

        },
        verification_password(){
            if(!(/(^[a-zA-Z0-9]{6,12}$)/).test(this.password)){
               this.show2=true;
               console.log("不符合条件")
            }else{
                this.show2=false;
                console.log("符合条件")
            }

        },
        login(){
            const userList=[
                {uid:'mihray',password:'123456'},
                {uid:'mingming',password:'123456'},
                {uid:'铭子',password:'123456'}
            ];
            this.showModal=!userList.find(user=>
            {
                return user.uid===this.userName&&user.password===this.password;
            })
            console.log("登录")
            // window.open("https://www.baidu.com")
            // window.open("./components/HomeVue.vue")
            // this.$router.push('/')
        }
    }
}
</script>
<style scoped>
/* body{
    background:#409EFF;
} */
.login{
    width:100%;
    height:100%;
    position:absolute;
    background:#409EFF;
    font-size:17px
}
.box-card{
        background: white;
        width:450px;
        height:300px;
        margin:200px auto;
        border-radius: 4px;
    }
    
input{
    outline:none;
    width: 250px;
    height: 35px;
}
.form{
     margin: 40px 60px;
}
.userName,.password{
    position: relative;
}
.userName input,.password input{
    border-radius: 4px;
    border-width:1px;
}
.password{
    margin-top:20px;
}
.loginBut {
    background: #409EFF;
    height: 35px;
    width:60px;
    border-color: #409EFF;
    border-radius:4px;
    margin-top:15px;
    margin-left: 150px;
}
.warn_name,.warn_pass{
    position: absolute;
    color:red;
    font-size:14px;
    margin-left: 64px;
    display: block;
    /* visibility:hidden; */
}
</style>