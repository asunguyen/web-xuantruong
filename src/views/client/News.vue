<template>
  <div class="container mt-4">
    <div class="row new-item mb-3">
      <div class="col-6 new-item-image px-0">
        <img
          class="w-100"
          src="https://e68fq8ewhqk.exactdn.com/wp-content/uploads/2022/08/ab430b84640ca652ff1d.jpg?strip=all&amp;lossy=1&amp;quality=77&amp;webp=77&amp;fit=150%2C150&amp;ssl=1"
        />
      </div>
      <div class="col-6 align-items-center d-flex">
        <div class="post-data">
          <div class="post-heading">
            <div class="post-heading-inner">
              <h2 class="entry-title">
                <router-link :to="{ path: '/news/detail' }">Chính sách phát triển AnCo</router-link>
              </h2>
              <div class="meta-post">
                <i class="el-icon-date"> </i>
                03/08/2022
                <span class="meta-divider px-1">/</span>
                <span class="views-count">
                  <i class="el-icon-view pr-1"></i>50</span
                >
                <span class="meta-divider px-1">/</span>
                <i class="el-icon-chat-square pr-1"></i>0
              </div>
            </div>
          </div>

          <div class="pt-2">
            Theo tiếng gọi của nhà nước về định hướng kết hợp y học cổ truyền và
            y học hiện đại để giải quyết bài toán chăm sóc sức khỏe, khám chữa
            bệnh toàn dân. Trước bối cảnh thị trường thiếu vắng các sản phẩm
            chất
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center py-3">
      <el-pagination
        :current-page.sync="currentPage"
        :page-size="10"
        layout="total, prev, pager, next, jumper"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      currentPage: 1,
    };
  },
  components: {},
};
</script>
<style lang="scss" scoped>
.new-item-image {
  overflow: hidden;
  &:hover img {
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;
  }
}
</style>
