<template>
    <div class="datacard">
        <ul>
            <li>昵称：</li>
            <li>性别：</li>
            <li>年龄：</li>
            <li>身高：</li>
            <li>体重：</li>
            <li>服装：</li>
        </ul>
    </div>
</template>
<script>
export default {
    
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