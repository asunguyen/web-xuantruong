<template>
  <div class="sticky-footer">
    <main class="site-container site-container-elementor">
      <div class="site-page-content">
        <img src="~@/assets/images/comming-soon.jpg" width="100%" height="100%"/>
      </div>
    </main>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Home",
  components: { VueSlickCarousel },
  methods: {
    goToProductDetail() {
      this.$router.push("/product-detail");
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
