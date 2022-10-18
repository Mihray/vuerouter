<template>
    <div id="app">
        <h1>hello App!</h1>
        <p>
            <router-link to="/">Go to Home</router-link>
            <router-link to="/about">Go to About</router-link>
        </p>

        <router-view></router-view>
    </div>
</template>
<script>
// import vue from 'https://unpkg.com/vue@3';
// import vuerouter from 'https://unpkg.com/vue-router@4';
export default {
    
}
</script>