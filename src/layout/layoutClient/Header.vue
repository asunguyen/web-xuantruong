<template>
  <header id="home" class="site-header">
    <b-container fluid class="p-0">
      <div class="menu-header" :class="{ menuPage: checkHeaPage, menuPageText: !isPageHome }">
        <div class="logo">
          <a href="#">
            <img src="~@/assets/images/Logo-04.png" />
          </a>
        </div>
        <div class="menu_ d-flex">
          <ul>
            <li><a href="#"> gới thiệu </a></li>
            <li><a href="#"> lĩnh vực hoạt động </a></li>
            <li><a href="#"> dự án </a></li>
            <li><a href="#"> quan hệ cổ đông </a></li>
            <li><a href="#"> tin tức </a></li>
            <li><a href="#"> tuyển dụng </a></li>
          </ul>
          <div class="search-flag">
            <div class="search">
              <b-icon icon="search" @click="!seen" aria-hidden="true"></b-icon>
              <div class="iput-search" v-if="seen">
                <b-form-input v-model='inputSearch' placeholder="Enter your name"></b-form-input>
              </div>
            </div>
            <div class="flag">
              <img src="~@/assets/styles/images/vn.png" />
              <img src="~@/assets/styles/images/en.png" />
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </header>
</template>
<script>
export default {
  data() {
    return {
      inputSearch: '',
      seen: false
    }
  },
  created() {
    this.checkHeaPage()
  },
  computed: {
    isPageHome() { 
      console.log(this.$route.name )
      return this.$route.name === 'Home' ? true : false ;
    },
    checkHeaPage() {
      const check = this.$route.name
      switch (check) {
        case 'Home':
          return false
          break
        case 'Introduce':
          return false
          break
        case 'FieldOfActivity':
          return false
          break
        case 'Recruitment':
          return false
          break
        default:
          return true
          break
      }
    }
  }
}
</script>
<style scoped lang="scss">
.menuPage{
  position: unset!important;
  padding: 0px 70px 23px;
  .menu_ {
    ul{
      li{
        a{
          color: #000;
        }
      }
    }
  }
}
</style>
