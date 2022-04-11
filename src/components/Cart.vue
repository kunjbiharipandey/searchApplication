<template >
<div class="cart">
<h2>Your Cart is empty.</h2>
<p > Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.<br><br>
Continue shopping on the <a href="/home" >Home</a>, Page learn about today's deals, or visit your Wish List. </p>
 
  </div>   

</template>

<script>
    export default {
        name: 'Cart', 
  


    }
</script>

<style scoped>

.cart{
    background-color: #EAEDED!important;
   margin: 20px;
    padding: 10px;

}
@media screen and (max-width:576px){
    .cart h2{
       font-size:13px;
    }
    .cart p{
        font-size:11px;
    }
}




</style>