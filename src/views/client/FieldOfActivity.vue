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
                        <b-col cols="7 hight-default sections">
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
                <div class="section-our-project">
                    <h3 class="title"> Dự án liên quan</h3>
                    <div class="hight-defaultx content-new w-100 d-block">
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
                                                        <P>Dự án được khởi công vào năm 2015 và hoàn thành vào
                                                            quý
                                                            IV năm 2016, với tổng mức đầu tư 292 tỷ đồng, được
                                                            xây
                                                            dựng trên diện tích đất 13,5 ha, tại huyện Mù Căng
                                                            Chải,
                                                            tỉnh Yên Bái. Nhà máy thủy điện Ngòi Hút 2A có 2 tổ
                                                            máy,
                                                            công suất 8,4 MWp, cho sản lượng 30 triệu KWh/năm.
                                                        </P>
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
                                                            công vào tháng 03/2018 lắp đặt gần 190.000 tấm pin
                                                            năng
                                                            lượng mặt trời, đóng điện và hòa lưới điện quốc gia
                                                            vào
                                                            quý IV năm 2019, với tổng vốn đầu tư 1.457 tỷ đồng.
                                                            Dự
                                                            án xây dựng trên diện tích 75ha tại huyện Ninh Phước
                                                            và
                                                            huyện Thuận Nam, tỉnh Ninh Thuận, với công suất
                                                            thiết kế
                                                            là trên 61,77 MWp, cho sản lượng 98 triệu KWh/năm.
                                                        </P>
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
                                                        <h5 class="title">Trang trại Điện mặt trời Hồ Bầu Ngứ
                                                        </h5>
                                                    </a>
                                                    <div class="content-bottom">
                                                        <P>Dự án Trang trại điện mặt trời Hồ Bầu Ngứ được khởi
                                                            công vào tháng 03/2018 lắp đặt gần 190.000 tấm pin
                                                            năng
                                                            lượng mặt trời, đóng điện và hòa lưới điện quốc gia
                                                            vào
                                                            quý IV năm 2019, với tổng vốn đầu tư 1.457 tỷ đồng.
                                                            Dự
                                                            án xây dựng trên diện tích 75ha tại huyện Ninh Phước
                                                            và
                                                            huyện Thuận Nam, tỉnh Ninh Thuận, với công suất
                                                            thiết kế
                                                            là trên 61,77 MWp, cho sản lượng 98 triệu KWh/năm.
                                                        </P>
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
                                                            thuận đầu tư xây dựng vào tháng 03/2017 và đã đóng
                                                            điện
                                                            vào tháng 10/2020, tại địa bàn huyện Trạm Tấu, tỉnh
                                                            Yên
                                                            Bái, với 2 tổ máy chính, công suất thiết kế là 26
                                                            MWp,
                                                            cho sản lượng điện 90 triệu KWh/năm, và có tổng mức
                                                            đầu
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
.section_{
    border-bottom: unset;
}
// .hight-default{
//     background: unset;
// }
.section-our-project{
    margin-top: 50px;
}
.slick-section-about .slick-slide a img {
    height:unset
}
</style>
