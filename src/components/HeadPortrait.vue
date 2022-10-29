<template>
    <div style="display:flex;">
        <div id="headimg" class="headimg" @focus="headimg">
        <!-- <img src="@/assets/头像.jpg" style="width:100px;height:100px;"> -->
        </div>
        <div class="span_head"> 
            <span class="span_head1">{{userName}}</span>
            <!-- 写一个button 看起来想是下面的样式 -->
            <span class="span_head2" :style="spanstyle" @click="updatecard">修改资料</span>
            <div style="display:flex">
                <span :style="spanstyle2">{{userDate6.sex}}</span>
                <span :style="spanstyle2">{{userDate6.age}}岁</span>
        </div>
        </div>
    </div>
</template>
<script>
// import eventBus from '@/router/EventBus';
export default {
    data(){
        return{
            spanstyle:{
                color:'black'
            },
            spanstyle2:{
                fontWeight:200,
                marginLeft:'10px',
                marginTop:'5px',
            }
        }
    },
    methods:{
        // receiveuserName(){
        //     eventBus.$on('pushuserName',(HuserName)=>{
        //         this.userName=HuserName;
        //     })
        // }
        updatecard(){
            this.spanstyle.color='white';
            this.$emit('showUpdate')
        }
        //点击完成之后恢复到原来
    },
    props:{
        userName:String,
        userDate6:Object,
    }
}
</script>
<style>
.headimg{
    width:100px;
    height:100px;
    margin:50px 20px 50px 40px;
    border-radius:50%;
    background:url('@/assets/头像.jpg');
    /* backgrond自适应 */
    -moz-background-size:100% 100%; 
    background-size:100% 100%;
}
/* span{
    margin-top:60px;
} */
.span_head{
    display:flex;
    flex-direction:column;
    margin-top:60px;
}
.span_head1{
    font-weight:700;
    font-size:18px;
}
.span_head2{
    margin-top:10px;
    font-weight:200;
    text-decoration:underline;
    margin-left: 10px;
}
/* .span_head2 :hover{
    color:white;
} */
</style>