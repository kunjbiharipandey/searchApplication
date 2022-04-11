<template>
 <div>
 
  

   <Header/>




   <router-view/>

 </div>
</template>

<script>

import Header from './home/Header.vue';

export default {
  name:'App',
 
  
  components:{
     Header
  }
  
  
  
  
}
</script>

<style>



</style>
