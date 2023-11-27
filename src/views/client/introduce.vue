<template>
    <div class="sticky-footer">
        <main class="site-container site-container-elementor">
            <div class="site-page-content">
                <div class="section_ ">
                    <b-row>
                        <b-col class="p-0" cols="5">
                            <div class="banner-left">
                                <div class="text-content-section">
                                    <div class="title">
                                        <div class="d-flex">
                                            <h3>
                                                Về chúng tôi
                                            </h3>
                                        </div>
                                        <ul class="sk-custom-items">
                                            <li><a href="#"> Tổng quan
                                                    <img alt="" src="~@/assets/styles/images/arrow-white-right.png"></a>
                                            </li>
                                            <li><a href="#"> Lich sử phát triển
                                                    <img alt="" src="~@/assets/styles/images/arrow-white-right.png"></a>
                                            </li>
                                            <li><a href="#"> Sứ mệnh - tầm nhìn
                                                    <img alt="" src="~@/assets/styles/images/arrow-white-right.png"></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="7 hight-default">
                            <div class="content-right d-flex">
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
                            <div class="history">
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
                            <div class="section-sumenh">
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
                            <div class="ban-lanhdao">
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

export default {
    name: 'Introduce',
    components: { VueSlickCarousel },
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
    }
}
</script>
<style lang="scss" scoped>
.menu-header .menu_ ul li a {
    color: black;
}

.menu-header {
    position: unset;
}

.content-right {
    height: unset;

    .text {
        h3.title-big {
            color: rgba(7, 44, 11, .09);
            font-size: 60px;
            font-weight: 600;
            line-height: 83px;
        }
    }

}

.hight-default {
    padding: 160px 30px 100px;
    overflow-y: scroll;
    height: 100vh;
    display: block;
    background-color: #f5f5f5;
}

.section_  {
    padding-bottom: 30px;
    border-bottom: 1px solid #c3afaf85;

    .banner-left {
        .text-content-section {
            ul.sk-custom-items {
                li {
                    width: 70%;
                    margin-left: 0px;
                    &:hover {
                        img {
                            opacity: 1;
                            visibility: visible;
                        }

                        a {
                            border-color: #fff;
                            background: rgba(255, 255, 255, .1);
                        }

                    }

                    a {
                        display: block;
                        color: #fff;
                        padding: 9px 27px;
                        border: 2px transparent solid;
                        -webkit-border-radius: 25px;
                        border-radius: 25px;
                        -webkit-transition: all .3s ease-in-out;
                        transition: all .3s ease-in-out;
                    }

                    img {
                        display: inline-block;
                        float: right;
                        margin-left: 20px;
                        opacity: 0;
                        visibility: hidden;
                        -webkit-transition: all .3s ease-in-out;
                        transition: all .3s ease-in-out;
                        position: relative;
                        top: 5px;
                    }
                }
            }
        }
    }
}

.history {
    margin-top: 20px;

    .slick-slide[data-v-e4caeaf8] {
        padding-right: 30px;
    }

    .slick-initialized {
        .item {
            padding-top: 50px;
            margin-top: 20px;
            margin-right: 30px;
            position: relative;

            &::before {
                position: absolute;
                top: 0;
                left: 0;
                content: ".";
                overflow: hidden;
                width: 93%;
                height: 1px;
                background-color: #adadad;
            }

            h3.year {
                font-size: 60px;
                line-height: 73px;
                margin-bottom: 60px;
            }

            .sk-slider-video {
                .desc {
                    width: 170px;
                    min-width: 170px;
                    margin-right: 30px;
                    font-size: 14px;

                    p {
                        margin: 0 0 15px;

                    }
                }

                .image {
                    width: 30px;

                    img {
                        display: block;
                        width: 100%;
                    }
                }
            }
        }
    }
}

.ban-lanhdao {
    padding: 100px 0 70px;

    .row {
        div:first-child {
            display: block;

            .item {
                display: -webkit-box;
                width: 100%;

                .content-image {
                    width: 30%;

                    // margin: 0 45px;
                    .image {
                        width: 200px;
                        height: 250px;
                    }

                }

                .content {
                    padding-left: 20px;
                    width: 60%;

                    h4.title {
                        margin-top: 0;
                    }
                }
            }
        }
    }

    .item {
        display: block;
        margin-bottom: 70px;

        .image {
            width: 200px;
            height: 250px;

            img {
                vertical-align: middle;
                display: inline-block;
                width: 100%;
                height: 100%;
            }
        }

        .content {
            h4.title {
                font-size: 20px;
                font-weight: 600;
                margin-top: 15px;
            }

            .important {
                font-style: italic;
                font-size: 16px;
                padding: 10px 0;

                p {
                    margin-bottom: 0;

                }
            }

            .progress-content {
                display: block;

                h5.title {
                    font-size: 16px;
                    font-weight: 800;
                }

                p {}
            }
        }
    }

}
</style>
