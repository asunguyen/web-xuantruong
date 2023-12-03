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
            <label>Link</label>
            <div class="input-group">
              <el-input placeholder="Nhập title" v-model.trim="link"></el-input>
              <!-- <el-select
                class="w-100"
                v-model="parentId"
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
              </el-select> -->
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
        <div class="row pt-2">
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
              >Tạo danh mục</el-button
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
          <el-table-column label="Link" width="150" align="center">
            <template slot-scope="scope">
              {{ scope.row.link }}
            </template>
          </el-table-column>
          <el-table-column label="Thumbnail" width="150" align="center">
            <template slot-scope="scope">
              {{ scope.row.thumbnail }}
            </template>
          </el-table-column>
          <el-table-column label="Status" width="150" align="center">
            <template slot-scope="scope">
              {{ scope.row.status }}
            </template>
          </el-table-column>
          <el-table-column label="Action" width="150" align="center">
            <template slot-scope="scope">
              <el-button type="success" plain>Sử dụng</el-button>
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
        list: null,
        link: "",
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
      handleClick() {},
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
  