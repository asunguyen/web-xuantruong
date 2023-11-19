<template>
  <div class="app-wrapper">
    <div class="container mt-4">
      <div class="sk-wrapper">
        <div id="back-top">
        <a href="#">
          <i class="fa fa-chevron-up"></i>
        </a>
      </div>
        <Header />
        <div style="min-height: 50vh">
          <router-view />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  name: "LayoutClient",
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
</style>
