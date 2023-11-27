<template>
    <div class="sticky-footer">
        <main class="site-container site-container-elementor">
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
                            <div class="d-flex ">
                                <img src="~@/assets/styles/images/star.png" />
                                <h5>
                                    OUR PROJECTS
                                </h5>
                            </div>
                            <h3>Nhà máy Thủy điện Ngòi Hút 2</h3>
                        </div>
                    </div>
                </div>
                <div class="content-project-detail">
                    <b-row>
                        <b-col cols="6">
                            <div class="content-text">
                                <h5 class="title">Nhà máy Thủy điện Ngòi Hút 2</h5>
                                <div class="image">
                                    <img src="~@/assets/styles/images/3.jpg" alt="">
                                </div>
                                <div class="text">
                                    <p>Dự án Nhà máy thủy điện Ngòi Hút 2 là dự án đầu tiên của Xuân Trường, được khởi công
                                        xây
                                        dựng từ tháng 08 năm 2010, tại địa bàn xã Nậm Có, huyện Mù Căng Chải, tỉnh Yên Bái.
                                        Sau gần
                                        5 năm thi công xây dựng, dự án Nhà máy thủy điện Ngòi Hút 2 đã đi vào khai thác với
                                        công
                                        suất thiết kế là 48 MW với 02 tổ máy chính. Đập đầu mối là bức tường bê tông cốt
                                        thép cao
                                        47m, được tạo bởi trên 55.000m3 bê tông cốt thép, tạo nên một hồ chứa dung tích 3,66
                                        triệu
                                        m3, từ đó, nước được dẫn theo tuyến năng lượng dài 11Km, đường kính 3,6m, xuyên núi
                                        đá đen
                                        để đến nhà máy và trạm biến áp tại địa phận xã Châu Quế Thượng, huyên Văn Yên, tỉnh
                                        Yên Bái.
                                    </p>
                                    <p>Để phục vụ cho dự án, Xuân Trường đã mở mới 20Km đường nối tới quốc lộ 32 tại xã Tú
                                        Lệ,
                                        huyện Văn Chấn; xây dựng cầu vượt suối Ngòi Hút giúp người dân địa phương và công
                                        nhân thuận
                                        tiện đi lại; tạo ra 15Km đường dây chuyển tải 110Kv từ quốc lộ 32 nối tới công trình
                                        thi
                                        công.</p>
                                </div>
                                <div class="video">
                                    <img src="~@/assets/styles/images/Video-poster-Ngoi-Hut-2.png" alt="">
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="6">
                            <div class="project-infor">
                                <div class="site-project-info-single">
                                    <h2>Thông tin dự án</h2>
                                    <ul>
                                        <li>
                                            <label>Chủ đầu tư</label>
                                            <span>Công ty cổ phần Đầu tư xây dựng và phát triển Xuân Trường</span>
                                        </li>
                                        <li>
                                            <label>Vị trí</label>
                                            <span>xã Nậm Có, huyện Mù Căng Chải, tỉnh Yên Bái, Việt Nam</span>
                                        </li>
                                        <li>
                                            <label>Tổng kinh phí đầu tư</label>
                                            <span>1.051 tỷ đồng</span>
                                        </li>
                                        <li>
                                            <label>Công suất lắp máy</label>
                                            <span>48 MWp</span>
                                        </li>
                                        <li>
                                            <label>Sản lượng điện</label>
                                            <span>202 triệu KWh/ năm</span>
                                        </li>
                                        <li>
                                            <label>Tổng diện tích</label>
                                            <span>75 ha</span>
                                        </li>
                                        <li>
                                            <label>ĐV cung cấp thiết bị chính</label>
                                            <span>Công ty Flover Energy PVT Limited, Ấn độ</span>
                                        </li>
                                        <li>
                                            <label>Thời gian vận hành</label>
                                            <span>Quý I năm 2015</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </div>
                <div class="section-our-project">
                    <h3 class="title"> Dự án của chúng tôi</h3>
                    <div class="hight-default content-new w-100 d-block">
                        <VueSlickCarousel v-bind="settingMyProject" class="slick-section-about">
                            <div class="item-slick">
                                <b-row class="w-100">
                                    <b-col cols="6 ">
                                        <div class="item-new-big">
                                            <div class="image">
                                                <img src="~@/assets/styles/images/item4.jpg" />
                                            </div>
                                            <div class="text-new">
                                                <a href="#">
                                                    <h5 class="title">Nhà máy Thủy điện Ngòi Hút 2</h5>
                                                </a>
                                                <P>Liên quan tới suất đầu tư một số nguồn điện, chuyên gia Tạp
                                                    chí Năng lượng Việt Nam cập nhật thông tin về suất đầu tư
                                                    thuộc lĩnh vực điện khí, điện gió và điện mặt trời trên thế
                                                    giới hiện nay để bạn đọc cùng tham khảo. Suất đầu...</P>
                                                <div class="button-view">
                                                    <a class="sk-btn sk-btn-1" href="#">
                                                        <span>
                                                            <img class="default"
                                                                src="~@/assets/styles/images/arrow-blue-right.png" />
                                                            <img class="hover"
                                                                src="~@/assets/styles/images/arrow-white-right.png" />
                                                        </span>
                                                        Xem thêm
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col cols="3">
                                        <div class="smalls-new">
                                            <div class="small-new">
                                                <div class="images-new">
                                                    <img src="~@/assets/styles/images/item5.jpg" />
                                                </div>
                                                <div class="text-new">
                                                    <a href="#">
                                                        <h5 class="title">Nhà máy Thủy điện Ngòi Hút 2A</h5>
                                                    </a>
                                                    <div class="content-bottom">
                                                        <P>Dự án được khởi công vào năm 2015 và hoàn thành vào quý
                                                            IV năm 2016, với tổng mức đầu tư 292 tỷ đồng, được xây
                                                            dựng trên diện tích đất 13,5 ha, tại huyện Mù Căng Chải,
                                                            tỉnh Yên Bái. Nhà máy thủy điện Ngòi Hút 2A có 2 tổ máy,
                                                            công suất 8,4 MWp, cho sản lượng 30 triệu KWh/năm.</P>
                                                        <div class="button-view">
                                                            <a class="sk-btn sk-btn-1" href="#">
                                                                <span>
                                                                    <img class="default"
                                                                        src="~@/assets/styles/images/arrow-blue-right.png" />
                                                                    <img class="hover"
                                                                        src="~@/assets/styles/images/arrow-white-right.png" />
                                                                </span>
                                                                Xem thêm
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="small-new">
                                                <div class="images-new">
                                                    <img src="~@/assets/styles/images/item6.jpg" />
                                                </div>
                                                <div class="text-new">
                                                    <a href="#">
                                                        <h5 class="title">Trang trại Điện gió Phương Mai 1</h5>
                                                    </a>
                                                    <div class="content-bottom">
                                                        <P>Dự án Trang trại điện mặt trời Hồ Bầu Ngứ được khởi
                                                            công vào tháng 03/2018 lắp đặt gần 190.000 tấm pin năng
                                                            lượng mặt trời, đóng điện và hòa lưới điện quốc gia vào
                                                            quý IV năm 2019, với tổng vốn đầu tư 1.457 tỷ đồng. Dự
                                                            án xây dựng trên diện tích 75ha tại huyện Ninh Phước và
                                                            huyện Thuận Nam, tỉnh Ninh Thuận, với công suất thiết kế
                                                            là trên 61,77 MWp, cho sản lượng 98 triệu KWh/năm.</P>
                                                        <div class="button-view">
                                                            <a class="sk-btn sk-btn-1" href="#">
                                                                <span>
                                                                    <img class="default"
                                                                        src="~@/assets/styles/images/arrow-blue-right.png" />
                                                                    <img class="hover"
                                                                        src="~@/assets/styles/images/arrow-white-right.png" />
                                                                </span>
                                                                Xem thêm
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col cols="3">
                                        <div class="smalls-new">
                                            <div class="small-new">
                                                <div class="images-new">
                                                    <img src="~@/assets/styles/images/item7.jpg" />
                                                </div>
                                                <div class="text-new">
                                                    <a href="#">
                                                        <h5 class="title">Trang trại Điện mặt trời Hồ Bầu Ngứ</h5>
                                                    </a>
                                                    <div class="content-bottom">
                                                        <P>Dự án Trang trại điện mặt trời Hồ Bầu Ngứ được khởi
                                                            công vào tháng 03/2018 lắp đặt gần 190.000 tấm pin năng
                                                            lượng mặt trời, đóng điện và hòa lưới điện quốc gia vào
                                                            quý IV năm 2019, với tổng vốn đầu tư 1.457 tỷ đồng. Dự
                                                            án xây dựng trên diện tích 75ha tại huyện Ninh Phước và
                                                            huyện Thuận Nam, tỉnh Ninh Thuận, với công suất thiết kế
                                                            là trên 61,77 MWp, cho sản lượng 98 triệu KWh/năm.</P>
                                                        <div class="button-view">
                                                            <a class="sk-btn sk-btn-1" href="#">
                                                                <span>
                                                                    <img class="default"
                                                                        src="~@/assets/styles/images/arrow-blue-right.png" />
                                                                    <img class="hover"
                                                                        src="~@/assets/styles/images/arrow-white-right.png" />
                                                                </span>
                                                                Xem thêm
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="small-new">
                                                <div class="images-new">
                                                    <img src="~@/assets/styles/images/item8.jpg" />
                                                </div>
                                                <div class="text-new">
                                                    <a href="#">
                                                        <h5 class="title">Nhà máy Thuỷ điện Pá Hu</h5>
                                                    </a>
                                                    <div class="content-bottom">
                                                        <P>Dự án Nhà máy thủy điện Pá Hú, được tỉnh Yên Bái chấp
                                                            thuận đầu tư xây dựng vào tháng 03/2017 và đã đóng điện
                                                            vào tháng 10/2020, tại địa bàn huyện Trạm Tấu, tỉnh Yên
                                                            Bái, với 2 tổ máy chính, công suất thiết kế là 26 MWp,
                                                            cho sản lượng điện 90 triệu KWh/năm, và có tổng mức đầu
                                                            tư trên 1.024 tỷ đồng.</P>
                                                        <div class="button-view">
                                                            <a class="sk-btn sk-btn-1" href="#">
                                                                <span>
                                                                    <img class="default"
                                                                        src="~@/assets/styles/images/arrow-blue-right.png" />
                                                                    <img class="hover"
                                                                        src="~@/assets/styles/images/arrow-white-right.png" />
                                                                </span>
                                                                Xem thêm
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>
                        </VueSlickCarousel>
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
    props: {
    },
    name: 'MyProjectDetail',
    components: { VueSlickCarousel },
    methods: {
        goToProductDetail() {
            this.$router.push('/product-detail')
        }
    },
    data() {
        return {
            videoId: 'https://www.youtube.com/watch?v=WLc5-k3y_Po',
            value: '',
            context: null,
            slide: 0,
            sliding: null,
            settingMyProject: {
                dots: true,
                dotsClass: 'slick-dots custom-dot-class',
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 2,
                swipeToSlide: true
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
                'otsClass': 'slick-dots custom-dot-class'
            }

        }
    },
    mounted() {
    }
}
</script>
<style lang="scss" scoped>
.content-project-detail {
    padding: 50px 25px;

    .content-text {
        h5.title {
            font-size: 30px;
        }

        .image {
            max-width: 300px;
            margin: 20px 0;

            img {
                max-width: 100%;
                height: auto;
            }
        }

        .video {
            margin-top: 20px;
        }
    }

    .project-infor {
        .site-project-info-single {
            margin-top: unset;

            h2 {
                font-size: 35px;
                font-weight: bold;
            }

            ul {
                li {
                    display: flex;
                    list-style: none;
                    padding: 20px 0;
                    border-bottom: 1px #e5e5e5 solid;

                    label {
                        min-width: 250px;
                        margin: 0;
                        font-weight: bold;
                        color: #072c0b;
                        font-family: unset;
                    }

                    span {}
                }
            }
        }
    }
}
</style>
  