<template>
    <div class="login">
        <div class="box-card">
                <div style="display: flex;justify-content: center;">
                    <span style="margin-top:10px;font-size:24px">通用后台管理系统</span>
                </div>
        <form class="form" :model="form" ref="form">
            <div class="userName">
                <label prop="userName" 
                    :rules="[{required:true,maessage:'请输入用户名',trigger:'blur'},
                    {min:4,max:10,message:'长度在4-10位字符之间',trigger:'blur'}]">
                    <span style="color:brown">*</span>用户名
                </label>
                    <input type="username" v-model="form.userName">
            </div>
            <div class="password">
                <label prop="password"
                :rules="[{required:true,maessage:'请输入密码',trigger:'blur'},
                {min:6,max:12,message:'长度在6-12位字符之间',trigger:'blur'}]">
                <span style="color:brown">*</span>密&nbsp; &nbsp;码 </label>
                <input type="password" v-model="form.password">
            </div>
                <button  class="loginBut" type="primary" @click="login('form')">登录</button>
        </form>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                userName:'',
                password:'',
            },
        }
    },
    methdos:{

    }
}
</script>
<style scoped>
/* bady{
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
     margin: 40px 40px;
    /* display: flex;
    justify-content:center;  */

}
/* .userName{
    
} */
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
    margin-top:20px;
    margin-left: 150px;
}
</style>