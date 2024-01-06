<template>
    <b-tabs content-class="mt-3">
        <div v-for="(item, index) in listCategory" :key="item._id">
            <b-tab :title="item.title" :active="index == 0">
                <div class="list_post" v-for="itemnews in listPosts" :key="itemnews.categoryID"
                    v-if="itemnews.categoryID === item._id">
                    <div class="content-new">
                        <!-- v-if="item._id == itemnews.categoryID" -->
                        <div class="big-new">
                            <div class="images-new">
                                <img class="default" :src="itemnews.thumbnail" />
                            </div>
                            <div class="text-new">
                                <h5 class="title">
                                    {{ itemnews.title }}
                                </h5>
                                <span>{{formatDateTime(itemnews.createdAt)}}</span>
                                <P>{{ itemnews.description }}</P>
                                <div class="button-view" @click="handleDirectional(itemnews._id)">
                                    <div class="sk-btn sk-btn-1">
                                        <span>
                                            <img class="default" src="~@/assets/styles/images/arrow-blue-right.png" />
                                            <img class="hover" src="~@/assets/styles/images/arrow-white-right.png" />
                                        </span>
                                        Xem thêm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-tab>
        </div>
    </b-tabs>
</template>

<script>
import { getListAllPosts } from "@/api/posts";
import moment from "moment";
export default {
    name: "ListNewsfollowCategory",
    props: {
        listCategory: {
            type: Array,
            required: false,
        },
    },
    data() {
        return {
            title: "",
            description: "",
            content: "",
            listPosts: null,
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
                this.listPosts = response.data;
                this.listLoading = false;
                // this.$store.dispatch("new/getListnNews", this.listPosts);
                // console.log("this.listPosts", this.listPosts);
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
        formatDateTime(data) {
            return moment(data).format("YYYY-MM-DD");
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
}
</style>
