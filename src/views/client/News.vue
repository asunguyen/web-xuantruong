<template>
  <div class="sticky-footer">
    <main class="site-container site-container-elementor">
      <div class="site-page-content">
        <div class="my-project news-list">
          <h3 class="title">Tin Tức</h3>
          <div>
            <ListNewsfollowCategory :listCategory="listCategory" @directional="goToDetailNew" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
// import {
//   getListPostsByUser,
// } from "@/api/posts";
import { getListCategory } from "@/api/category";
import ListNewsfollowCategory from "./components/ListNewsfollowCategory.vue";
export default {
  name: "News",
  components: {
    ListNewsfollowCategory
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
        pageSize: 10,
      },
    };
  },
  computed: {},
  created() {
    // this.getListPostsByUser();
    this.getListCategory();
  },
  methods: {
    goToDetailNew(data) {
      this.$router.push({
        path: `/news-detail${data}`,
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
        this.options = response.data.map((item) => ({
          label: item.title,
          value: item._id,
        }));
      });
    },
    // getListPostsByUser() {
    //   this.listLoading = true;
    //   const params = {
    //     page: this.pagination.currentPage - 1,
    //     size: this.pagination.pageSize,
    //   };
    //   getListPostsByUser(params).then((response) => {
    //     this.pagination.totalItems = response.total;
    //     this.listPosts = response.data;
    //     this.listLoading = false;
    //     // this.$store.dispatch("new/getListnNews", this.listPosts);
    //     console.log("this.listPosts", this.listPosts);
    //   });
    // },
    // handleCurrentChange(page) {
    //   this.pagination.currentPage = page;
    //   this.getListPostsByUser();
    // },
    // handleSizeChange(size) {
    //   this.pagination.pageSize = size;
    //   this.pagination.currentPage = 1;
    //   this.getListPostsByUser();
    // },
  },
  mounted() {},
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
