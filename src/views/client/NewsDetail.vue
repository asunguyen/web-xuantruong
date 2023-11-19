<template>
  <div class="container mt-4">
    <div class="row">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
        <el-breadcrumb-item
          ><span style="cursor: pointer" @click="categoryType = ''"
            >Blog</span
          ></el-breadcrumb-item
        >
        <el-breadcrumb-item v-if="categoryType">{{
          categoryType
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row pt-4">
      <div class="col-9">
        <div class="post-heading">
          <h2 class="entry-title">Chính sách phát triển AnCo</h2>
          <div class="meta-post">
            <i class="el-icon-date"> </i>
            03/08/2022
            <span class="meta-divider">/</span><span></span>Posted by<a
              href=""
              title="Đăng bởi admin"
              rel="author"
              >admin</a
            >
            <span class="meta-divider px-1">/</span>
            <span class="views-count">
              <i class="el-icon-view pr-1"></i>50</span
            >
            <span class="meta-divider px-1">/</span>
            <i class="el-icon-chat-square pr-1"></i>0
          </div>
        </div>
        <div class="content-article entry-content">
          <p></p>

          <p>
            Theo tiếng gọi của nhà nước về định hướng kết hợp y học cổ truyền và
            y học hiện đại để giải quyết bài toán chăm sóc sức khỏe, khám chữa
            bệnh toàn dân. Trước bối cảnh thị trường thiếu vắng các sản phẩm
            chất lượng đó là nguyên nhân thôi thúc AnCo ra đời.
          </p>

          <p>
            Công ty Cổ phần dược phẩm AnCo là đơn vị hàng đầu trong việc nghiên
            cứu và sản xuất các sản phẩm thảo dược cho ngành Massage trị liệu.
          </p>

          <p>
            Với sứ mệnh gây dựng kinh tế địa phương bằng việc sử dụng thảo dược
            bản địa, chúng tôi luôn thấu hiểu những lợi thế mà mẹ thiên nhiên
            ban tặng cho đất nước và con người Việt Nam. Từ đó xây dựng hệ sinh
            thái các sản phảm thảo dược, công cụ dụng cụ phục vụ việc vận hành
            và triển khai kinh doanh Spa trị liệu một cách hiệu quả.
          </p>

          <p>Kế hoạch kinh doanh năm 2022 như sau:</p>

          <p>
            <em><strong>Mục tiêu 1:</strong></em
            >&nbsp;Đưa thảo dược đến gần hơn với gia đình người Việt Nam. Kiện
            toàn hệ sinh thái thảo dược ngành Massage trị liệu xây dựng vùng
            nguyên liệu 15ha; Đảm bảo duy trì ổn định và phát triển các giống
            loài bố mẹ; Từng bước phát triển vùng dược liệu lớn Ra mắt nhóm sản
            phẩm AnCo Food.
          </p>

          <p>
            <em><strong>Mục tiêu 2: về thị trường, thương hiệu:</strong></em
            >&nbsp;Doanh thu đạt 40 tỷ đồng, là thương hiệu Việt hàng đầu sản
            xuất các mặt hàng thảo dược phục vụ ngành Massage trị liệu, có ít
            nhất 3 sản phẩm xuất khẩu thị trường nước ngoài.
          </p>

          <p><strong>Ban hành chính sách đại lý:</strong></p>

          <p>
            <strong
              >– Quyền lợi khi trở thành đại lý chính thức của AnCo tại thị
              trường Việt Nam.</strong
            >
          </p>

          <p>
            + Được đảm bảo chất lượng, trách nhiệm khi là điểm bán hàng chính
            hãng.
          </p>

          <p>+ Được mua hàng với giá đại lý.</p>

          <p>+ Được cam kết ổn định giá cả, ổn định hàng hóa cung ứng.</p>

          <p>+ Được cam kết chất lượng vận chuyển và đổi trả</p>

          <p>
            + Hưởng các chính sách hỗ trợ bán hàng offline: Bảng biển, quầy kệ,
            đồng phục.
          </p>

          <p>
            + Hưởng các chính sách hỗ trợ bán hàng online: Thiết kế hình ảnh,
            thiết kế web, thiết kế page, zalo, nhận diện cửa hàng số trên các
            nền tảng của AnCo và HaDu Việt Nam.
          </p>

          <p>
            + Tham gia các chương trình đào tạo, hướng dẫn chuyên môn sản phẩm
            dịch vụ miễn phí.
          </p>

          <p>
            <strong
              ><em>– Chương trình hỗ trợ 300 nhà khởi nghiệp 2022</em></strong
            >
          </p>

          <p>+ Tặng giá để hàng: Cho các đơn hàng từ 5trđ trở lên</p>

          <p>+ Tặng biển vẫy: Cho các đơn hàng từ 10trđ trở lên</p>

          <p>+ Tặng website: Cho các đơn hàng từ 15trđ trở lên</p>

          <p>
            + Tặng địa chỉ số trên Gmap, grap: Cho các đơn hàng từ 20trđ trở lên
          </p>

          <p>+ Tặng biển chính: Cho các đơn hàng từ 30trđ trở lên</p>

          <p>
            – Triển khai bán hàng các kênh TMĐT cuối năm: Shoppe, Lazada, Sendo,
            Tiki,…
          </p>

          <p>– Ngoài ra triển khai các kênh bán hàng hợp tác với Streamer.</p>

          <p>Để biết thêm thông tin chi tiết vui lòng liên hệ Hadu Việt Nam:</p>

          <p>
            <strong><em>Facebook</em></strong
            >:&nbsp;<a
              href="https://www.facebook.com/nghiencuuphattrienmassagetrilieu.haduvn/"
              >https://www.facebook.com/nghiencuuphattrienmassagetrilieu.haduvn/</a
            >
          </p>

          <p>
            <strong><em>Website</em></strong
            >:&nbsp;<a href="https://hadushop.com/">https://hadushop.com/</a>
          </p>

          <p>
            <strong><em>Hotline</em></strong
            >: 02423.211.919
          </p>
        </div>
        <hr />
        <div class="post-heading">
          <h2 class="entry-title">Related posts</h2>
          <div class="row pt-2">
            <div class="col-4 mb-4">
              <div class="">
                <img
                  class="w-100"
                  src="https://e68fq8ewhqk.exactdn.com/wp-content/uploads/2022/08/ab430b84640ca652ff1d.jpg?strip=all&amp;lossy=1&amp;quality=77&amp;webp=77&amp;fit=150%2C150&amp;ssl=1"
                />
              </div>
              <div class="">
                <div class="post-data">
                  <div class="post-heading">
                    <div class="post-heading-inner">
                      <h5 class="entry-title pt-2">
                        <router-link :to="{ path: '/news/detail' }"
                          >Chính sách phát triển AnCo</router-link
                        >
                      </h5>
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
        <div class="post-heading">
          <h2 class="entry-title">Leave a reply</h2>
          <span class="pt-3">Bạn cần phải đăng nhập để gửi phản hồi</span>
        </div>
      </div>
      <div class="col-3 pl-4 pb-5">
        <div class="">
          <h5>PRODUCT CATEGORY</h5>
        </div>
        <hr />
        <div>
          <ul class="categories pl-0">
            <li
              class="categories-item"
              v-for="item in listCategory"
              :key="item"
            >
              <a @click="categoryType = item">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="pt-3">
          <h5>SEARCH</h5>
        </div>
        <hr />
        <div>
          <el-input
            placeholder="Search..."
            v-model="valueSearch"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="pt-5">
          <h5>PRODUCT TAGS</h5>
        </div>
        <hr />
        <div>
          <el-tag
            effect="plain"
            type="warning"
            class="mr-2 mb-2 product-tag"
            v-for="tag in tags"
            :key="tag.value"
            >{{ tag.label }}</el-tag
          >
        </div>
        <div class="pt-5">
          <h5>LATEST POSTS</h5>
        </div>
        <hr />
        <div class="row new-item mb-3 mx-0">
          <div class="col-3 new-item-image px-0">
            <img
              class="w-100 h-100"
              src="https://e68fq8ewhqk.exactdn.com/wp-content/uploads/2022/08/ab430b84640ca652ff1d.jpg?strip=all&amp;lossy=1&amp;quality=77&amp;webp=77&amp;fit=150%2C150&amp;ssl=1"
            />
          </div>
          <div class="col-9 align-items-center d-flex">
            <div class="post-data">
              <div class="post-heading">
                <div class="post-heading-inner">
                  <h6 class="entry-title">
                    <router-link :to="{ path: '/news/detail' }"
                      >Chính sách phát triển AnCo</router-link
                    >
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
            <img
              class="w-100 h-100"
              src="https://e68fq8ewhqk.exactdn.com/wp-content/uploads/2022/08/ab430b84640ca652ff1d.jpg?strip=all&amp;lossy=1&amp;quality=77&amp;webp=77&amp;fit=150%2C150&amp;ssl=1"
            />
          </div>
          <div class="col-9 align-items-center d-flex">
            <div class="post-data">
              <div class="post-heading">
                <div class="post-heading-inner">
                  <h6 class="entry-title">
                    <router-link :to="{ path: '/news/detail' }"
                      >Chính sách phát triển AnCo</router-link
                    >
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
            <img
              class="w-100 h-100"
              src="https://e68fq8ewhqk.exactdn.com/wp-content/uploads/2022/08/ab430b84640ca652ff1d.jpg?strip=all&amp;lossy=1&amp;quality=77&amp;webp=77&amp;fit=150%2C150&amp;ssl=1"
            />
          </div>
          <div class="col-9 align-items-center d-flex">
            <div class="post-data">
              <div class="post-heading">
                <div class="post-heading-inner">
                  <h6 class="entry-title">
                    <router-link :to="{ path: '/news/detail' }"
                      >Chính sách phát triển AnCo</router-link
                    >
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

export default {
  name: "NewsDetail",
  components: { VueSlickCarousel },
  data() {
    return {
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
    goToProductDetail() {
      this.$router.push("/product-detail");
    },
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
