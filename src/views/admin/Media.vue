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
            <label>Type</label>
            <div class="input-group">
              <el-select
                class="w-100"
                v-model="type"
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
            <label>Link</label>
            <div class="input-group">
              <el-input
                style="flex: 1"
                placeholder="Nhập url"
                v-model.trim="url"
              ></el-input>
            </div>
          </div>
        </div>
        <div class="row pt-2">
          <div class="col-12 d-flex justify-content-end">
            <el-button @click="handleClick" type="success" plain
              >Tạo Media</el-button
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
          <el-table-column label="Link">
            <template slot-scope="scope">
              {{ scope.row.link }}
            </template>
          </el-table-column>
          <el-table-column label="Type">
            <template slot-scope="scope">
              {{ scope.row.type }}
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
        url: "",
        list: null,
        options: [
          {
            value: "image",
            label: "Image",
          },
          {
            value: "video",
            label: "Video",
          },
          {
            value: "gif",
            label: "Gif",
          },
        ],
        type: [],
        listLoading: false,
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
    },
  };
  </script>
  