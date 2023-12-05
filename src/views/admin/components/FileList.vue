<template>
    <el-dialog
      title="File List"
      :visible.sync="isShow"
      width="80%"
      :before-close="closeModal"
    >
      <div class="row">
        <div class="col-4 border-right">
          <div class="row p-4 align-items-center h-100">
            <!-- <el-upload
              class="upload-demo w-100"
              drag
              action="http://api.ustractorequipment.com/v1/upload/image"
              :headers="headersRequest"
              :show-file-list="false"
              :auto-upload="true"
              accept="image/*"
              :on-success="onUploadAvatarSuccess"
              :on-error="onUploadAvatarFail"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                Drop file here or <em>click to upload</em>
              </div>
            </el-upload> -->
            <form
              class="form-horizontal"
              method="POST"
              enctype="multipart/form-data"
              id="fileUploadForm"
            >
            <div class="form-group">
              <input type="file" name="image" id="file-upload" class="input-group input-file" />
              <button type="btn" id="btn-upload" name="upload" @click="handleUploadFile" class="btn btn-primary pull-right">Upload</button>
            </div>
            <!-- <input
              type="file"
              class="input-group input-file"
              id="file-upload"
            />
            <button type="btn" @click="handleUploadFile" class="btn btn-primary pull-right">
              Upload
            </button> -->
            </form>        
          </div>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-2 font-weight-bold d-flex align-items-center">
              Image Name
            </div>
            <div class="col-8">
              <el-input
                placeholder="Input name image"
                v-model="searchName"
                @change="handleSearch"
              ></el-input>
            </div>
            <div class="col-2">
              <el-button class="w-100" @click="handleSearch" type="success" plain
                >Search</el-button
              >
            </div>
          </div>
          <hr />
          <el-table
            ref="table"
            :data="tableData"
            style="width: 100%"
            :highlight-current-row="!isMultiSelect"
            @current-change="selectedRow"
            @selection-change="selectedRow"
          >
            <el-table-column v-if="isMultiSelect" type="selection" width="55">
            </el-table-column>
            <el-table-column label="Image" width="100">
              <template slot-scope="scope">
                <img :src="scope.row.link" class="w-100" style="height: 60px" />
              </template>
            </el-table-column>
            <el-table-column label="File Name">
              <template slot-scope="scope">{{ scope.row.title }}</template>
            </el-table-column>
            <el-table-column label="Created" width="100">
              <template slot-scope="scope">{{
                formatDateTime(scope.row.createdAt)
              }}</template>
            </el-table-column>
            <el-table-column label="Updated" width="100">
              <template slot-scope="scope">{{
                formatDateTime(scope.row.updateAt)
              }}</template>
            </el-table-column>
            <el-table-column label="Action" width="150">
              <template slot-scope="scope">{{ scope.row._id }}</template>
            </el-table-column>
          </el-table>
          <el-pagination
            class="pt-3"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="pagination.currentPage"
            :page-sizes="[1, 5, 10, 20, 50]"
            :page-size="pagination.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pagination.totalItems"
          >
          </el-pagination>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModal">Cancel</el-button>
        <el-button :disabled="!selected" type="primary" @click="handleSelected"
          >Select</el-button
        >
      </span>
    </el-dialog>
  </template>
  
  <script>
  import { uploadFile, getListFile } from "@/api/upload-file";
  import moment from "moment";
  import { getToken } from "@/utils/auth";
  import $ from "jquery";
  
  export default {
    name: "FileList",
    props: {
      isShow: {
        type: Boolean,
        required: false,
      },
      isMultiSelect: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        headersRequest: { Token: getToken() },
        searchName: "",
        tableData: [],
        selected: null,
        pagination: {
          totalItems: 0,
          currentPage: 1,
          pageSize: 10,
        },
      };
    },
    created() {
      this.getFileList();
    },
    methods: {
      formatDateTime(data) {
        return moment(data).format("YYYY-MM-DD HH:mm");
      },
      getFileList() {
        this.selected = null;
        const params = {
          page: this.pagination.currentPage - 1,
          size: this.pagination.pageSize,
          search: this.searchName,
        };
        getListFile(params).then((response) => {
          this.tableData = response.data;
          this.pagination.totalItems = response.total;
          this.listLoading = false;
        });
      },
      handleCurrentChange(page) {
        this.pagination.currentPage = page;
        this.getFileList();
      },
      handleSizeChange(size) {
        this.pagination.pageSize = size;
        this.pagination.currentPage = 1;
        this.getFileList();
      },
      handleSearch() {
        this.handleCurrentChange(1);
      },
      closeModal() {
        this.$emit("close");
        this.$refs.table.setCurrentRow();
      },
      handleSelected() {
        this.$emit("add", this.selected);
        this.closeModal();
      },
      selectedRow(row) {
        this.selected = row;
      },
      async handleUploadFile(ev) {
        ev.preventDefault();
        const file = $("#fileUploadForm")[0];
        var formData = new FormData(file);
        const res = await uploadFile(formData);
        console.log(res);
        if (res.code == 200) {
          this.getFileList();
        } else {
  
        }
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  ::v-deep {
    .el-upload {
      width: 100%;
    }
    .el-upload-dragger {
      width: 100%;
    }
  }
  </style>
  