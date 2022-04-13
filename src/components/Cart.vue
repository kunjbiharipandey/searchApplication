<template >
  <div class="cart">
    <h2>Your Cart is having {{ cartItemsCount }}.</h2>
        <div class="products" v-if="cartItemList.length >0">
        <div class="subProducts" v-for="(product, index) in cartItemList" :key="index">
          <img :src="product.image"  :alt="product.name"/>
          <div>{{ product.name }}</div>
          <div>{{ product.cost }}</div>
          <div> Count {{product.count}}</div>
        </div>
      </div>
      <div v-else>
        Your shopping cart is waiting. Give it purpose – fill it with groceries,
      clothing, household supplies, electronics and more.<br /><br />
      Continue shopping on the <a href="/home">Home</a>, Page learn about
      today's deals, or visit your Wish List.
      </div>
     
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {};
  },
  computed: {
    cartItemsCount() {
      return this.$store.getters.getItemsInCartCount;
    },
     cartItemList() {
          return this.$store.getters.getItemsInCart;
     },
    ...mapGetters({
      getItemsInCartCount: "getItemsInCartCount",
    }),
  },
};
</script>

<style scoped>
.cart {
  background-color: #eaeded !important;
  margin: 20px;
  padding: 10px;
}
@media screen and (max-width: 576px) {
  .cart h2 {
    font-size: 13px;
  }
  .cart p {
    font-size: 11px;
  }
}
</style>