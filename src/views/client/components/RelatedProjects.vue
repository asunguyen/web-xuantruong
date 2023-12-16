<template>
    <div class="section-our-project">
        <h3 class="title">Dự án nổi bật</h3>
        <div class="hight-default content-new w-100 d-block">
            <VueSlickCarousel v-bind="settingMyProject" class="slick-section-about">
                <div class="item-slick">
                    <b-row class="w-100">
                        <b-col cols="6 ">
                            <div class="item-new-big" v-for=" (item, index) in listPosts" :key="index" v-if="index == 0">
                                <div class="image">
                                    <img :src="item.thumbnail" />
                                </div>
                                <div class="text-new">
                                    <a href="#">
                                        <h5 class="title"  @click="handleDirectional(item._id)" >{{item.title}}</h5>
                                    </a>
                                    <P>{{item.description}}</P>
                                    <div class="button-view">
                                        <div class="sk-btn sk-btn-1" href="#" @click="handleDirectional(item._id)">
                                            <span>
                                                <img class="default" src="~@/assets/styles/images/arrow-blue-right.png" />
                                                <img class="hover" src="~@/assets/styles/images/arrow-white-right.png" />
                                            </span>
                                            Xem thêm
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="6">
                            <div class="smalls-new">
                                <div class="small-new"  v-for=" (item, index) in listPosts" :key="index" v-if="index !== 0 && index <=4">
                                    <div class="images-new">
                                        <img :src="item.thumbnail" />
                                    </div>
                                    <div class="text-new">
                                        <a href="#">
                                            <h5 class="title"  @click="handleDirectional(item._id)">{{item.title}}</h5>
                                        </a>
                                        <div class="content-bottom">
                                            <P>{{item.description}}</P>
                                            <div class="button-view">
                                                <div class="sk-btn sk-btn-1" @click="handleDirectional(item._id)">
                                                    <span>
                                                        <img class="default"
                                                            src="~@/assets/styles/images/arrow-blue-right.png" />
                                                        <img class="hover"
                                                            src="~@/assets/styles/images/arrow-white-right.png" />
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
        </div>
    </div>
</template>

<script>
import { getListAllPosts } from "@/api/posts";
import VueSlickCarousel from "vue-slick-carousel";
export default {
    name: "ListNewsfollowCategory",
    components: { VueSlickCarousel },
    props: {
        // listCategory: {
        //     type: Array,
        //     required: false,
        // },
    },
    data() {
        return {
            title: "",
            description: "",
            content: "",
            listPosts: [],
            thumbnail: "",
            options: [],
            categoryID: [],
            listCategory: [],
            listLoading: false,
            isShowModal: false,
            pagination: {
                totalItems: 0,
                currentPage: 1,
                pageSize: 100,
            },
            settingMyProject: {
                dots: true,
                dotsClass: 'slick-dots custom-dot-class',
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 2,
                swipeToSlide: true
            },
        };
    },
    created() {
        this.getListAllPosts();
    },
    methods: {
        handleDirectional(data) {
            this.$emit("directional", data);
        },
        getListAllPosts() {
            this.listLoading = true;
            const params = {
                page: this.pagination.currentPage - 1,
                size: this.pagination.pageSize,
            };
            getListAllPosts(params).then((response) => {
                this.pagination.totalItems = response.total;
                const arr = []
                for (const item of response.data) {
                    if (item.categoryID == "657d1f01498e2cea51189f14") {
                        arr.push(item)
                    }
                }
                this.listPosts = arr
                // this.listPosts = response.data;
                // this.listLoading = false;
                // this.$store.dispatch("new/getListnNews", this.listPosts);
              
            });
        },
        handleCurrentChange(page) {
            this.pagination.currentPage = page;
            this.getListAllPosts();
        },
        handleSizeChange(size) {
            this.pagination.pageSize = size;
            this.pagination.currentPage = 1;
            this.getListAllPosts();
        },
    },
};
</script>

<style lang="scss" scoped>
::v-deep {
    .el-upload {
        width: 100%;
    }

    .el-upload-dragger {
        width: 100%;
    }

    .smalls-new {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .small-new {
            width: 48%;
        }
    }
}
</style>
