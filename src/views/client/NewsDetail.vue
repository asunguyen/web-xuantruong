<template>
  <div class="container mt-4">
    <div class="row">
      <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
        <el-breadcrumb-item><span style="cursor: pointer" @click="categoryType">Tin tức</span></el-breadcrumb-item>
        <el-breadcrumb-item v-if="categoryType">{{
          categoryType
        }}</el-breadcrumb-item>
      </el-breadcrumb> -->
    </div>
    <div class="row pt-4">
      <div class="col-9">
        <div class="post-heading">
          <h2 class="entry-title">{{ dataPostsDetail.title }}</h2>
          <div class="meta-post">
            <i class="el-icon-date"> </i>
            {{ formatDateTime(dataPostsDetail.createdAt) }}
          </div>
        </div>
        <div class="content-article entry-content" v-html="dataPostsDetail.content">
        </div>
        <hr />
        <div class="post-heading">
          <h2 class="entry-title">Related posts</h2>
          <div class="row pt-2">
            <div class="col-4 mb-4" v-for="item in listRelatedPosts" :key="item._id" >
              <div class="image-related ">
                <img class="w-100 h-100"
              :src="item.thumbnail" />
              </div>
              <div class="">
                <div class="post-data">
                  <div class="post-heading">
                    <div class="post-heading-inner">
                      <h5 class="entry-title pt-2" @click="goToDetailNew(item._id)">
                        {{ item.title }}
                      </h5>
                      <div class="meta-post">
                        <i class="el-icon-date"> </i>
                        {{formatDateTime(item.updatedAt)}}
                      </div>
                    </div>
                  </div>

                  <div class="pt-2">
                   {{item.description}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <!-- <div class="post-heading">
          <h2 class="entry-title">Leave a reply</h2>
          <span class="pt-3">Bạn cần phải đăng nhập để gửi phản hồi</span>
        </div> -->
      </div>
      <div class="col-3 pl-4 pb-5">
        <div class="">
          <h5>Danh mục tin tức</h5>
        </div>
        <hr />
        <div>
          <ul class="categories pl-0">
            <li class="categories-item" v-for="item in listCategory" :key="item._id">
              <p @click="goToCategoryNews(item._id)">{{ item.title }}</p>
            </li>
          </ul>
        </div>
        <div class="pt-5">
          <h5>LATEST POSTS</h5>
        </div>
        <hr />
        <div class="row new-item mb-3 mx-0" v-for="item in listLatestPosts" :key="item._id">
          <div class="col-3 new-item-image px-0">
            <img class="w-100 h-100"
              :src="item.thumbnail" />
          </div>
          <div class="col-9 align-items-center d-flex">
            <div class="post-data">
              <div class="post-heading">
                <div class="post-heading-inner">
                  <h6 class="entry-title" @click="goToDetailNew(item._id)">
                    {{ item.title }}
                  </h6>
                  <div class="meta-post">
                    <i class="el-icon-date"> </i>
                    {{formatDateTime(item.updatedAt)}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import {
  getPostsDetail, getListAllPosts
} from "@/api/posts";
import { getListCategory } from "@/api/category";
import moment from "moment";
export default {
  name: "NewsDetail",
  components: { VueSlickCarousel },
  data() {
    return {
      newsDetailId: null,
      dataPostsDetail: [],
      categoryType: "",
      listCategory: [],
      listLatestPosts: [],
      listRelatedPosts: [],
      valueRate: null,
      tags: [
        {
          value: "Option1",
          label: "Biển hiệu spa",
        },
        {
          value: "Option2",
          label: "Chi phí mở spa",
        },
        {
          value: "Option3",
          label: "Chạy ads",
        },
        {
          value: "Option4",
          label: "Chạy quảng cáo",
        },
        {
          value: "Option5",
          label: "Chụp ảnh spa",
        },
        {
          value: "Option6",
          label: "Content facebook",
        },
        {
          value: "Option7",
          label: "Content spa",
        },
        {
          value: "Option8",
          label: "Dưỡng sinh",
        },
      ],
      pagination: {
        totalItems: 0,
        currentPage: 1,
        pageSize: 10,
      },
      valueSearch: "",
    };
  },

  computed: {},
  created() {
    this.getListCategory()
    this.getListAllPosts();
  },
  methods: {
    formatDateTime(data) {
      return moment(data).format("YYYY-MM-DD");
    },
    goToDetailNew(data) {
      this.$router.push({
        path: `/news-detail${data}`,
      });
    },
    goToCategoryNews(data) {
      this.$router.push({
        path: `/news`,
      });
    },
    getPostsDetail(param) {
      getPostsDetail(param).then((response) => {
        this.dataPostsDetail = response.data;
      });
    },
    getListCategory() {
      const params = {
        page: 0,
        size: 10000,
      };
      getListCategory(params).then((response) => {
        const categoryNews = [
          "657530d1498e2cea511898e1",
          "657530f7498e2cea511898e5",
          "65753106498e2cea511898e9",
          "65753120498e2cea511898ed",
        ];
        for (const i of response.data) {
          for (const j of categoryNews) {
            if (j == i._id) {
              this.listCategory.push(i);
            }
          }
        }
        console.log("this.listCategory", this.listCategory);
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
        console.log('response.data', response.data)
        this.listLatestPosts = response.data.slice(0, 3);
        this.listRelatedPosts = response.data.slice(-3);
        console.log(this.listLatestPosts, 'this.listLatestPosts')
        this.listLoading = false;
      });
    },

  },
  mounted() {
    // newsDetailId = this.$route.params
    this.newsDetailId = this.$route.params.id
    this.getPostsDetail(this.newsDetailId)
  },

};
</script>
<style lang="scss" scoped>
.list-product {
  margin-left: -30px;
  margin-right: -30px;
}

.image {
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
}
.image-related {
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
}

.product-image {
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
}

.categories {
  &-item {
    cursor: pointer;
    list-style: none;
    color: #888;
    padding-top: 10px;

    &:hover {
      color: #e98c13;
    }
  }
}

.icon-show-hide {
  cursor: pointer;
}

::v-deep {
  .slick-next {
    right: 2px;
  }

  .slick-next:before {
    color: gray;
  }

  .slick-prev {
    left: 2px;
    z-index: 1;
  }

  .slick-prev:before {
    color: gray;
  }
}

.product-tag {
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #e98c13;
    color: #fff;
  }
}

.categories-item {
  p {
    text-transform: uppercase;
  }
}
</style>
