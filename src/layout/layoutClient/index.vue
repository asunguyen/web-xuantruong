<template>
  <div class="app-wrapper">
    <div class="">
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
import Header from './Header.vue'
import Footer from './Footer.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BButton,
  BTable,
  BMedia,
  BAvatar,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
  BTooltip,
  BModal,
  BFormCheckbox,
  BFormGroup,
  BFormSelect,
  BAlert
} from 'bootstrap-vue'

export default {
  name: 'LayoutClient',
  components: {
    Header,
    Footer,
    VueSlickCarousel,
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BTooltip,
    BModal,
    BFormGroup,
    BFormCheckbox,
    BFormSelect,
    BAlert 
  }
}
</script>
<style lang="scss" >
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
@import "~@/styles/css/home.css";
@import "~@/styles/css/common.css";

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
