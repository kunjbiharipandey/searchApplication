<template>
  <div class="carousel">
     <slot></slot>
     <button @click="next" class="next">Next</button>
     <button  @click="prev" class="prev">Prev</button>
  </div>
  
</template>

<script>
export default{
    name:'Carousel',
   data(){
       return{

       }
   },
   methods:{
       next(){
          this.$emit('next')
       },
       prev(){
           this.$emit('prev')
       }
   }
  
}
</script>
<style>
  .carousel{
      position:relative;
    
      height:347px;
      overflow:hidden;
  }
  button{
      position:absolute;
      height:40px;
     background-color:#fff;
      
      color:#blue;
  }
  button:active, button:hover{
      outline:none;
      cursor:pointer;
  }
  .next{
      right:0;
      top: 160px;
  }
  .prev {
      left:0;
      top: 160px;
  }
  @media screen and (max-width:576px){
      .carousel {
    position: relative;
    height: 216px;
    overflow: hidden;
}
      .next{
          right:0;
          top: 80px;
      }
      .prev{
       left:0;
          top: 80px;
      }
      button{
         font-size: 10px;
      }
  }

</style>