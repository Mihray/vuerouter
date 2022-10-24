<template>
    <div id="sidebar" class="sidebar">
        <ul>
            <li @click="liClick">我的形象</li>
            <li>我的服装</li>
            <li>更换形象</li>
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
    color:brown;
}
.sidebar ul li:hover {
    color: red;
    cursor:pointer;
}
</style>