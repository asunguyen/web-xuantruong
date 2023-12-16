<template>
    <div class="sticky-footer">
        <main class="site-container site-container-elementor">
            <div class="site-page-content">
                <div class="banner-header">
                    <VueSlickCarousel v-bind="bannerHome">
                        <div class="slick-banner">
                            <img class="hover" :src="dataPostsDetail.thumbnail" />
                        </div>
                    </VueSlickCarousel>
                    <div class="text-content text-content-section">
                        <div class="title">
                            <div class="d-flex">
                                <img src="~@/assets/styles/images/star.png" />
                                <h5>OUR PROJECTS</h5>
                            </div>
                            <h3>Nhà máy Thủy điện Ngòi Hút 2</h3>
                        </div>
                    </div>
                </div>
                <div class="content-project-detail">
                    <b-row>
                        <b-col cols="6">
                            <div class="content-text" v-html="dataPostsDetail.content">
                            </div>
                        </b-col>
                        <b-col cols="6">
                            <div class="project-infor">
                                <div class="site-project-info-single">
                                    <h2>Thông tin dự án</h2>
                                    <ul>
                                        <li>
                                            <label>Chủ đầu tư</label>
                                            <span>Công ty cổ phần Đầu tư xây dựng và phát triển Xuân
                                                Trường</span>
                                        </li>
                                        <li>
                                            <label>Vị trí</label>
                                            <span>xã Nậm Có, huyện Mù Căng Chải, tỉnh Yên Bái, Việt
                                                Nam</span>
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
                <RelatedProjects @directional="goToDetailNew" />
            </div>
        </main>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { getPostsDetail } from "@/api/posts";
import RelatedProjects from "./components/RelatedProjects.vue";
import moment from "moment";
export default {
    // const newsDetailId = this.$route.params.id;
    name: "NewsDetail",
    components: { VueSlickCarousel, RelatedProjects },
    data() {
        return {
            newsDetailId: this.$route.params.id,
            dataPostsDetail: [],
            categoryType: "",
            listCategory: [
                "Chính sách",
                "CHÍNH SÁCH PHÂN PHỐI",
                "Organic",
                "Trang thiết bị Spa",
            ],
            valueRate: null,
            valueSearch: "",
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
            },
        };
    },

    computed: {},
    methods: {
        goToDetailNew(data) {
            this.getPostsDetail(data);
            this.$router.push({
                path: `/myproject-detail${data}`,
            });

        },
        formatDateTime(data) {
            return moment(data).format("YYYY-MM-DD HH:mm");
        },
        getPostsDetail(param) {
            getPostsDetail(param).then((response) => {
                this.dataPostsDetail = response.data;
                // console.log("this.dataPostsDetail", this.dataPostsDetail);
            });
        },
    },
    mounted() {
        // newsDetailId = this.$route.params
        this.newsDetailId = this.$route.params.id;
        this.getPostsDetail(this.newsDetailId);
    },
};
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
        }

        img {
            max-width: 100%;
            height: auto;
            margin: 10px 0px;
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
