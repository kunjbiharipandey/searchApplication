<template>
  <div class="col-sm-3">
    <div v-if="page === 'cart'">
      <h1>Your cart</h1>
    </div>
    {{data}}
    <div v-if="page === 'products'">
      <div class="products" v-if="$store.getters.getSearchResults.searchResult.length >0">
        <div class="subProducts" v-for="(product, index) in $store.getters.getSearchResults.searchResult" :key="index">
          <img :src="product.image"  :alt="product.name"/>
          <div>{{ product.name }}</div>
          <div>{{ product.cost }}</div>
          <br />
          <button v-on:click="addItemToCart(product)" class="butt">
            Add to Cart
          </button>
        </div>
      </div>
      <div v-else>
        <img src="https://dlinkmea.com/images/no-product.png" />
        No Results Found
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import data from "../data/totalSearchResult.json";
export default {
  name: "MainContent",

  data() {
    return {
      page: "products",
      cart: [],
      computed: {
        ...mapGetters({
          getSearchResults: "getSearchResults",
          getSearchText: 'getSearchText',
          gettotalSearch:'gettotalSearch',
          getItemsInCartCount:'getItemsInCartCount',
          getItemsInCart: 'getItemsInCart'
        }),
      },
    };
  },mounted() {
    this.$store.commit('UPDATE_SEARCH_RESULT', data)
    this.$store.commit('UPDATE_TOTAL_SEARCH', data)
  },
  created() {
     this.$store.commit('UPDATE_SEARCH_RESULT', data)
    this.$store.commit('UPDATE_TOTAL_SEARCH', data)
    console.log('test', this.$store.getters.getSearchResults)
    this.getSearchResults = data
  },

  methods: {
    addItemToCart(product) {
      console.log(product)
      let totalItemsInCart = this.$store.getters.getItemsInCart?this.$store.getters.getItemsInCart: [];
      console.log(totalItemsInCart)
      console.log('indexOF',totalItemsInCart.indexOf(product));
      let totalCount = 0;
      if(totalItemsInCart.indexOf(product) >-1){
        totalItemsInCart[totalItemsInCart.indexOf(product)].count = parseInt(totalItemsInCart[totalItemsInCart.indexOf(product)].count)+1
      } else{
        product.count = 1
        totalItemsInCart.push(product)
      }
      for(const element of totalItemsInCart){
        totalCount += element.count
      }
      console.log('toal', totalItemsInCart)
      this.$store.commit('UPDATE_ITEM_CARTS', totalItemsInCart);
      this.$store.commit('UPDATE_ITEMS_CART_COUNT',totalCount);

      console.log(this.$store.getters.getItemsInCartCount);
    },
  },
  navigateTo(page) {
    this.page = page;
  },
};
</script>
<style>
.products img {
  height: 300px;
}
.products {
   display: flex;
  flex-wrap: wrap;
}
.subProducts {
  flex: 1 0 21%; /* explanation below */
  margin: 5px;
}
.col-sm-3 {
  cursor: pointer;

  padding-top: 25px;

  text-align: center;
  height: 500px;
}
.col-sm-3 img {
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  padding-bottom: 35px;
}
.col-sm-3 img:hover {
  transform: scale(1.1);
}
.butt {
  background: linear-gradient(120deg, #2980b9, #8e44ad);
  margin-left: -47px;
  font-size: 15px;
}
.butt a {
  color: white;
  text-decoration: none;
}
</style>