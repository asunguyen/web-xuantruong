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
                                                Tuyển dụng
                                            </h3>
                                        </div>
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
                            <div class="recruitment">
                                <div class="title">
                                    <h3 class="title">Vị trí tuyển dụng</h3>
                                </div>
                                <div class="sk-recruitments sk-recruitments-paginate">
                                    <div class="sk-items" data-limit="5" data-order="ASC" data-order-by="id">
                                        <div class="item-recruitment">
                                            <h3 class="title-recruitment">
                                                <a href="#"
                                                    title="">
                                                    Chuyên viên Quan hệ cổ đông và nhà đầu tư </a>
                                            </h3>
                                            <ul class="recruitment-info">
                                                <li class="recruitment-location"><img alt="" src="~@/assets/styles/images/icon-map.png">Số
                                                    29 Nguyễn Quốc Trị, phường Trung Hòa, quận Cầu Giấy, Hà Nội</li>
                                                <li class="recruitment-salary"><img alt="" src="~@/assets/styles/images/icon-price.png">thỏa
                                                    thuận</li>
                                                <li class="recruitment-deadline">Hạn nộp CV: 27/09/2020</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </b-col>
                    </b-row>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import MenuScrollMixin from '@/mixin/MenuScroll'

export default {
    name: 'Introduce',
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

.section_ {
    border-bottom: unset;
}

.section-our-project {
    margin-top: 50px;
}
.recruitment{
    margin-top: 50px;
    h3.title{
        margin-bottom: 30px;
    }
    .title-recruitment{
        a{
            color: black;
        }
    }
}

.slick-section-about .slick-slide a img {
    height: unset
}</style>
