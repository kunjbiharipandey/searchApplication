<template>
<div class="col-sm-3" >

<div v-if="page === 'cart'">
  <h1>Your cart</h1>
</div>
<div v-if="page === 'products'">
<div class="products">
 <div v-for="(product, index) in products" :key="index">
   <img :src="product.image" />
        <div>{{product.name}}</div>
        <div>{{product.cost}}</div><br>
   <button v-on:click="addItemToCart(product)" class="butt">Add to Cart</button>
</div>
</div>
</div>
</div>
   
  
</template>

<script>

export default{
    name:'MainContent',
   
   data(){
       return{
         page: "products",
            cart: [],
           products: [
            {
       
        image: 'https://rukminim1.flixcart.com/image/580/696/k5ihzm80/blazer/2/r/z/38-wnn123-personality-plus-original-imafz6fvzng77tvk.jpeg?q=50',
        
         name: ' Wedding Men Full Sleeve Blazer',
         cost:'₹5000'
      },
      {
        
        image: 'https://opsg-img-cdn-gl.heytapimg.com/epb/202112/07/aS58Rv1acnwyTOlP.jpg',
        name: 'OPPO F17',
        cost: '₹16,900'
      },
      {
        
        image: 'https://rukminim1.flixcart.com/image/580/696/kynb6vk0/kurta/u/b/4/l-hc-daffodil-kurta-pink-40-clickedia-original-imagau3ahamwtywh.jpeg?q=50',
        name: 'Women Ethnic Jacket ',
        cost: '₹349'
      },
      {
       
        image: 'https://rukminim1.flixcart.com/image/580/696/koudfgw0/shirt/q/s/2/l-double-threshold-maroon-shirt-l-qlonz-store-original-imafw5ax2f4dgjfc.jpeg?q=50',
         name: ' Mandarin Collar Casual Shirt',
         cost: '₹379'
      }
      
    ]
    
       }
   },
methods:{
  addItemToCart(product) {
    this.cart.push(product);
    console.log(this.cart);
  }
},
navigateTo(page){
  this.page=page;
}
  
}
</script>
<style>
 .products img{
    height:300px;
    
    
}
.products {
    display:flex;
    justify-content:space-around;
}
.col-sm-3{
  cursor: pointer;
  
  padding-top:25px;
  
  text-align: center;
   height: 500px;
}
.col-sm-3 img{
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  padding-bottom:35px;
}
.col-sm-3 img:hover {
  transform: scale(1.1);
}
.butt {
  background:linear-gradient(120deg,#2980b9, #8e44ad);
    margin-left: -47px;
    font-size: 15px;
  
}
.butt a{
   color:white;
   text-decoration:none;
}
 


</style>