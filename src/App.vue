<template>
  <!-- <HomeVue></HomeVue> -->
  <LoginVue></LoginVue>

  <!-- <ul>
   <router-link to='/LoginVue' ><a href="/LoginVue">LoginVue</a></router-link>
   <router-link to='/HomeVue' ><a href="/HomeVue">HomeVue</a></router-link>
 </ul> -->

</template>

<script>
// import HomeVue from './components/HomeVue.vue'
import LoginVue from './components/LoginVue.vue'

export default {
  name: 'App',
  components: {
    // HomeVue,
    LoginVue,
  }
}
</script>

<style>
body{
  background:#409EFF;
  margin: 0;
}
</style>
