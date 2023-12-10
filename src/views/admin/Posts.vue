<template>
  <div class="app-container">
    <div class="card p-3">
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label for="quocgia">Title</label>
            <el-input placeholder="Nhập title" v-model="title"></el-input>
          </div>
        </div>
        <div class="col-6">
          <label>Category</label>
          <div class="input-group">
            <el-select
              class="w-100"
              v-model="categoryID"
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
              v-model="description"
            ></el-input>
          </div>
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-12">
          <label>Content</label>
          <div class="input-group">
            <quill-editor class="editor-form" v-model="content" />
          </div>
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-12">
          <label>Thumbnail</label>
          <div class="input-group">
            <template v-if="thumbnail">
              <img
                v-if="thumbnail"
                class="mr-2"
                style="width: 100px; height: 100px"
                alt=""
                :src="thumbnail"
              />
              <span class="icon-close" @click="thumbnail = ''">x</span>
            </template>

            <el-button
              v-else
              style="width: 100px; height: 100px"
              @click="isShowModal = true"
              plain
              >+</el-button
            >
          </div>
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-12 d-flex justify-content-end">
          <el-button @click="handleCreatePost" type="success" plain
            >Tạo bài viết</el-button
          >
        </div>
      </div>
      <hr />
      <el-table
        class="mt-3"
        v-loading="listLoading"
        :data="listPosts"
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
        <el-table-column width="120" label="Title">
          <template slot-scope="scope">
            {{ scope.row.title }}
          </template>
        </el-table-column>
        <el-table-column label="Description" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.description }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Content" align="center">
          <template slot-scope="scope">
            <div v-html="scope.row.content"></div>
          </template>
        </el-table-column>
        <el-table-column label="Thumbnail" width="150" align="center">
          <template slot-scope="scope">
            <img
              :src="scope.row.thumbnail"
              class="w-100"
              style="height: 100px"
            />
          </template>
        </el-table-column>
        <el-table-column label="Category ID" width="150" align="center">
          <template slot-scope="scope">
            {{ scope.row.categoryID }}
          </template>
        </el-table-column>
        <el-table-column label="Status" width="100" align="center">
          <template slot-scope="scope">
            {{ scope.row.status }}
          </template>
        </el-table-column>
        <el-table-column label="Action" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              type="error"
              @click="openPopupPostsDetail(scope.row)"
              plain
              >Detail</el-button
            >
            <el-button
              type="success"
              @click="handleDeletePosts(scope.row._id)"
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
    <FileList
      @add="selectThumbnail"
      @close="isShowModal = false"
      :isShow="isShowModal"
    />
    <el-dialog
      :title="detailUpdateMode === 'U' ? 'Update Posts' : 'View Posts'"
      :visible.sync="isShowDetailPosts"
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
              @input="canUpdatePosts = true"
            ></el-input>
          </div>
        </div>

        <div class="col-6">
          <label>Category</label>
          <div class="input-group">
            <el-select
              class="w-100"
              v-model="detail.categoryID"
              :disabled="!isModify"
              @change="canUpdatePosts = true"
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
              type="textarea"
              :disabled="!isModify"
              @input="canUpdatePosts = true"
              :row="3"
              placeholder="Nhập title"
              v-model="detail.description"
            ></el-input>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label>Content</label>
          <div class="input-group">
            <quill-editor
              class="editor-form"
              ref="editor"
              v-model="detail.content"
              :disabled="!isModify"
              @change="canUpdatePosts = true"
            />
          </div>
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-12">
          <label>Thumbnail</label>
          <div class="input-group">
            <template v-if="detail.thumbnail">
              <img
                v-if="detail.thumbnail"
                class="mr-2"
                style="width: 100px; height: 100px"
                alt=""
                :src="detail.thumbnail"
              />
              <span
                v-if="isModify"
                class="icon-close"
                @click="detail.thumbnail = ''"
                >x</span
              >
            </template>

            <el-button
              v-else
              style="width: 100px; height: 100px"
              @click="isShowModal = true"
              plain
              >+</el-button
            >
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          @click="
            detailUpdateMode === 'U'
              ? (detailUpdateMode = '')
              : (isShowDetailPosts = false)
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
          :disabled="!canUpdatePosts"
          v-if="isModify"
          type="primary"
          @click="handleUpdatePosts"
          >Update</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getListPostsByUser,
  createPosts,
  updatePosts,
  deletePosts,
} from "@/api/posts";
import { getListCategory } from "@/api/category";
import FileList from "./components/FileList.vue";
import { Message } from "element-ui";

export default {
  components: {
    FileList,
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
      listLoading: false,
      isShowModal: false,
      pagination: {
        totalItems: 0,
        currentPage: 1,
        pageSize: 10,
      },
      detail: {
        title: "",
        description: "",
        content: "",
        categoryID: "",
        thumbnail: "",
        id: "",
      },
      isShowDetailPosts: false,
      detailUpdateMode: "",
      canUpdatePosts: false,
    };
  },
  computed: {
    isModify() {
      return this.detailUpdateMode === "U";
    },
  },
  created() {
    this.getListPostsByUser();
    this.getListCategory();
  },
  methods: {
    getListCategory() {
      const params = {
        page: 0,
        size: 10000,
      };
      getListCategory(params).then((response) => {
        this.options = response.data.map((item) => ({
          label: item.title,
          value: item._id,
        }));
      });
    },
    getListPostsByUser() {
      this.listLoading = true;
      const params = {
        page: this.pagination.currentPage - 1,
        size: this.pagination.pageSize,
      };
      getListPostsByUser(params).then((response) => {
        this.pagination.totalItems = response.total;
        this.listPosts = response.data;
        this.listLoading = false;
        this.$store.dispatch("new/getListnNews", this.listPosts);
        console.log('this.listPosts',this.listPosts)
      });
    },
    handleCurrentChange(page) {
      this.pagination.currentPage = page;
      this.getListPostsByUser();
    },
    handleSizeChange(size) {
      this.pagination.pageSize = size;
      this.pagination.currentPage = 1;
      this.getListPostsByUser();
    },
    handleCreatePost() {
      const data = {
        categoryID: this.categoryID,
        title: this.title,
        description: this.description,
        content: this.content,
        thumbnail: this.thumbnail,
      };
      createPosts(data).then(() => {
        Message({
          message: "Create Posts successfully",
          type: "success",
          duration: 2000,
        });
        this.getListPostsByUser();
        this.categoryID = null;
        this.title = "";
        this.content = "";
        this.thumbnail = "";
        this.description = "";
      });
    },

    openPopupPostsDetail(data) {
      this.detail = {
        ...this.detail,
        title: data.title,
        description: data.description,
        content: data.content,
        categoryID: data.categoryID,
        thumbnail: data.thumbnail,
        id: data._id,
      };
      this.isShowDetailPosts = true;
    },
    resetDataDetail() {
      this.isShowDetailPosts = false;
      this.canUpdatePosts = false;
      this.detailUpdateMode = "";
      this.detail = {
        title: "",
        description: "",
        content: "",
        categoryID: "",
        thumbnail: "",
        id: "",
      };
    },
    handleUpdatePosts() {
      const params = {
        categoryID: this.detail.categoryID,
        title: this.detail.title,
        description: this.detail.description,
        content: this.detail.content,
        thumbnail: this.detail.thumbnail,
        id: this.detail.id,
      };
      updatePosts(params).then((response) => {
        Message({
          message: "Update posts successfully",
          type: "success",
          duration: 2000,
        });
        this.resetDataDetail();
        this.getListPostsByUser();
      });
    },

    handleDeletePosts(id) {
      deletePosts({ id }).then((response) => {
        Message({
          message: "Delete posts successfully",
          type: "success",
          duration: 2000,
        });
        this.getListPostsByUser();
      });
    },
    selectThumbnail(data) {
      if (this.isModify) {
        this.detail.thumbnail = data.link;
        this.canUpdatePosts = true;
      } else {
        this.thumbnail = data.link;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.icon-close {
  position: absolute;
  left: 85px;
  top: 0;
  cursor: pointer;
}
</style>
