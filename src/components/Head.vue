<template>
 <div>
   <carousel
     @next="next"
     @prev="prev"
   >
     <carousel-slide v-for="(slide,index) in slides" 
     :key="slide" 
     :index="index" 
     :visibleSlide="visibleSlide"
     >
     <img :src="slide"/>
     </carousel-slide>
   </carousel> 
   <MainContent/>
  <Footer/>
 </div>
</template>

<script>


import Carousel from '../components/Carousel.vue';
import CarouselSlide from '../components/CarouselSlide.vue';
import MainContent from '../home/MainContent.vue';
import Footer from '../home/Footer.vue';
export default {
  name:'Head',
  data(){
    return{
      slides:[
          
           'https://m.media-amazon.com/images/I/91OXOR85PxL._SX3000_.jpg',
          'https://rukminim1.flixcart.com/flap/1688/280/image/f5ce6d8718d84bab.jpg?q=50',
          'https://m.media-amazon.com/images/I/61tMUMT88rL._SX3000_.jpg '
          
      ],
        visibleSlide:0,//show me first slide
    }
  },
  computed:{
    slidesLen(){
      return this.slides.length;
    }
  },
  methods:{
      next(){
         if(this.visibleSlide>=this.slidesLen-1){
              this.visibleSlide=0;
         }else{
           this.visibleSlide++;
         }
      },
      prev(){
         if(this.visibleSlide<=0){
              this.visibleSlide=this.slidesLen-1;
         }else{
           this.visibleSlide--;
         }
      }
  },
  
  
  components:{
     Carousel,CarouselSlide,MainContent,Footer
  
  
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
 
}

body{
  margin:0;
  padding:0;
}
.carousel .carousel-slide img {
    height: 350px;
    width: 100%;
    background-attachment:fixed;
}
@media screen and (max-width:576px){
  .carousel .carousel-slide img{
    width: 100%;
    height: 200px;
  }
}



</style>
