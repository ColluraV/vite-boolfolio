<script >
import axios from 'axios';

import Card from './components/Card.vue';
import Header from './components/Header.vue'

export default {
  data() {
    return {
   
  };
  },
  components: {

    Header,

  },
}


</script>

<template>

<Header></Header>

<router-view></router-view>

</template>

<style scoped>
/*.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}*/
</style>
