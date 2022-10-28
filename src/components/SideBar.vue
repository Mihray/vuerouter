<template>
    <div id="sidebar" class="sidebar">
        <ul>
            <li @click="liClick">我的资料</li>
            <li>更换服装</li>
            <li @click="changeImage">更换发型</li>
            <li>服装商城</li>
            <li>更多</li>
        </ul>

    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
        liClick: function(){
            this.$emit('myimage')
        },
        changeImage:function(){
            this.$emit('changeImage')
        }
    }
}
</script>
<style scoped>
.sidebar{
    width:150px;
    height:400px;
    margin-left:20px;
    background:white;
    border-radius:6px;
    display:flex;
}
.sidebar ul{
    margin: 20px auto;
    list-style: none;
    padding-left: 0;
}
.sidebar ul li{
    font-size: 18px;
    margin-top:10px;
    font-weight: 200;
    color:#e79f80;
}
.sidebar ul li:hover {
    color: #931e1e;
    cursor:pointer;
}
</style>