<template>
  <div class="container mt-4">
    <div class="row">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
        <el-breadcrumb-item
          ><span style="cursor: pointer" @click="categoryType = ''"
            >Sản phẩm</span
          ></el-breadcrumb-item
        >
        <el-breadcrumb-item v-if="categoryType">{{
          categoryType
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row pt-4">
      <div class="col-9">
        <div class="row justify-content-between">
          <el-select v-model="valueSort" placeholder="Select">
            <el-option
              v-for="item in optionsSort"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select v-model="valueShow" placeholder="Select">
            <el-option
              v-for="item in optionsShow"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="row my-4 list-product">
          <div class="col-3 mb-3">
            <div class="product-img">
              <VueSlickCarousel :arrows="true" :dots="false">
                <div
                  class="product-image"
                  :style="{
                    'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
                  }"
                ></div>
                <div
                  class="product-image"
                  :style="{
                    'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
                  }"
                ></div>
                <div
                  class="product-image"
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

              <el-button
                @click="goToProductDetail"
                class="w-100 mt-2"
                type="warning"
                plain
                >Xem chi tiết</el-button
              >
            </div>
          </div>
          <div class="col-3 mb-3">
            <div class="product-img">
              <VueSlickCarousel :arrows="true" :dots="false">
                <div
                  class="product-image"
                  :style="{
                    'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
                  }"
                ></div>
                <div
                  class="product-image"
                  :style="{
                    'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
                  }"
                ></div>
                <div
                  class="product-image"
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

              <el-button
                @click="goToProductDetail"
                class="w-100 mt-2"
                type="warning"
                plain
                >Xem chi tiết</el-button
              >
            </div>
          </div>
          <div class="col-3 mb-3">
            <div class="product-img">
              <VueSlickCarousel :arrows="true" :dots="false">
                <div
                  class="product-image"
                  :style="{
                    'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
                  }"
                ></div>
                <div
                  class="product-image"
                  :style="{
                    'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
                  }"
                ></div>
                <div
                  class="product-image"
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

              <el-button
                @click="goToProductDetail"
                class="w-100 mt-2"
                type="warning"
                plain
                >Xem chi tiết</el-button
              >
            </div>
          </div>
          <div class="col-3 mb-3">
            <div class="product-img">
              <VueSlickCarousel :arrows="true" :dots="false">
                <div
                  class="product-image"
                  :style="{
                    'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
                  }"
                ></div>
                <div
                  class="product-image"
                  :style="{
                    'background-image': `url(${require('@/assets/images-product/IMG_5735.jpg')})`,
                  }"
                ></div>
                <div
                  class="product-image"
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

              <el-button
                @click="goToProductDetail"
                class="w-100 mt-2"
                type="warning"
                plain
                >Xem chi tiết</el-button
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 pl-4 pb-5">
        <div class="d-flex justify-content-between">
          <h5>PRODUCT CATEGORY</h5>
          <span
            @click="toogleCategory = !toogleCategory"
            class="icon-show-hide"
            >{{ toogleCategory ? "-" : "+" }}</span
          >
        </div>
        <hr />
        <div v-if="toogleCategory">
          <ul class="product-categories pl-0">
            <li
              class="product-categories-item"
              v-for="item in listCategory"
              :key="item"
            >
              <a @click="categoryType = item">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="d-flex justify-content-between pt-3">
          <h5>FILTER BY PRICE</h5>
          <span @click="tooglePrice = !tooglePrice" class="icon-show-hide">{{
            tooglePrice ? "-" : "+"
          }}</span>
        </div>
        <hr />
        <div v-if="tooglePrice">
          <el-slider v-model="valuePrice" range :marks="marks"> </el-slider>
          <div class="d-flex justify-content-between pt-3">
            <span>Giá: {{ priceSeleted }}</span>
            <el-button size="mini">LỌC</el-button>
          </div>
        </div>
        <div class="d-flex justify-content-between pt-5">
          <h5>SORT BY RATING</h5>
          <span @click="toogleRating = !toogleRating" class="icon-show-hide">{{
            toogleRating ? "-" : "+"
          }}</span>
        </div>
        <hr />
        <div v-if="toogleRating">
          <el-checkbox v-model="selectRate"
            ><el-rate v-model="valueRate"></el-rate
          ></el-checkbox>
        </div>
        <div class="d-flex justify-content-between pt-5">
          <h5>BRANDS</h5>
          <span @click="toogleBrands = !toogleBrands" class="icon-show-hide">{{
            toogleBrands ? "-" : "+"
          }}</span>
        </div>
        <hr />
        <div v-if="toogleBrands">
          <ul class="product-categories pl-0">
            <li class="product-categories-item">
              <a>All brands</a>
            </li>
          </ul>
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
  name: "Product",
  components: { VueSlickCarousel },
  data() {
    return {
      categoryType: "",
      listCategory: ["Máy xúc", "Máy cày", "Xe lu", "Máy cẩu"],
      toogleCategory: true,
      tooglePrice: true,
      toogleRating: true,
      toogleBrands: true,
      valueRate: null,
      selectRate: false,
      optionsSort: [
        {
          value: "Option1",
          label: "Thứ tự mặc định",
        },
        {
          value: "Option2",
          label: "Thứ tự theo mức độ phổ biến",
        },
        {
          value: "Option3",
          label: "Thứ tự theo điểm đánh giá",
        },
        {
          value: "Option4",
          label: "Mới nhất",
        },
        {
          value: "Option5",
          label: "Thứ tự theo giá: Từ cao đến thấp",
        },
        {
          value: "Option6",
          label: "Thứ tự theo giá: Từ thấp đến cao",
        },
      ],
      valueSort: "",
      optionsShow: [
        {
          value: "Option1",
          label: "16",
        },
        {
          value: "Option2",
          label: "24",
        },
        {
          value: "Option3",
          label: "All",
        },
      ],
      valueShow: "",
      valuePrice: [30, 60],
      marks: {
        0: "0tr",
        100: "1tỷ",
      },
    };
  },
  computed: {
    priceSeleted() {
      return (
        `${this.valuePrice[0] === 0 ? "0tr" : this.valuePrice[0] + "0tr"}` +
        "-" +
        `${this.valuePrice[1] === 100 ? "1 tỷ" : this.valuePrice[1] + "0tr"}`
      );
    },
  },
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
.product-categories {
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
</style>
