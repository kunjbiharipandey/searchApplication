<template>
  <div class="carousel">
    <slot></slot>
    <button @click="next" class="next carosalButton">Next</button>
    <button @click="prev" class="prev carosalButton">Prev</button>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {};
  },
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>
<style>
.carosalButton {
  background: #1a6abbf2;
  color: antiquewhite;
  border: 1px solid #1a6abbf2;
  width: 70px;
}
.next {
  margin-left: 30px;
}
.prev {
  margin-right: 30px;
}
.carousel {
  position: relative;

  height: 347px;
  overflow: hidden;
}
button {
  position: absolute;
  height: 40px;
  background-color: #fff;
  color: blue;
}
button:active,
button:hover {
  outline: none;
  cursor: pointer;
}
.next {
  right: 30px;
  top: 160px;
}
.prev {
  left: 30px;
  top: 160px;
}
@media screen and (max-width: 576px) {
  .carousel {
    position: relative;
    height: 216px;
    overflow: hidden;
  }
  .next {
    right: 0;
    top: 80px;
  }
  .prev {
    left: 0;
    top: 80px;
  }
  button {
    font-size: 10px;
  }
}
</style>