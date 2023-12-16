<template>
    <div class="sticky-footer">
      <main class="site-container site-container-elementor">
        <div class="site-page-content">
          <div class="my-project news-list">
            <h3 class="title">Dự án của chúng tôi</h3>
            <div>
              <ListNewsfollowCategory :listCategory="listCategory" @directional="goToDetailNew" />
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  <script>
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
        console.log(data, "data");
        this.$router.push({
          path: `/myproject-detail${data}`,
        });
      },
      getListCategory() {
        const params = {
          page: 0,
          size: 10000,
        };
        getListCategory(params).then((response) => {
          const categoryNews = [
            "657b306a498e2cea51189da7",
            "657b305a498e2cea51189da3",
            "657b3041498e2cea51189d9f",
          ];
          for (const i of response.data) {
            for (const j of categoryNews) {
              if (j == i._id) {
                this.listCategory.push(i);
              }
            }
          }
        });
      },
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
  