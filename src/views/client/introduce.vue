<template>
    <div class="sticky-footer">
        <main class="site-container site-container-elementor">
            <div class="site-page-content">
                <div class="section_ ">
                    <b-row>
                        <b-col class="sidebar p-0" cols="5">
                            <div class="banner-left">
                                <div class="text-content-section">
                                    <div class="title">
                                        <div class="d-flex">
                                            <h3>
                                                Về chúng tôi
                                            </h3>
                                        </div>
                                        <ul class="sk-custom-items">
                                            <li class="menu-item"><a href="#section-1"> Tổng quan
                                                    <img alt="" src="~@/assets/styles/images/arrow-white-right.png"></a>
                                            </li>
                                            <li class="menu-item"><a href="#section-2"> Lich sử phát triển
                                                    <img alt="" src="~@/assets/styles/images/arrow-white-right.png"></a>
                                            </li>
                                            <li class="menu-item"><a href="#section-3"> Sứ mệnh - tầm nhìn
                                                    <img alt="" src="~@/assets/styles/images/arrow-white-right.png"></a>
                                            </li>
                                            <li class="menu-item"><a href="#section-4"> Lãnh đạo
                                                    <img alt="" src="~@/assets/styles/images/arrow-white-right.png"></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="7 hight-default sections">
                            <div id="section-1" class="content-right d-flex">
                                <div class="text">
                                    <h3 class="title-big">Tổng Quan</h3>
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
                            <div id="section-2" class="history">
                                <h3 class="title">Lich sử hình thành & phát triển</h3>
                                <VueSlickCarousel v-bind="settingsHistory" class="">
                                    <div class="item">
                                        <h3 class="year">
                                            2008</h3>
                                        <div class="content sk-slider-video">
                                            <div class="desc">
                                                <p>Thành lập Công ty Cổ phần Đầu tư Xây dựng và Phát triển Xuân Trường.</p>
                                                <p>
                                                    “Phát triển nguồn năng lượng xanh cho một tương lai bền
                                                    vững là sứ mệnh của Xuân Trường Group.”
                                                </p>
                                                <p>
                                                    “Phát triển nguồn năng lượng xanh cho một tương lai bền
                                                    vững là sứ mệnh của Xuân Trường Group.”
                                                </p>
                                            </div>
                                            <div class="image">
                                                <img class="default" src="~@/assets/styles/images/icon-play.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <h3 class="year">
                                            2008</h3>
                                        <div class="content sk-slider-video">
                                            <div class="desc">
                                                <p>Thành lập Công ty Cổ phần Đầu tư Xây dựng và Phát triển Xuân Trường.</p>
                                            </div>
                                            <div class="image">
                                                <img class="default" src="~@/assets/styles/images/icon-play.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <h3 class="year">
                                            2010</h3>
                                        <div class="content sk-slider-video">
                                            <div class="desc">
                                                <p>Thành lập Công ty Cổ phần Đầu tư Xây dựng và Phát triển Xuân Trường.</p>
                                            </div>
                                            <div class="image">
                                                <img class="default" src="~@/assets/styles/images/icon-play.png" />
                                            </div>
                                        </div>
                                    </div>
                                </VueSlickCarousel>
                            </div>
                            <div id="section-3" class="section-sumenh">
                                <div class="content-right d-flex">
                                    <div class="about-content d-flex">
                                        <div class="text">
                                            <h3 class="title">
                                                <img class="default" src="~@/assets/styles/images/icons1.png" />
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
                                                    <img class="default" src="~@/assets/styles/images/icons2.png" />
                                                    Tầm nhìn
                                                </h3>
                                                <p>
                                                    Xuân“Trường Group quyết tâm trở thành tập đoàn phát
                                                    triển hệ sinh thái năng lượng xanh hàng đầu Việt Nam và
                                                    khu vực, không ngừng học hỏi và sáng tạo, luôn đi đầu
                                                    trong việc ứng dụng công nghệ mới để kiến tạo hệ sinh thái
                                                    năng lượng xanh, góp phần hạn chế biến đổi khí hậu, bảo vệ
                                                    môi trường và nâng tầm vị thế của thương hiệu Việt trên
                                                    trường quốc tế, trở thành Doanh nghiệp mang tầm cỡ Quốc
                                                    gia.”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="section-4" class="ban-lanhdao">
                                <b-row>
                                    <b-col cols="12">
                                        <div class="item">
                                            <div class="content-image">
                                                <div class="image">
                                                    <img class="default" src="~@/assets/styles/images/Co-Ngoc.jpg" />
                                                </div>
                                            </div>
                                            <div class="content">
                                                <h4 class="title">Bà: Nguyễn Thị Ngọc</h4>
                                                <div class="important">
                                                    <p>Chủ tịch Hội đồng quản trị</p>
                                                    <p>Kiêm Trưởng văn phòng đại diện tại Hà Nội</p>
                                                </div>
                                                <div class="progress-content">
                                                    <div class="title">
                                                        <h5>Quá trình công tác</h5>
                                                    </div>
                                                    <p>
                                                        2008 – 2014: Thành viên HĐQT Công ty cổ phần Đầu tư xây dựng và phát
                                                        triển Trường Thành
                                                    </p>
                                                    <p>
                                                        2014 – Nay: Trưởng văn phòng đại diện tại Hà Nội của Công ty cổ phần
                                                        Đầu tư xây dựng và Phát triển Xuân Trường
                                                    </p>
                                                    <p>
                                                        04/2021 – 04/2023: Thành viên HĐQT Công ty cổ phần Đầu tư xây dựng
                                                        và Phát triển Xuân Trường
                                                    </p>
                                                    <p>
                                                        04/2021 – 04/2023: Thành viên HĐQT Công ty cổ phần Đầu tư xây dựng
                                                        và Phát triển Xuân Trường
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col cols="6">
                                        <div class="item">
                                            <div class="content-image">
                                                <div class="image">
                                                    <img class="default" src="~@/assets/styles/images/Co-Ngoc.jpg" />
                                                </div>
                                            </div>
                                            <div class="content">
                                                <h4 class="title">Bà: Nguyễn Thị Ngọc</h4>
                                                <div class="important">
                                                    <p>Chủ tịch Hội đồng quản trị</p>
                                                    <p>Kiêm Trưởng văn phòng đại diện tại Hà Nội</p>
                                                </div>
                                                <div class="progress-content">
                                                    <div class="title">
                                                        <h5>Quá trình công tác</h5>
                                                    </div>
                                                    <p>
                                                        2008 – 2014: Thành viên HĐQT Công ty cổ phần Đầu tư xây dựng và phát
                                                        triển Trường Thành
                                                    </p>
                                                    <p>
                                                        2014 – Nay: Trưởng văn phòng đại diện tại Hà Nội của Công ty cổ phần
                                                        Đầu tư xây dựng và Phát triển Xuân Trường
                                                    </p>
                                                    <p>
                                                        04/2021 – 04/2023: Thành viên HĐQT Công ty cổ phần Đầu tư xây dựng
                                                        và Phát triển Xuân Trường
                                                    </p>
                                                    <p>
                                                        04/2021 – 04/2023: Thành viên HĐQT Công ty cổ phần Đầu tư xây dựng
                                                        và Phát triển Xuân Trường
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col cols="6">
                                        <div class="item">
                                            <div class="content-image">
                                                <div class="image">
                                                    <img class="default" src="~@/assets/styles/images/Co-Ngoc.jpg" />
                                                </div>
                                            </div>
                                            <div class="content">
                                                <h4 class="title">Bà: Nguyễn Thị Ngọc</h4>
                                                <div class="important">
                                                    <p>Chủ tịch Hội đồng quản trị</p>
                                                    <p>Kiêm Trưởng văn phòng đại diện tại Hà Nội</p>
                                                </div>
                                                <div class="progress-content">
                                                    <div class="title">
                                                        <h5>Quá trình công tác</h5>
                                                    </div>
                                                    <p>
                                                        2008 – 2014: Thành viên HĐQT Công ty cổ phần Đầu tư xây dựng và phát
                                                        triển Trường Thành
                                                    </p>
                                                    <p>
                                                        2014 – Nay: Trưởng văn phòng đại diện tại Hà Nội của Công ty cổ phần
                                                        Đầu tư xây dựng và Phát triển Xuân Trường
                                                    </p>
                                                    <p>
                                                        04/2021 – 04/2023: Thành viên HĐQT Công ty cổ phần Đầu tư xây dựng
                                                        và Phát triển Xuân Trường
                                                    </p>
                                                    <p>
                                                        04/2021 – 04/2023: Thành viên HĐQT Công ty cổ phần Đầu tư xây dựng
                                                        và Phát triển Xuân Trường
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>
                    </b-row>
                </div>
                <div class="organizational">
                    <h3 class="title"> Sơ đồ tổ chức</h3>
                    <div class="images w-100">
                        <img class="default" src="~@/assets/styles/images/so_do_to_chuc.png" />
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import MenuScrollMixin from '@/mixin/MenuScroll'

export default {
    name: 'Introduce',
    components: { VueSlickCarousel },
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
  
}
</script>
<style lang="scss" scoped>
@import "~@/styles/page.scss";
</style>
