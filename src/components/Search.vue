<template>
  <div class="search flex-center">
    <input
      type="text"
      @keyup="getItem"
      v-model="search"
      placeholder="Search .."
    />
  </div>
  <div></div>
</template>
<script>
import data from "../data/totalSearchResult.json";
export default {
  name: "Search",
  data() {
    return {
      item: "",
      search: "",
    };
  },
  created() {
    this.getItem();
  },
  methods: {
    getItem() {
      const payload = {
        searchText: this.search,
        totalSearch: data,
      };
      this.$store.dispatch("getSearchDebounce", payload);
    },
  },
  components: {},
};
</script>
<style>
.flex-center{
        display: flex;
    align-items: center;
}
</style>