<template>
  <div class="nav flex-center">
    <div class="homeClass">
      <a href="/home">Home</a>
    </div>
    <div class="search-wrapper col-xm-12 flex-center">
      <Search />
    </div>
    <div class="cartClass">
      <span @click="navigateto('cart')">Cart <span  class="cartcount" v-if="cartItemsCount>0">{{cartItemsCount}}</span></span>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
export default {
  name: "Header",
  components: {
    Search,
  },
  computed: {
    cartItemsCount() {
      return this.$store.getters.getItemsInCartCount;
    },
     cartItemList() {
          return this.$store.getters.getItemsInCart;
     },
    
  },
  methods: {
     navigateto(pathName) {
        this.$router.push(pathName)
     }
  },
};
</script>

<style scoped>
.flex-center {
  display: flex;
  align-items: center;
}
.cartcount{
   display: inline-block;
    color: #114295;
    background: #fff;
    padding: 2px;
    border-radius: 6px;
    font-size: 10px;
    position: relative;
    top: -6px;
}
.homeClass{
   width: 5%;
}.search-wrapper{
   width:85%
}
.cartClass{
   width: 10%;
   color: #fff;
}

.nav {
  background-image: linear-gradient(125deg, #a72879, #064497);
  overflow: hidden;
  display: flex;
  height: 70px;
}
.search-wrapper input[type="text"] {
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 14px;
  overflow: hidden;
}

.nav a {
  float: left;
  color: #fff;
  padding: 25px 30px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}
.nav a:hover {
  color: #000;
}
@media screen and (max-width: 576px) {
  .nav {
    background-image: linear-gradient(125deg, #a72879, #064497);
    overflow: hidden;
    display: flex;
    height: 70px;
  }
  .search-wrapper input[type="text"] {
    padding: 4px;
    border: none;
    margin-top: 16px;
    margin-right: 6px;
    margin-left: 7px;

    font-size: 8px;
    overflow: hidden;
  }

  .nav a {
    color: #fff;
    padding-top: 30px;
    font-size: 10px;
    padding-left: 7px;
    padding-right: 0px;
    text-decoration: none;
  }
  .nav a:hover {
    color: #000;
  }
}
</style>