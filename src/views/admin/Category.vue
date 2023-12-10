<template>
    <div class="app-container">
      <div class="card p-3">
        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label for="quocgia"
                >Title <span class="text-danger">*</span></label
              >
              <el-input placeholder="Nhập title" v-model="title"></el-input>
            </div>
          </div>
          <div class="col-6">
            <label>Parent ID</label>
            <div class="input-group">
              <el-select
                class="w-100"
                v-model="parentID"
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
        <div class="row py-2">
          <div class="col-12">
            <label>Slug:</label>
            <span class="pl-2">{{ slug }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label>Description</label>
            <div class="input-group">
              <el-input
                type="textarea"
                :row="3"
                placeholder="Nhập title"
                v-model="description"
              ></el-input>
            </div>
          </div>
        </div>
        <div class="row pt-2">
          <div class="col-12 d-flex justify-content-end">
            <el-button
              :disabled="!title"
              @click="handleCreateCategory"
              type="success"
              plain
              >Tạo danh mục</el-button
            >
          </div>
        </div>
        <hr />
        <el-table
          class="mt-3"
          :data="listCategory"
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
          <el-table-column label="Parent ID" width="150" align="center">
            <template slot-scope="scope">
              {{ scope.row.parentID }}
            </template>
          </el-table-column>
          <el-table-column label="Slug" width="150" align="center">
            <template slot-scope="scope">
              {{ scope.row.slug }}
            </template>
          </el-table-column>
          <el-table-column label="Status" width="150" align="center">
            <template slot-scope="scope">
              {{ scope.row.status }}
            </template>
          </el-table-column>
          <el-table-column label="Action" width="200" align="center">
            <template slot-scope="scope">
              <el-button
                type="error"
                @click="openPopupCategoryDetail(scope.row)"
                plain
                >Detail</el-button
              >
              <el-button
                type="success"
                @click="handleDeleteCategory(scope.row._id)"
                class="ml-2"
                plain
                >Delete</el-button
              >
            </template>
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
      <el-dialog
        :title="detailUpdateMode === 'U' ? 'Update Category' : 'View Category'"
        :visible.sync="isShowDetailCategory"
        width="80%"
        @close="resetDataDetail"
      >
        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label for="quocgia">Title</label>
              <el-input
                :disabled="!isModify"
                placeholder="Nhập title"
                v-model="detail.title"
                @input="canUpdateCategory = true"
              ></el-input>
            </div>
          </div>
  
          <div class="col-6">
            <label>Parent ID</label>
            <div class="input-group">
              <el-select
                class="w-100"
                v-model="detail.parentID"
                :disabled="!isModify"
                @change="canUpdateCategory = true"
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
        <div class="row py-2">
          <div class="col-12">
            <label>Slug:</label>
            <span class="pl-2">{{ getSlugByName(detail.title) }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label>Description</label>
            <div class="input-group">
              <el-input
                type="textarea"
                :disabled="!isModify"
                @input="canUpdateCategory = true"
                :row="3"
                placeholder="Nhập title"
                v-model="detail.description"
              ></el-input>
            </div>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button
            @click="
              detailUpdateMode === 'U'
                ? (detailUpdateMode = '')
                : (isShowDetailCategory = false)
            "
            >Cancel</el-button
          >
          <el-button
            v-if="!isModify"
            type="primary"
            @click="detailUpdateMode = 'U'"
            >Modify</el-button
          >
          <el-button
            :disabled="!canUpdateCategory"
            v-if="isModify"
            type="primary"
            @click="handleUpdateCategory"
            >Update</el-button
          >
        </span>
      </el-dialog>
    </div>
  </template>
  
  <script>
  import {
    getListCategory,
    getCategoryDetail,
    createCategory,
    updateCategory,
    deleteCategory,
  } from "@/api/category";
  import getSlugByName from "@/utils/slug";
  import { Message } from "element-ui";
  
  export default {
    data() {
      return {
        title: "",
        description: "",
        listCategory: null,
        options: [],
        parentID: "",
        isShowDetailCategory: false,
        detailUpdateMode: "",
        detail: {
          title: "",
          description: "",
          parentID: "",
          slug: "",
          id: "",
        },
        canUpdateCategory: false,
        pagination: {
          totalItems: 0,
          currentPage: 1,
          pageSize: 10,
        },
      };
    },
    computed: {
      slug() {
        return getSlugByName(this.title);
      },
      isModify() {
        return this.detailUpdateMode === "U";
      },
    },
    created() {
      this.getListCategory();
    },
    methods: {
      getSlugByName,
      getListCategory() {
        const params = {
          page: this.pagination.currentPage - 1,
          size: this.pagination.pageSize,
        };
        getListCategory(params).then((response) => {
          this.pagination.totalItems = response.totalPage;
          this.listCategory = response.data;
          this.options = response.data.map((item) => ({
            label: item.title,
            value: item._id,
          }));
          this.$store.dispatch("new/getListSlider", this.listCategory);
        });
      },
      handleCurrentChange(page) {
        console.log(this.pagination, page);
        this.pagination.currentPage = page;
        this.getListCategory();
      },
      handleSizeChange(size) {
        this.pagination.pageSize = size;
        this.pagination.currentPage = 1;
        this.getListCategory();
      },
      getCategoryDetail(data) {
        this.detail = {
          ...this.detail,
          title: data.title,
          description: data.description,
          parentID: data.parentID,
          slug: getSlugByName(data.slug),
          id: data._id,
        };
      },
      handleCreateCategory() {
        const params = {
          title: this.title,
          description: this.description,
          parentID: this.parentID,
          slug: this.slug,
        };
        createCategory(params).then(() => {
          Message({
            message: "Create category successfully",
            type: "success",
            duration: 2000,
          });
          this.getListCategory();
          this.title = "";
          this.description = "";
          this.parentID = "";
        });
      },
      handleUpdateCategory() {
        const params = {
          title: this.detail.title,
          description: this.detail.description,
          parentID: this.detail.parentID,
          slug: getSlugByName(this.detail.slug),
          id: this.detail.id,
        };
        updateCategory(params).then((response) => {
          Message({
            message: "Update category successfully",
            type: "success",
            duration: 2000,
          });
          this.resetDataDetail();
          this.getListCategory();
        });
      },
      handleDeleteCategory(id) {
        deleteCategory({ id }).then((response) => {
          Message({
            message: "Delete category successfully",
            type: "success",
            duration: 2000,
          });
          this.getListCategory();
        });
      },
      openPopupCategoryDetail(data) {
        this.getCategoryDetail(data);
        this.isShowDetailCategory = true;
      },
      resetDataDetail() {
        this.isShowDetailCategory = false;
        this.canUpdateCategory = false;
        this.detailUpdateMode = "";
        this.detail = {
          title: "",
          description: "",
          parentID: "",
          slug: "",
          id: "",
        };
      },
    },
  };
  </script>
  