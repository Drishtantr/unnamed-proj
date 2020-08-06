<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Byeworld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Byeworld from '../components/Byeworld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Byeworld,
  },
};
</script>
