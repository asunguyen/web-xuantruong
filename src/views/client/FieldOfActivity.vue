<template>
    <div class="sticky-footer">
        <main class="site-container site-container-elementor">
            <div class="site-page-content">
                <div class="section_ ">
                    <b-row>
                        <b-col  cols="12" lg="5" class="sidebar p-0">
                            <div class="banner-left">
                                <div class="text-content-section">
                                    <div class="title">
                                        <div class="d-flex">
                                            <h3>
                                                Lĩnh vực hoạt động
                                            </h3>
                                        </div>
                                        <ul class="sk-custom-items">
                                            <li class="menu-item"><a href="#section-1"> Thủy điện
                                                    <img alt="" src="~@/assets/styles/images/arrow-white-right.png"></a>
                                            </li>
                                            <li class="menu-item"><a href="#section-2"> Năng lượng mặt trời
                                                    <img alt="" src="~@/assets/styles/images/arrow-white-right.png"></a>
                                            </li>
                                            <li class="menu-item"><a href="#section-3"> Năng lượng gió
                                                    <img alt="" src="~@/assets/styles/images/arrow-white-right.png"></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="12" lg="7" class="hight-default sections">
                            <div id="section-1" class="content-right d-flex">
                                <div class="text">
                                    <h3 class="title">Tiềm năng nghành Thuỷ Điện tại Việt Nam</h3>
                                    <div class="content">
                                        <p>
                                            Công ty Cổ phần Đầu tư Xây dựng và Phát triển Xuân Trường
                                            là đơn vị chuyên nghiệp về đầu tư và xây dựng các công trình
                                            năng lượng như thuỷ điện, năng lượng mặt trời, năng lượng
                                            gió.
                                        </p>
                                        <p>
                                            Trải qua hơn 1 thập kỷ, với kinh nghiệm và quan hệ với những
                                            đối tác lớn hàng đầu, Công ty liên tục nghiên cứu và đầu tư
                                            mới vào các dự án năng lượng tái tạo khác trên phạm vi cả
                                            nước. Mục tiêu 5 năm tới trở thành đơn vị phát triển năng
                                            lượng tái tạo hàng đầu Việt Nam.
                                        </p>
                                    </div>
                                    <div class="sk-button">
                                        <a class="sk-btn sk-btn-1" href="#">
                                            <span>
                                                <img class="default" src="~@/assets/styles/images/icon-download-blue.png" />
                                                <img class="hover" src="~@/assets/styles/images/icon-download-white.png" />
                                            </span>
                                            Xuân Trường Profile
                                        </a>
                                    </div>
                                </div>
                                <div class="images">
                                    <img src="~@/assets/images/Logo-02.png" />
                                </div>
                            </div>

                        </b-col>
                    </b-row>
                </div>
                <RelatedProjects @directional="goToDetailNew" />
            </div>
        </main>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import MenuScrollMixin from '@/mixin/MenuScroll'
import RelatedProjects from "./components/RelatedProjects.vue";


export default {
    name: 'Introduce',
    components: { VueSlickCarousel, RelatedProjects },
    mixins: [MenuScrollMixin],
    // methods: {
    // },
    data() {
        return {
            settingsHistory: {
                dots: false,
                infinite: true,
                initialSlide: 2,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                swipeToSlide: true,
                centerPadding: '700px',
                'otsClass': 'slick-dots custom-dot-class'
            }
        }
    },
    methods: {
        goToDetailNew(data) {
            this.$router.push({
                path: `/news-detail${data}`,
            });
        },
    }

}
</script>
<style lang="scss" scoped>
@import "~@/styles/page.scss";

.section_ {
    border-bottom: unset;
}

// .hight-default{
//     background: unset;
// }
.section-our-project {
    margin-top: 50px;
}

.slick-section-about .slick-slide a img {
    height: unset
}</style>
