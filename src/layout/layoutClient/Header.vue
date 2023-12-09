<template>
  <header id="home" class="site-header">
    <b-container fluid class="p-0">
      <div class="menu-header" :class="{ menuPage: checkHeaPage, menuPageText: !isPageHome }">
        <div class="menu-mobile">
          <h3 id="menu-toggle">Menu</h3>
          <ul id="menu">
            <li><a href="#">Home</a>
              <ul class="sub-menu">
                <li><a href="#">Test 1</a></li>
                <li><a href="#">Test 2</a></li>
              </ul>
            </li>
            <li><a href="#">Products</a>
              <ul class="sub-menu">
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
                <li><a href="#">Javascript</a>
                  <ul class="sub-menu">
                    <li><a href="#">jQuery</a></li>
                    <li><a href="#">MooTools</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="logo">
          <a href="#">
            <img src="~@/assets/images/Logo-04.png" />
          </a>
        </div>
        <div class="menu_ ">
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
            <!-- <div class="flag">
              <img src="~@/assets/styles/images/vn.png" />
              <img src="~@/assets/styles/images/en.png" />
            </div> -->
          </div>
        </div>

      </div>

    </b-container>
  </header>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      inputSearch: '',
      seen: false
    }
  },
  computed: {
    isPageHome() {
      console.log(this.$route.name)
      return this.$route.name === 'Home' ? true : false;
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
  },
  mounted() {
    console.log("đây là jquery2:: ", $(".menu-header"));
    $.fn.extend({

      // Define the threeBarToggle function by extending the jQuery object
      threeBarToggle: function (options) {

        // Set the default options
        var defaults = {
          color: 'black',
          width: 30,
          height: 25,
          speed: 400,
          animate: true
        }
        var options = $.extend(defaults, options);

        return this.each(function () {

          $(this).empty().css({ 'width': options.width, 'height': options.height, 'background': 'transparent' });
          $(this).addClass('tb-menu-toggle');
          $(this).prepend('<div class="icon"></div><div class="icon"></div><div class="icon"></div>').on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('tb-active-toggle');
            if (options.animate) { $(this).toggleClass('tb-animate-toggle'); }
            $('.tb-mobile-menu').slideToggle(options.speed);
          });
          $(this).children().css('background', options.color);
        });
      },

      // Define the accordionMenu() function that adds the sliding functionality
      accordionMenu: function (options) {

        // Set the default options
        var defaults = {
          speed: 400
        }
        var options = $.extend(defaults, options);

        return this.each(function () {

          $(this).addClass('tb-mobile-menu');
          var menuItems = $(this).children('li');
          menuItems.find('.sub-menu').parent().addClass('tb-parent');
          $('.tb-parent ul').hide();
          $('.tb-parent > a').on('click', function (event) {
            event.stopPropagation();
            event.preventDefault();
            $(this).siblings().slideToggle(options.speed);
          });

        });
      }
    });

    // Convert any element into a three bar toggle
    // Optional arguments are 'speed' (number in ms, 'slow' or 'fast') and 'animation' (true or false) to disable the animation on the toggle
    $('#menu-toggle').threeBarToggle({ color: '#3c0397', width: 30, height: 25 });

    // Make any nested ul-based menu mobile
    // Optional arguments are 'speed' and 'accordion' (true or false) to disable the behavior of closing other sub
    $('#menu').accordionMenu();
  }
}
</script>
<style scoped >
/* .menuPage {
  position: unset !important;
  padding: 0px 70px 23px;

  .menu_ {
    ul {
      li {
        a {
          color: #000;
        }
      }
    }
  }
} */
</style>
