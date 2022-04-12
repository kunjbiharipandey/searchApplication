<template>
    

    <div class="nav">
    <div >
    <a href="/home">Home</a>
    </div>
   
   
  
    <div class="search-wrapper col-xm-12">
   <input type="text" placeholder="Search..">
    </div>

   
   
    <div>
    <a href="/register">Signup/Register</a>
    </div>
    <div>
      <a href="/login">Login</a>  
    </div>
    
   <div>
       <a href="/cart">Cart</a>  
   </div>
   
   </div>
    

</template>

<script>

    export default {
        name: 'Header',
        
  
 

    }
</script>

<style scoped>

.nav{
   background-image: linear-gradient(125deg, #a72879, #064497);
   overflow:hidden;
   display:flex;
   height:70px;
}
.search-wrapper input[type=text] {
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 14px;
  overflow: hidden;
  
}
.search-wrapper{
   padding-top: 12px;
}

.nav a{
   float:left;
   color:#fff;
  padding:25px 30px;
   text-align:center;
   font-size:17px;
   text-decoration:none;
   margin-right:5px;
}
.nav a:hover{
   color:#000;
}
@media screen and (max-width:576px){
  .nav{
   background-image: linear-gradient(125deg, #a72879, #064497);
   overflow:hidden;
   display:flex;
   height:70px;
}
.search-wrapper input[type=text]{
    padding: 4px;
    border: none;
    margin-top: 16px;
    margin-right: 6px;
    margin-left: 7px;
    
    font-size: 8px;
    overflow: hidden;


}

.nav a{
   
   color:#fff;
  padding-top: 30px;
  font-size: 10px;
    padding-left: 7px;
    padding-right:0px;
   text-decoration:none;
   
}
.nav a:hover{
   color:#000;
}


}



</style>