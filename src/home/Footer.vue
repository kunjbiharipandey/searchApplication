<template>

  <div class="footer is-primary">
     <div class="columns">
        <div class="column">
           <p>Get connected with us on social networks!</p>
        </div>
        <div class="icons has-text-right">
           <fa class="icon1" :icon ="['fab','facebook']"/>
           <fa :icon="['fab','twitter']"/>
        </div>
      
             
     </div>
     
  </div>


</template>
<script>
    export default {
        name: 'Footer', 

    }
</script>

<style scoped>
.footer{
    height:50px;
    max-width:100%;
    background-image: linear-gradient(125deg, #a72879, #064497);
    color:#fff
}
.columns{
    display:flex;
     
}
.column{
    padding-right:1060px;
    padding-left:65px;
   
}
.icons{
    justify-content:space-between;
    padding-top:16px
}
.icon1{
    padding-right:14px;
}
@media screen and (max-width:576px){
    
     
.column{
    padding-left: 1px;
    padding-right: 30px;
    font-size: 11px;
    padding-top: 8px;
   
}
.icons{
    font-size: 12px;
    padding-top: 18px;
}

}



</style>