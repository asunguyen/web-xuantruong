<template>
    <div class="app-container">
      <div class="card p-3">
        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label for="quocgia">Title</label>
              <el-input placeholder="Nhập title" v-model.trim="title"></el-input>
            </div>
          </div>
          <div class="col-6">
            <label>Produc Type ID</label>
            <div class="input-group">
              <el-select
                class="w-100"
                v-model="productTypeId"
                multiple
                collapse-tags
                placeholder="Select"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
  
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label>Description</label>
            <div class="input-group">
              <el-input
                style="flex: 1"
                type="textarea"
                placeholder="Nhập description"
                v-model.trim="description"
              ></el-input>
            </div>
          </div>
        </div>
        <div class="row pt-3">
          <div class="col-12">
            <label>Price</label>
            <div class="input-group">
              <el-input
                style="flex: 1"
                placeholder="Nhập gía sản phẩm"
                v-model.trim="price"
              >
              <template slot="append">USD</template>
            </el-input>
            </div>
          </div>
        </div>
        <div class="row pt-3">
          <div class="col-12">
            <label>Thumbnail</label>
            <div class="input-group">
              <el-upload action="#" list-type="picture-card" :auto-upload="false">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{ file }">
                  <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url"
                    alt=""
                  />
                  <span class="el-upload-list__item-actions">
                    <span
                      class="el-upload-list__item-preview"
                      @click="handlePictureCardPreview(file)"
                    >
                      <i class="el-icon-zoom-in"></i>
                    </span>
                    <span
                      class="el-upload-list__item-delete"
                      @click="handleDownload(file)"
                    >
                      <i class="el-icon-download"></i>
                    </span>
                    <span
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)"
                    >
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="" />
              </el-dialog>
            </div>
          </div>
        </div>
        <div class="row pt-2">
          <div class="col-12 d-flex justify-content-end">
            <el-button @click="handleClick" type="success" plain
              >Tạo sản phẩm</el-button
            >
          </div>
        </div>
        <hr />
        <el-table
          class="mt-3"
          v-loading="listLoading"
          :data="list"
          element-loading-text="Loading"
          border
          fit
          highlight-current-row
        >
          <el-table-column align="center" label="STT" width="50">
            <template slot-scope="scope">
              {{ scope.$index }}
            </template>
          </el-table-column>
          <el-table-column label="Title">
            <template slot-scope="scope">
              {{ scope.row.title }}
            </template>
          </el-table-column>
          <el-table-column label="Description" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.description }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Product Type ID" width="150" align="center">
            <template slot-scope="scope">
              {{ scope.row.productTypeId }}
            </template>
          </el-table-column>
          <el-table-column label="Price" width="150" align="center">
            <template slot-scope="scope">
              {{ scope.row.price }}
            </template>
          </el-table-column>
          <el-table-column label="Thumbnail" width="150" align="center">
            <template slot-scope="scope">
              {{ scope.row.thumbnail }}
            </template>
          </el-table-column>
          <el-table-column label="List Image" width="150" align="center">
            <template slot-scope="scope">
              {{ scope.row.listImage }}
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </template>
  
  <script>
  import { getList } from "@/api/table";
  
  export default {
    data() {
      return {
        title: "",
        description: "",
        price: "",
        list: null,
        options: [
          {
            value: "Option1",
            label: "Option1",
          },
          {
            value: "Option2",
            label: "Option2",
          },
        ],
        productTypeId: [],
        listLoading: false,
        dialogImageUrl: "",
        dialogVisible: false,
      };
    },
    created() {
      // this.fetchData();
    },
    methods: {
      fetchData() {
        this.listLoading = true;
        getList().then((response) => {
          this.list = response.data.items;
          this.listLoading = false;
        });
      },
      handleClick() { },
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      },
    },
  };
  </script>
  