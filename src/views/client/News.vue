<template>
  <div class="sticky-footer">
    <main class="site-container site-container-elementor">
      <div class="site-page-content">
        <div class="my-project news-list">
          <h3 class="title"> Tin Tức</h3>
          <div>
            <b-tabs content-class="mt-3">
              <div v-for="item, index in listCategory" :key="item._id">
                <b-tab :title="item.title" :active="index == 0">
                  <div class="list_post" v-for="itemnews in listPosts" :key="itemnews.categoryID" v-if="itemnews.categoryID === item._id">
                    <div class="content-new">
                      <!-- v-if="item._id == itemnews.categoryID" -->
                          <div class="big-new">
                            <div class="images-new">
                              <img class="default"
                                :src="itemnews.thumbnail" />
                            </div>
                            <div class="text-new">
                              <h5 class="title">
                                {{ itemnews.title }}
                              </h5>
                              <span>17/10/2023</span>
                              <P>{{itemnews.description}}</P>
                              <div class="button-view">
                                <a class="sk-btn sk-btn-1" href="#">
                                  <span>
                                    <img class="default" src="~@/assets/styles/images/arrow-blue-right.png" />
                                    <img class="hover" src="~@/assets/styles/images/arrow-white-right.png" />
                                  </span>
                                  Xem thêm
                                </a>
                              </div>
                            </div>
                          </div>
                        <!-- <div v-if="!listPosts[0]._id">
                          <b-col cols="3" v-for="itemnews in listPosts" :key="itemnew.categoryID">
                            <div class="smalls-new">
                              <div class=" small-new">
                                <div class="images-new">
                                  <img src="~@/assets/styles/images/Dien-MT-TQ-1.jpg" />
                                </div>
                                <div class="text-new">
                                  <h5 class="title">
                                    {{ itemnew.title }}
                                  </h5>
                                  <span>17/10/2023</span>
                                  <div class="content-bottom">
                                    <P>Liên quan tới suất đầu tư một số nguồn điện, chuyên
                                      gia Tạp chí Năng lượng Việt Nam cập nhật thông tin
                                      về suất đầu tư thuộc lĩnh vực điện khí, điện gió và
                                      điện mặt trời trên thế giới hiện nay để bạn đọc cùng
                                      tham khảo. Suất đầu...</P>
                                    <div class="button-view">
                                      <a class="sk-btn sk-btn-1" href="#">
                                        <span>
                                          <img class="default" src="~@/assets/styles/images/arrow-blue-right.png" />
                                          <img class="hover" src="~@/assets/styles/images/arrow-white-right.png" />
                                        </span>
                                        Xem thêm
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </b-col>
                        </div> -->
                    </div>
                  </div>
                </b-tab>
              </div>
            </b-tabs>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import {
  getListPostsByUser,
  createPosts,
  updatePosts,
  deletePosts,
} from "@/api/posts";
import { getListCategory } from "@/api/category";
export default {
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
        pageSize: 10,
      }
    };
  },
  computed: {
  },
  created() {
    this.getListPostsByUser();
    this.getListCategory();
  },
  methods: {
    getListCategory() {
      const params = {
        page: 0,
        size: 10000,
      };
      getListCategory(params).then((response) => {
        this.listCategory = response.data;
        console.log('this.listCategory', this.listCategory)
        this.options = response.data.map((item) => ({
          label: item.title,
          value: item._id,
        }));
      });
    },
    getListPostsByUser() {
      this.listLoading = true;
      const params = {
        page: this.pagination.currentPage - 1,
        size: this.pagination.pageSize,
      };
      getListPostsByUser(params).then((response) => {
        this.pagination.totalItems = response.total;
        this.listPosts = response.data;
        this.listLoading = false;
        // this.$store.dispatch("new/getListnNews", this.listPosts);
        console.log('this.listPosts', this.listPosts)
      });
    },
    handleCurrentChange(page) {
      this.pagination.currentPage = page;
      this.getListPostsByUser();
    },
    handleSizeChange(size) {
      this.pagination.pageSize = size;
      this.pagination.currentPage = 1;
      this.getListPostsByUser();
    }
  },
};
</script>
<style lang="scss" scoped>
.my-project {
  margin-top: 70px;

  h3.title {
    margin-left: 15px;
  }
}

.content-new .smalls-new .small-new {
  height: 560px;
}
</style>