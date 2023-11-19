<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-4">
        <VueSlickCarousel ref="c1" :asNavFor="$refs.c2" :focusOnSelect="true">
          <div
            class="image image-background"
            :style="{
              'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
            }"
          ></div>
          <div
            class="image image-background"
            :style="{
              'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
            }"
          ></div>
          <div
            class="image image-background"
            :style="{
              'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
            }"
          ></div>
        </VueSlickCarousel>
        <VueSlickCarousel
          ref="c2"
          :asNavFor="$refs.c1"
          :slidesToShow="3"
          :focusOnSelect="true"
        >
          <div
            class="image-below image-background"
            :style="{
              'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
            }"
          ></div>
          <div
            class="image-below image-background"
            :style="{
              'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
            }"
          ></div>
          <div
            class="image-below image-background"
            :style="{
              'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
            }"
          ></div>
        </VueSlickCarousel>
      </div>
      <div class="col-8">
        <h3>Gối thảo dược</h3>
        <span class="text-muted"> 280.000đ - 290.000đ</span>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="Ảnh" width="120">
            <template slot-scope="scope">
              <div
                class="image-table image-background"
                :style="{
                  'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
                }"
              ></div>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="Loại" width="180">
          </el-table-column>
          <el-table-column prop="address" label="Giá"> </el-table-column>
          <el-table-column prop="address" label="Số lượng"> </el-table-column>
          <el-table-column prop="address" label="Hành Động">
            <el-button class="" type="warning" plain>Mua ngay</el-button>
          </el-table-column>
        </el-table>
        <div class="product_meta pt-3">
          <span class="">SKU: <span class="text-muted">N/A</span></span>

          <div class="pt-2">
            <span class=""
              >Categories:
              <a
                href="https://hadushop.com/product-category/massage-tri-lieu/"
                rel="tag"
                >Massage trị liệu</a
              >,
              <a
                href="https://hadushop.com/product-category/san-pham-thao-duoc/"
                rel="tag"
                >Thảo dược</a
              ></span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-4"></div>
    <div>
      <h4>MÔ TẢ</h4>

      <div class="tab-content-scroll">
        <p><strong>CHÍNH SÁCH BÁN HÀNG:</strong></p>
        <p>– Giá đại lý áp dụng cho các đối tượng sau:</p>
        <p>+ Đại lý mới có đơn hàng lần đầu từ 5.000.000VNĐ</p>
        <p>
          + Học viên đã đăng kí khóa học tại HaDu Việt Nam
          <strong
            ><a href="https://haduvietnam.edu.vn/"
              >(Tham khảo tại đây)</a
            ></strong
          >
        </p>
        <p>– Giá bán lẻ: 480.000VNĐ/size 24*34cm; 430.000VNĐ/size 20*27cm</p>
        <p>+ Áp dụng cho các đối tượng còn lại</p>
        <p><strong>THÀNH PHẦN</strong></p>
        <p>
          <span
            data-sheets-value='{"1":2,"2":"- Ngải cứu, quế, gừng, lá lốt, thiên niên kiện, ngũ gia bì, kê huyết đằng, tang kí sinh, mộc qua, xuyên khung, thạch xương bồ, thủ phục linh, địa liền, dây đau xương, hạt muồng..."}'
            data-sheets-userformat='{"2":15293,"3":{"1":0},"5":{"1":[{"1":2,"2":0,"5":{"1":2,"2":0}},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]},"6":{"1":[{"1":2,"2":0,"5":{"1":2,"2":0}},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]},"7":{"1":[{"1":2,"2":0,"5":{"1":2,"2":0}},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]},"8":{"1":[{"1":2,"2":0,"5":{"1":2,"2":0}},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]},"10":1,"11":4,"12":0,"14":{"1":2,"2":0},"15":"Times New Roman","16":12}'
            >– Ngải cứu, quế, gừng, lá lốt, thiên niên kiện, ngũ gia bì, kê
            huyết đằng, tang kí sinh, mộc qua, xuyên khung, thạch xương bồ, thủ
            phục linh, địa liền, dây đau xương, hạt muồng…</span
          >
        </p>
        <p><strong>CÔNG DỤNG</strong></p>
        <p>
          <span
            data-sheets-value='{"1":2,"2":"- Giữ ấm cơ thể.\n- Lưu thông khí huyết.\n- Giảm đau mỏi cổ vai gáy, lưng eo.\n- Giảm đau bụng kinh.\n- Thư giãn, ngủ ngon.\n- Cải thiện đau đầu, chóng mặt.\n- Dùng hỗ trợ trong trường hợp quấn nóng giảm mỡ bụng.\n- Chườm ấm gan, tăng cường thải độc gan.\n- Chườm ấm giúp nhanh co dạ con sau sinh."}'
            data-sheets-userformat='{"2":15293,"3":{"1":0},"5":{"1":[{"1":2,"2":0,"5":{"1":2,"2":0}},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]},"6":{"1":[{"1":2,"2":0,"5":{"1":2,"2":0}},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]},"7":{"1":[{"1":2,"2":0,"5":{"1":2,"2":0}},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]},"8":{"1":[{"1":2,"2":0,"5":{"1":2,"2":0}},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]},"10":1,"11":4,"12":0,"14":{"1":2,"2":0},"15":"Times New Roman","16":12}'
            >– Giữ ấm cơ thể.<br />
            – Lưu thông khí huyết.<br />
            – Giảm đau mỏi cổ vai gáy, lưng eo.<br />
            – Giảm đau bụng kinh.<br />
            – Thư giãn, ngủ ngon.<br />
            – Cải thiện đau đầu, chóng mặt.<br />
            – Dùng hỗ trợ trong trường hợp quấn nóng giảm mỡ bụng.<br />
            – Chườm ấm gan, tăng cường thải độc gan.<br />
            – Chườm ấm giúp nhanh co dạ con sau sinh.</span
          >
        </p>
        <p><strong>HƯỚNG DẪN SỬ DỤNG</strong></p>
        <div id="22nbd_8jlpc">
          <span id="22nbd_8jlpc_e2kge" class="" data-text="true"
            >Bước 1: Làm nóng</span
          >
        </div>
        <div id="22nbd_649oi">
          <span id="22nbd_649oi_bq9t5" class="" data-text="true"
            >Làm nóng gối thảo dược bằng 1 trong các cách sau:</span
          >
        </div>
        <div id="22nbd_55kli">
          <span id="22nbd_55kli_1b56d" class="" data-text="true"
            >– Đặt gối thảo dược vào </span
          ><span id="22nbd_55kli_33p1v" class="" data-text="true"
            ><a href="https://hadushop.com/product/tu-hap-khan-thao-duoc-go-to/"
              >tủ hấp khăn thảo dược <strong>(tham khảo tại đây)</strong></a
            > </span
          ><span id="22nbd_55kli_f3rfq" class="" data-text="true"
            >30 phút.</span
          >
        </div>
        <div id="22nbd_1ojmm">
          <span id="22nbd_1ojmm_a729c" class="" data-text="true"
            >– Đặt gối thảo dược vào</span
          ><a
            href="https://hadushop.com/?s=t%C3%BAi+l%C3%A0m+%E1%BA%A5m+ibag&amp;post_type=product&amp;et_search=true"
            ><span id="22nbd_1ojmm_605b" class="" data-text="true">
              túi làm ấm ibag
              <span
                id="22nbd_55kli_33p1v"
                class=""
                data-text="true"
              ></span></span></a
          ><strong
            ><a href="https://hadushop.com/product/tui-lam-am/"
              >(tham khảo tại đây)</a
            ></strong
          >
          <span id="22nbd_1ojmm_551jr" class="" data-text="true"
            >30 – 60 phút.</span
          >
        </div>
        <div id="22nbd_c8plb">
          <span id="22nbd_c8plb_7he3r" class="" data-text="true"
            >– Đăt gối thảo dược vào lò vi sóng, chọn chế độ thấp hoặc trung
            bình 3-5 phút.</span
          >
        </div>
        <div id="22nbd_9o84c">
          <span id="22nbd_9o84c_1eql" class="" data-text="true"
            >Bước 2: Chườm nóng</span
          >
        </div>
        <div id="22nbd_6qlgl">
          <span id="22nbd_6qlgl_7vr35" class="" data-text="true"
            >– Đặt 1 gối thảo dược lên vùng cần chườm nóng (nên sử dụng khăn lót
            để đảm bảo nhiệt vừa đủ).</span
          >
        </div>
        <div id="22nbd_reg3">
          <span id="22nbd_reg3_c10r3" class="" data-text="true"
            >– Sử dụng 1-2 lần/ ngày để đạt hiệu quả cao nhất.</span
          >
        </div>
        <div></div>
        <div id="22nbd_365n4"><strong>LƯU Ý/BẢO QUẢN</strong></div>
        <div id="22nbd_310d0">
          <span id="22nbd_310d0_8qq4" class="" data-text="true"
            >– Sau&nbsp;</span
          ><span id="22nbd_310d0_51bte" class="" data-text="true"
            >khi dùng xong, gối được bảo quản trong tủ hấp khăn để luôn ấm và
            tiện dụng cho lần dùng tiếp theo hoặc bảo quản ở nơi khô ráo, thoáng
            mát.</span
          >
        </div>
        <div id="22nbd_1u1pr">
          <span id="22nbd_1u1pr_eag2f" class="" data-text="true"
            >– Khi cần vệ sinh gối, tháo vỏ ngoài và giặt, phơi bình
            thường.</span
          >
        </div>
        <div id="22nbd_br0k9">
          <span id="22nbd_br0k9_1bvj5" class="" data-text="true"
            >– Thay lõi gối 3 tháng 1 lần để</span
          ><span id="22nbd_br0k9_2fs5k" class="" data-text="true"
            >&nbsp;đảm bảo&nbsp;</span
          ><span id="22nbd_br0k9_3hqnq" class="" data-text="true"
            >dược tính của thảo dược tốt nhất.</span
          >
        </div>
        <p><strong>SET BAO GỒM:</strong></p>
        <p>– 1 khăn gội</p>
        <p>– 1 gối thảo dược</p>
        <p>
          <strong>CHÍNH SÁCH CHIẾT KHẤU</strong>:&nbsp;<a
            href="https://hadushop.com/chinh-sach-chuong-trinh-ban-hang-va-nha-phan-phoi/"
            >THAM KHẢO TẠI ĐÂY</a
          >
        </p>
        <p>
          Phí vận chuyển: Đồng giá 30.000đ cho các đơn hàng toàn quốc dưới 3kg.
        </p>
        <p>Mua hàng tại:</p>
        <p>
          + Shopee:&nbsp;<a
            class="waffle-rich-text-link"
            href="https://shopee.vn/hadu_retail"
            >Hadu_retail</a
          >
        </p>
        <p>
          + Tiktok Shop:&nbsp;<a
            href="https://www.tiktok.com/@hadu_retail?_t=8UGuXYDPbMH&amp;_r=1"
            >Hadu Shop</a
          >
        </p>
        <p>
          + Zalo OA:&nbsp;<a href="https://zalo.me/166876640707881697"
            >Massage trị liệu HaDu Việt Nam</a
          >
        </p>
        <p>
          + Facebook:&nbsp;<a href="https://www.facebook.com/hadushop.2021"
            >Hadushop – Thảo dược Spa</a
          >
        </p>
        <p>
          Để biết thêm thông tin, xin vui lòng gọi tới số điện thoại:
          02423.211.919 để được tư vấn chi tiết!
        </p>
      </div>
    </div>
    <hr />
    <div>
      <h4>THÔNG TIN BỔ SUNG</h4>
      <el-table :show-header="false" :data="tableDataInnfo" style="width: 100%">
        <el-table-column prop="type" width="200"> </el-table-column>
        <el-table-column prop="value"> </el-table-column>
      </el-table>
    </div>
    <hr />
    <div>
      <h4>ĐÁNH GIÁ</h4>
      <div class="row pt-2">
        <div class="col-6">
          <p><strong>REVIEWS</strong></p>
          <hr />
          <p>There are no reviews yet.</p>
        </div>
        <div class="col-6">
          <p><strong>BE THE FIRST TO REVIEW “GỐI THẢO DƯỢC”</strong></p>
          <hr />
          <p>You must be logged in to post a review.</p>
        </div>
      </div>
    </div>
    <hr />

    <div class="row justify-content-center pt-3">
      <h3>Sản phẩm liên quan</h3>
    </div>
    <div class="row my-4">
      <div class="col-3 mb-3">
        <div class="product-img">
          <VueSlickCarousel :arrows="true" :dots="false">
            <div
              class="product-image image-background"
              :style="{
                'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
              }"
            ></div>
            <div
              class="product-image image-background"
              :style="{
                'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
              }"
            ></div>
            <div
              class="product-image image-background"
              :style="{
                'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
              }"
            ></div>
          </VueSlickCarousel>
        </div>
        <div class="text-center">
          <h5>Dầu massage trị liệu AnCo 5 tác dụng</h5>

          <span class="price text-muted">75.000 ₫</span>
          –
          <span>250.000 ₫</span>

          <el-button class="w-100 mt-2" type="warning" plain
            >Xem chi tiết</el-button
          >
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
  name: "ProductDetail",
  components: { VueSlickCarousel },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      tableDataInnfo: [
        {
          type: "Trọng lượng",
          value: "N/A",
        },
        {
          type: "Kích thước",
          value: "N/A",
        },
        {
          type: "Loại",
          value: "Loại 24*34cm, Loại 20*27cm",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.image-background {
  background-repeat: no-repeat;
  background-size: cover;
}
.image {
  height: 300px;
}
.image-below {
  height: 100px;
}
.product-image {
  height: 200px;
}
.image-table {
  height: 80px;
  width: 80px;
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
</style>
