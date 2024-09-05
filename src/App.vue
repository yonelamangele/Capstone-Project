<template>
  <navBar-comp/>
  <router-view/>
</template>

<script>

import NavBarComp from './components/NavBarComp.vue';

export default {
  components: {
    NavBarComp
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=New+Amsterdam&family=Oswald:wght@200..700&family=Rubik+Glitch&family=Sevillana&display=swap'); 
  
  body{
    background-image: url('https://yonelamangele.github.io/Capstone-Project/image/Screenshot%202024-09-02%20172305.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: white;
  }
</style>
