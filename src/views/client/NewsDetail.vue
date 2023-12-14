<template>
  <div class="container mt-4">
    <div class="row">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
        <el-breadcrumb-item><span style="cursor: pointer" @click="categoryType">Tin tức</span></el-breadcrumb-item>
        <el-breadcrumb-item v-if="categoryType">{{
          categoryType
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row pt-4">
      <div class="col-9">
        <div class="post-heading">
          <h2 class="entry-title">{{ dataPostsDetail.title }}</h2>
          <div class="meta-post">
            <i class="el-icon-date"> </i>
            {{ formatDateTime(dataPostsDetail.createdAt)}}
            <!-- <span class="meta-divider">/</span><span></span>Posted by<a href="" title="Đăng bởi admin"
              rel="author">admin</a>
            <span class="meta-divider px-1">/</span>
            <span class="views-count">
              <i class="el-icon-view pr-1"></i>50</span>
            <span class="meta-divider px-1">/</span>
            <i class="el-icon-chat-square pr-1"></i>0 -->
          </div>
        </div>
        <div class="content-article entry-content" v-html="dataPostsDetail.content">
        </div>
        <hr />
        <div class="post-heading">
          <h2 class="entry-title">Related posts</h2>
          <div class="row pt-2">
            <div class="col-4 mb-4">
              <div class="">
                <img class="w-100"
                  src="https://e68fq8ewhqk.exactdn.com/wp-content/uploads/2022/08/ab430b84640ca652ff1d.jpg?strip=all&amp;lossy=1&amp;quality=77&amp;webp=77&amp;fit=150%2C150&amp;ssl=1" />
              </div>
              <div class="">
                <div class="post-data">
                  <div class="post-heading">
                    <div class="post-heading-inner">
                      <h5 class="entry-title pt-2">
                        <router-link :to="{ path: '/news/detail' }">Chính sách phát triển AnCo</router-link>
                      </h5>
                      <div class="meta-post">
                        <i class="el-icon-date"> </i>
                        03/08/2022
                        <span class="meta-divider px-1">/</span>
                        <span class="views-count">
                          <i class="el-icon-view pr-1"></i>50</span>
                        <span class="meta-divider px-1">/</span>
                        <i class="el-icon-chat-square pr-1"></i>0
                      </div>
                    </div>
                  </div>

                  <div class="pt-2">
                    Theo tiếng gọi của nhà nước về định hướng kết hợp y học cổ
                    truyền và y học hiện đại để giải quyết bài toán chăm sóc sức
                    khỏe, khám chữa bệnh toàn dân
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
            <li class="categories-item" v-for="item in listCategory" :key="item">
              <a @click="categoryType = item">{{ item }}</a>
            </li>
          </ul>
        </div>
        <!-- <div class="pt-3">
          <h5>SEARCH</h5>
        </div> -->
        <!-- <hr />
        <div>
          <el-input placeholder="Search..." v-model="valueSearch" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div> -->
        <!-- <div class="pt-5">
          <h5>PRODUCT TAGS</h5>
        </div>
        <hr />
        <div>
          <el-tag effect="plain" type="warning" class="mr-2 mb-2 product-tag" v-for="tag in tags" :key="tag.value">{{
            tag.label }}</el-tag>
        </div> -->
        <div class="pt-5">
          <h5>LATEST POSTS</h5>
        </div>
        <hr />
        <div class="row new-item mb-3 mx-0">
          <div class="col-3 new-item-image px-0">
            <img class="w-100 h-100"
              src="https://e68fq8ewhqk.exactdn.com/wp-content/uploads/2022/08/ab430b84640ca652ff1d.jpg?strip=all&amp;lossy=1&amp;quality=77&amp;webp=77&amp;fit=150%2C150&amp;ssl=1" />
          </div>
          <div class="col-9 align-items-center d-flex">
            <div class="post-data">
              <div class="post-heading">
                <div class="post-heading-inner">
                  <h6 class="entry-title">
                    <router-link :to="{ path: '/news/detail' }">Chính sách phát triển AnCo</router-link>
                  </h6>
                  <div class="meta-post">
                    <i class="el-icon-date"> </i>
                    03/08/2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row new-item mb-3 mx-0">
          <div class="col-3 new-item-image px-0">
            <img class="w-100 h-100"
              src="https://e68fq8ewhqk.exactdn.com/wp-content/uploads/2022/08/ab430b84640ca652ff1d.jpg?strip=all&amp;lossy=1&amp;quality=77&amp;webp=77&amp;fit=150%2C150&amp;ssl=1" />
          </div>
          <div class="col-9 align-items-center d-flex">
            <div class="post-data">
              <div class="post-heading">
                <div class="post-heading-inner">
                  <h6 class="entry-title">
                    <router-link :to="{ path: '/news/detail' }">Chính sách phát triển AnCo</router-link>
                  </h6>
                  <div class="meta-post">
                    <i class="el-icon-date"> </i>
                    03/08/2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row new-item mb-3 mx-0">
          <div class="col-3 new-item-image px-0">
            <img class="w-100 h-100"
              src="https://e68fq8ewhqk.exactdn.com/wp-content/uploads/2022/08/ab430b84640ca652ff1d.jpg?strip=all&amp;lossy=1&amp;quality=77&amp;webp=77&amp;fit=150%2C150&amp;ssl=1" />
          </div>
          <div class="col-9 align-items-center d-flex">
            <div class="post-data">
              <div class="post-heading">
                <div class="post-heading-inner">
                  <h6 class="entry-title">
                    <router-link :to="{ path: '/news/detail' }">Chính sách phát triển AnCo</router-link>
                  </h6>
                  <div class="meta-post">
                    <i class="el-icon-date"> </i>
                    03/08/2022
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
  getPostsDetail
} from "@/api/posts";
import moment from "moment";
export default {
  // const newsDetailId = this.$route.params.id;  
  name: "NewsDetail",
  components: { VueSlickCarousel },
  data() {
    return {
      newsDetailId: null,
      dataPostsDetail: [],
      categoryType: "",
      listCategory: [
        "Chính sách",
        "CHÍNH SÁCH PHÂN PHỐI",
        "Organic",
        "Trang thiết bị Spa",
      ],
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
      valueSearch: "",
    };
  },

  computed: {},
  methods: {
    formatDateTime(data) {
      return moment(data).format("YYYY-MM-DD HH:mm");
    },
    getPostsDetail(param) {
      getPostsDetail(param).then((response) => {
        this.dataPostsDetail = response.data;
        console.log('this.dataPostsDetail', this.dataPostsDetail)
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
</style>
