<template>
    <div id="appt">
        <h1>hello App!</h1>
        <p>
            Go to Home
            <router-link to="/about">Go to About</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
<script>
// import vue from 'https://unpkg.com/vue@3';
// import vuerouter from 'https://unpkg.com/vue-router@4';
export default {
    // computed:{
    //     username(){
    //         return this.$route.params.username
    //     }
    // },
    // methods:{
    //     goToDashboard(){
    //         if(isAuthenticated){
    //             this.$router.push('/dashboard')
    //         }else{
    //             this.$router.push('/login')
    //         }
    //     }
    // }
}
</script>