<template>
<transition name="left" modes="in-out">
   <div  v-show="visibleSlide === index " class="carousel-slide">
   <slot></slot>
   </div>
   </transition>
   
  
</template>

<script>

export default{
    name:'CarouselSlide',
    props:['visibleSlide','index'],
   data(){
       return{
            
       }
   }
  
}
</script>
<style>
.carousel-slide{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    
}

.left-enter-active{
    animation: leftInAnimation 0.4s ease-in-out;
}.left-leave-active{
    animation: leftOutAnimation 0.4s ease-in-out;
}
@keyframes leftInAnimation {
    from {transform: translateX(100%);}
    to {transform: translateX(0%);}
}
@keyframes leftOutAnimation {
    from {transform: translateX(0%);}
    to {transform: translateX(-100%);}
}


</style>
