<template>
  <div class="sticky-footer">
    <!-- <main class="site-container site-container-elementor"> -->
    <div class="site-page-content">
      <div class="banner-header">
        <VueSlickCarousel v-bind="bannerHome">
          <div class="slick-banner">
            <img class="hover" src="~@/assets/styles/images/project7.jpg" />
          </div>
          <div class="slick-banner">
            <img class="hover" src="~@/assets/styles/images/project6.jpg" />
          </div>
        </VueSlickCarousel>
        <div class="text-content text-content-section">
          <div class="title">
            <div class="d-flex">
              <img src="~@/assets/styles/images/star.png" />
              <h5>{{ listText }}</h5>
            </div>
            <h3>{{ developSlide.title }}</h3>
          </div>
          <div class="button-view">
            <a class="sk-btn sk-btn-1" href="#">
              <span>
                <img
                  class="default"
                  src="~@/assets/styles/images/arrow-blue-right.png"
                />
                <img
                  class="hover"
                  src="~@/assets/styles/images/arrow-white-right.png"
                />
              </span>
              Xem thêm
            </a>
          </div>
        </div>
      </div>
      <div class="section_">
        <b-row>
          <b-col cols="12" xl="5">
            <BannerLeft :listSlider="developSlide" :textBanner="listText" />
          </b-col>
          <b-col cols="12" xl="7">
            <div class="content-right">
              <b-row>
                <b-col cols="12" md="6">
                  <div class="text">
                    <h3 class="title">Về Xuân Trường</h3>
                    <div class="content">
                      <p>
                        Công ty Cổ phần Đầu tư Xây dựng và Phát triển Xuân
                        Trường là đơn vị chuyên nghiệp về đầu tư và xây dựng các
                        công trình năng lượng như thuỷ điện, năng lượng mặt
                        trời, năng lượng gió.
                      </p>
                      <p>
                        Trải qua hơn 1 thập kỷ, với kinh nghiệm và quan hệ với
                        những đối tác lớn hàng đầu, Công ty liên tục nghiên cứu
                        và đầu tư mới vào các dự án năng lượng tái tạo khác trên
                        phạm vi cả nước. Mục tiêu 5 năm tới trở thành đơn vị
                        phát triển năng lượng tái tạo hàng đầu Việt Nam.
                      </p>
                    </div>
                    <div class="sk-button">
                      <a class="sk-btn sk-btn-1" href="#">
                        <span>
                          <img
                            class="default"
                            src="~@/assets/styles/images/icon-download-blue.png"
                          />
                          <img
                            class="hover"
                            src="~@/assets/styles/images/icon-download-white.png"
                          />
                        </span>
                        Xuân Trường Profile
                      </a>
                    </div>
                  </div>
                </b-col>
                <b-col cols="12" md="6" offset-lg-0>
                  <div class="images">
                    <img src="~@/assets/images/Logo-02.png" />
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="section_ section-sumenh">
        <b-row>
          <b-col cols="12" xl="5">
            <BannerLeft :listSlider="valueSlide" :textBanner="valueText" />
          </b-col>
          <b-col cols="12 hight-default" xl="7">
            <div class="content-right">
              <div class="about-content">
                <div class="text">
                  <h3 class="title">
                    <img
                      class="default"
                      src="~@/assets/styles/images/icons1.png"
                    />
                    Sứ mệnh
                  </h3>
                  <div class="content">
                    <p>
                      “Phát triển nguồn năng lượng xanh cho một tương lai bền
                      vững là sứ mệnh của Xuân Trường Group.”
                    </p>
                  </div>
                </div>
                <div class="text-images">
                  <div class="images">
                    <img src="~@/assets/styles/images/Ho-Bau-Ngu-cover.jpg" />
                  </div>
                  <div class="text_right">
                    <h3 class="title">
                      <img
                        class="default"
                        src="~@/assets/styles/images/icons2.png"
                      />
                      Tầm nhìn
                    </h3>
                    <p>
                      Xuân“Trường Group quyết tâm trở thành tập đoàn phát triển
                      hệ sinh thái năng lượng xanh hàng đầu Việt Nam và khu vực,
                      không ngừng học hỏi và sáng tạo, luôn đi đầu trong việc
                      ứng dụng công nghệ mới để kiến tạo hệ sinh thái năng lượng
                      xanh, góp phần hạn chế biến đổi khí hậu, bảo vệ môi trường
                      và nâng tầm vị thế của thương hiệu Việt trên trường quốc
                      tế, trở thành Doanh nghiệp mang tầm cỡ Quốc gia.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="section_ section-about">
        <b-row>
          <b-col cols="12" xl="5">
            <BannerLeft :listSlider="aboutUsSlide" :textBanner="aboutUsText" />
          </b-col>
          <b-col cols="12" xl="7">
            <h3 class="title" Xuân>Trường Group TV</h3>
            <VueSlickCarousel
              v-bind="settingsAbout"
              class="slick-section-about"
            >
              <div class="swiper-slide">
                <div class="image">
                  <img class="hover" src="~@/assets/images/Logo-02.png" />
                </div>
                <div class="sk-video-play">
                  <a
                    href="https://www.youtube.com/watch?v=AEHfRfb6rsM&feature=emb_title"
                  >
                    <span>
                      <img
                        class="hover"
                        src="~@/assets/styles/images/icon-play.png"
                      />
                    </span>
                  </a>
                </div>
                <div class="background"></div>
              </div>
              <div class="swiper-slide">
                <div class="image">
                  <img class="hover" src="~@/assets/images/Logo-02.png" />
                </div>
                <div class="sk-video-play">
                  <a
                    href="https://www.youtube.com/watch?v=AEHfRfb6rsM&feature=emb_title"
                  >
                    <span>
                      <img
                        class="hover"
                        src="~@/assets/styles/images/icon-play.png"
                      />
                    </span>
                  </a>
                </div>
                <div class="background"></div>
              </div>
            </VueSlickCarousel>
          </b-col>
        </b-row>
      </div>
      <div class="section_ section-about-vision">
        <b-row>
          <b-col cols="12" xl="5">
            <BannerLeft :listSlider="missionSlide" :textBanner="aboutUsText" />
          </b-col>
          <b-col cols="12" xl="7">
            <VueSlickCarousel v-bind="settingsNews" class="slick-section-about">
              <div class="content-new">
                <b-row>
                  <b-col cols="12">
                    <h3 class="title pb-3">Tin tức chung</h3>
                  </b-col>
                  <b-col cols="12" md="6">
                    <div class="big-new" v-for="(item, index) in newsCategory" :key="item._id" v-if="index==0">
                      <div class="images-new">
                        <img
                          class="default"
                          :src="item.thumbnail"
                        />
                      </div>
                      <div class="text-new">
                        <h5 class="title">
                          {{item.title}}
                        </h5>
                        <span>{{ formatDateTime(item.createdAt) }}</span>
                        <P
                          >{{item.description}}</P
                        >
                        <div class="button-view">
                          <div class="sk-btn sk-btn-1" href="#" @click="goToDetailNew(item._id)">
                            <span>
                              <img
                                class="default"
                                src="~@/assets/styles/images/arrow-blue-right.png"
                              />
                              <img
                                class="hover"
                                src="~@/assets/styles/images/arrow-white-right.png"
                              />
                            </span>
                            Xem thêm
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="12" md="6">
                    <div class="smalls-new">
                      <div class="small-new"  v-for="(item, index) in newsCategory" :key="item._id" v-if="index!=0 && index <= 2" >
                        <div class="images-new">
                          <img :src="item.thumbnail" />
                        </div>
                        <div class="text-new">
                          <h5 class="title">
                            {{item.title}}
                          </h5>
                          <span>{{ formatDateTime(item.createdAt) }}</span>
                          <div class="content-bottom">
                            <P
                          >{{item.description}}</P
                            >
                            <div class="button-view">
                              <div class="sk-btn sk-btn-1"  @click="goToDetailNew(item._id)">
                                <span>
                                  <img
                                    class="default"
                                    src="~@/assets/styles/images/arrow-blue-right.png"
                                  />
                                  <img
                                    class="hover"
                                    src="~@/assets/styles/images/arrow-white-right.png"
                                  />
                                </span>
                                Xem thêm
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </VueSlickCarousel>
          </b-col>
        </b-row>
      </div>
      <div class="section_ section-about-active">
        <b-row>
          <b-col cols="12" xl="5">
            <BannerLeft :listSlider="companySlide" :textBanner="aboutUsText" />
          </b-col>
          <b-col cols="12 hight-default" xl="7">
            <b-row class="content-new">
              <b-col cols="12">
                <h3 class="title">Hoạt Động Cộng Đồng</h3>
              </b-col>
              <b-col cols="12" md="6" v-for="(item, index) in communityCategory " :key="item._id" v-if="index <= 1" >
                <div class="item-new">
                  <div class="image">
                    <a href="#">
                      <img
                        :src="item.thumbnail"
                      />
                    </a>
                  </div>
                  <div class="text">
                    <p @click="goToDetailNew(item._id)">{{item.title}}</p>
                  </div>
                </div>
              </b-col>

              <b-col cols="12">
                <div class="sk-button">
                  <a class="sk-btn sk-btn-1" href="#">
                    <span>
                      <img
                        class="default"
                        src="~@/assets/styles/images/arrow-bg-blue-right.png"
                      />
                      <img
                        class="hover"
                        src="~@/assets/styles/images/arrow-bg-white-right.png"
                      />
                    </span>
                    Xuân Trường Profile
                  </a>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
      <div class="section-field-activity">
        <div class="hight-default">
          <b-row>
            <b-col cols="12">
              <h3 class="title">Lĩnh vực hoạt động</h3>
            </b-col>
            <b-col
              cols="12"
              xl="4"
              sm="6"
              v-for="item in listCategoryActivity"
              :key="item._id"
            >
              <div class="item-new">
                <div class="image">
                  <img src="~@/assets/styles/images/item1.jpg" />
                </div>
                <div class="content-item">
                  <div class="title">
                    <!-- <img src="~@/assets/styles/images/icon-category1.png" /> -->
                    <h5 @click="goToDetailProject()">{{ item.title }}</h5>
                  </div>
                  <div class="button-view">
                    <div class="sk-btn sk-btn-1" @click="goToDetailProject()">
                      <span>
                        <img
                          class="default"
                          src="~@/assets/styles/images/arrow-blue-right.png"
                        />
                        <img
                          class="hover"
                          src="~@/assets/styles/images/arrow-white-right.png"
                        />
                      </span>
                      Xem thêm
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
            <!-- <b-col cols="12" xl="4" sm="6">
              <div class="item-new">
                <div class="image">
                  <img src="~@/assets/styles/images/item2.jpg" />
                </div>
                <div class="content-item">
                  <div class="title">
                    <img src="~@/assets/styles/images/icon-category2.png" />
                    <h5>Điện gió</h5>
                  </div>
                  <div class="button-view">
                    <a class="sk-btn sk-btn-1" href="#">
                      <span>
                        <img class="default" src="~@/assets/styles/images/arrow-blue-right.png" />
                        <img class="hover" src="~@/assets/styles/images/arrow-white-right.png" />
                      </span>
                      Xem thêm
                    </a>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col cols="12" xl="4" sm="6">
              <div class="item-new">
                <div class="image">
                  <img src="~@/assets/styles/images/item3.jpg" />
                </div>
                <div class="content-item">
                  <div class="title">
                    <img src="~@/assets/styles/images/icon-category3.png" />
                    <h5>Năng lượng mặt trời</h5>
                  </div>
                  <div class="button-view">
                    <a class="sk-btn sk-btn-1" href="#">
                      <span>
                        <img class="default" src="~@/assets/styles/images/arrow-blue-right.png" />
                        <img class="hover" src="~@/assets/styles/images/arrow-white-right.png" />
                      </span>
                      Xem thêm
                    </a>
                  </div>
                </div>
              </div>
            </b-col> -->
          </b-row>
        </div>
      </div>
      <!-- Dự án nổi bật -->
      <RelatedProjects @directional="goToDetailNew" />
      <!-- End Dự án nổi bật -->
      <div class="section-customers-partners">
        <h3 class="title">Khách hàng và đối tác</h3>
        <VueSlickCarousel v-bind="settings">
          <div>
            <div class="item-slick">
              <img src="~@/assets/styles/images/Logo-BIDV.jpg" />
            </div>
          </div>
          <div>
            <div class="item-slick">
              <img
                src="~@/assets/styles/images/General_Electric_logo.svg.png"
              />
            </div>
          </div>
          <div>
            <div class="item-slick">
              <img
                src="~@/assets/styles/images/Screen-Shot-2020-01-12-at-8.41.10-PM.jpg"
              />
            </div>
          </div>
          <div>
            <div class="item-slick">
              <img src="~@/assets/styles/images/evn.jpg" />
            </div>
          </div>
          <div>
            <div class="item-slick">
              <img src="~@/assets/styles/images/agribank-logo.png" />
            </div>
          </div>
          <div>
            <div class="item-slick">
              <img src="~@/assets/styles/images/Canadian-Solar-Logo.jpg" />
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import moment from "moment";
import BannerLeft from "./components/BannerLeft.vue";
import RelatedProjects from "./components/RelatedProjects.vue";
import { getListAllPosts } from "@/api/posts";
import { getListSlider } from "@/api/slide";
import { getListCategory } from "@/api/category";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import $ from "jquery";

export default {
  props: {},
  name: "Home",
  components: { VueSlickCarousel, BannerLeft, RelatedProjects },
  data() {
    return {
      videoId: "https://www.youtube.com/watch?v=WLc5-k3y_Po",
      value: "",
      context: null,
      slide: 0,
      sliding: null,
      textBanner: "",
      listText: "CÔNG TY CỔ PHẦN ĐẦU TƯ XÂY DỰNG VÀ PHÁT TRIỂN TRƯỜNG THÀNH",
      valueText: " XÂY NHỮNG GIÁ TRỊ, DỰNG NHỮNG ƯỚC MƠ",
      aboutUsText: "ABOUT US",
      listSlider: [],
      developSlide: [],
      valueSlide: [],
      aboutUsSlide: [],
      missionSlide: [],
      companySlide: [],
      listCategoryActivity: [],
      communityCategory: [],
      newsCategory: [],
      settings: {
        dots: false,
        infinite: true,
        initialSlide: 2,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ],
      },
      settingsAbout: {
        dots: true,
        infinite: true,
        initialSlide: 2,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
      settingMyProject: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        swipeToSlide: true,
      },
      settingsNews: {
        dots: true,
        infinite: true,
        initialSlide: 2,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerPadding: "700px",
        otsClass: "slick-dots custom-dot-class",
      },
      bannerHome: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: false,
        swipeToSlide: true,
        edgeFriction: 0.35,
        otsClass: "slick-dots custom-dot-class",
      },
      form: {
        email: "",
        name: "",
        phoneNumber: "",
        content: "",
      },
      pagination: {
        totalItems: 0,
        currentPage: 1,
        pageSize: 100,
      },
    };
  },

  computed: {
    ...mapGetters(["dataSlie", "categoryNews", "listNews"]),
  },
  created() {
    this.getListAllPosts();
    this.getListSlider();
    this.getListCategory();
  },
  methods: {

    goToDetailNew(data) {
      this.$router.push({
        path: `/news-detail${data}`,
      });
    },
    goToDetailProject() {
      this.$router.push({
        path: `/myproject`,
      });
    },
    getListAllPosts() {
      this.listLoading = true;
      const params = {
        page: this.pagination.currentPage - 1,
        size: this.pagination.pageSize,
      };
      getListAllPosts(params).then((response) => {
        this.pagination.totalItems = response.total;
        const arrNews = [];
        const arrCommunity = [];
        for (const item of response.data) {
          switch (item.categoryID) {
            case "65753120498e2cea511898ed":
              arrNews.push(item);
              break;
            case "657530d1498e2cea511898e1":
              arrCommunity.push(item);
              break;
          }
        }
        this.communityCategory = arrCommunity
        this.newsCategory = arrNews
        console.log(" this.communityCategory", arrCommunity);
      });
    },
    getListSlider() {
      this.listLoading = true;
      getListSlider().then((response) => {
        console.log("responselistSlider", response.data);
        this.listSlider = response.data;
        for (const item of response.data) {
          switch (item._id) {
            case "657d6dfb498e2cea5118a0b6":
              this.developSlide = item;
              break;
            case "657d6e46498e2cea5118a0bb":
              this.valueSlide = item;
              break;
            case "657d6e7a498e2cea5118a0be":
              this.aboutUsSlide = item;
              break;
            case "657d6ebe498e2cea5118a0c1":
              this.missionSlide = item;
              break;
            case "657d6ee4498e2cea5118a0c4":
              this.companySlide = item;
              break;
          }
        }
        // this.$store.dispatch("slide/getListSlider", this.listSlider);
        this.listLoading = false;
      });
    },
    getListCategory() {
      const params = {
        page: 0,
        size: 10000,
      };
      getListCategory(params).then((response) => {
        const categoryNews = [
          "657b306a498e2cea51189da7",
          "657b305a498e2cea51189da3",
          "657b3041498e2cea51189d9f",
        ];
        for (const i of response.data) {
          for (const j of categoryNews) {
            if (j == i._id) {
              this.listCategoryActivity.push(i);
            }
          }
        }
        console.log("listCategory", this.listCategory);
      });
    },
    formatDateTime(data) {
      return moment(data).format("YYYY-MM-DD");
    },
  },

  mounted() {},
};
</script>
<style lang="scss" scoped>
.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 60px 70px;
  position: absolute;
  width: 100%;
  z-index: 2;
}
</style>
