<template>
  <HomeVue :userName="userName"  v-if="page==='HomeVue'"></HomeVue>
  <LoginVue v-if="page==='LoginVue'" @see-world="changePage" @username="changeName"></LoginVue>
  <!-- <HeadPortrait></HeadPortrait> -->
  <!-- <ul>
   <router-link to='/LoginVue' ><a href="/LoginVue">LoginVue</a></router-link>
   <router-link to='/HomeVue' ><a href="/HomeVue">HomeVue</a></router-link>
 </ul> -->

</template>

<script>
import HomeVue from './components/HomeVue.vue'
import LoginVue from './components/LoginVue.vue'
// import HeadPortrait from './components/HeadPortrait.vue'
// import SideBar from './components/SideBar.vue'  vue-cli

export default {
  name: 'App',
  data(){
    return {
      page:'LoginVue',
      userName:'',
    }
  },
  mounted() {
    console.log('App Mounted： ');
    console.log(this)
  },
  methods:{
    changePage(param){
      this.page=param;
    },
    changeName(param1){
      this.userName=param1;
    }
  },
  components: {
    HomeVue,
    LoginVue,
    // HeadPortrait,
    // SideBar,
  }
}
</script>

<style>
body{
  background:#f29191;
  margin: 0;
}
img {
  width: 200px;
  height: 400px;
}
.img {
  position: relative;
  z-index: 100;

}
</style>
