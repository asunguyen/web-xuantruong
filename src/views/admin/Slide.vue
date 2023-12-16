<template>
  <div class="app-container">
    <div class="card p-3">
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label for="quocgia">Title</label>
            <el-input placeholder="Nhập title" v-model="title"></el-input>
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
          <label>Image</label>
          <div class="input-group">
            <template v-if="image">
              <img
                v-if="image"
                class="mr-2"
                style="width: 100px; height: 100px"
                alt=""
                :src="image"
              />
              <span class="icon-close" @click="image = ''">x</span>
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
        <div class="col-6">
          <label>Text Button</label>
          <div class="input-group">
            <el-input
              placeholder="Nhập text button"
              v-model="textButton"
            ></el-input>
          </div>
        </div>
        <div class="col-6">
          <label>Link Button</label>
          <div class="input-group">
            <el-input
              placeholder="Nhập link button"
              v-model="linkButton"
            ></el-input>
          </div>
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-12 d-flex justify-content-end">
          <el-button @click="handleCreateSlider" type="success" plain
            >Tạo Slide</el-button
          >
        </div>
      </div>
      <hr />
      <el-table
        class="mt-3"
        v-loading="listLoading"
        :data="listSlider"
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

        <el-table-column label="image" width="150" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.image" class="w-100" style="height: 100px" />
          </template>
        </el-table-column>
        <el-table-column label="Text Button" width="100" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.textButton }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Link Button" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.linkButton }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Action" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              type="error"
              @click="openPopupSliderDetail(scope.row)"
              plain
              >Detail</el-button
            >
            <el-button
              type="success"
              @click="handleDeleteSlider(scope.row._id)"
              class="ml-2"
              plain
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <FileList
      @add="selectimage"
      @close="isShowModal = false"
      :isShow="isShowModal"
    />

    <el-dialog
      :title="detailUpdateMode === 'U' ? 'Update Slider' : 'View Slider'"
      :visible.sync="isShowDetailSlider"
      width="80%"
      @close="resetDataDetail"
    >
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label for="quocgia">Title</label>
            <el-input
              :disabled="!isModify"
              @input="canUpdateSlider = true"
              placeholder="Nhập title"
              v-model="detail.title"
            ></el-input>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label>Description</label>
          <div class="input-group">
            <el-input
              :disabled="!isModify"
              style="flex: 1"
              type="textarea"
              placeholder="Nhập description"
              v-model="detail.description"
              @input="canUpdateSlider = true"
            ></el-input>
          </div>
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-12">
          <label>Image</label>
          <div class="input-group">
            <template v-if="detail.image">
              <img
                v-if="detail.image"
                class="mr-2"
                style="width: 100px; height: 100px"
                alt=""
                :src="detail.image"
              />
              <span
                v-if="isModify"
                class="icon-close"
                @click="detail.image = ''"
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
      <div class="row pt-2">
        <div class="col-6">
          <label>Text Button</label>
          <div class="input-group">
            <el-input
              :disabled="!isModify"
              placeholder="Nhập text button"
              v-model="detail.textButton"
              @input="canUpdateSlider = true"
            ></el-input>
          </div>
        </div>
        <div class="col-6">
          <label>Link Button</label>
          <div class="input-group">
            <el-input
              :disabled="!isModify"
              placeholder="Nhập link button"
              v-model="detail.linkButton"
              @input="canUpdateSlider = true"
            ></el-input>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          @click="
            detailUpdateMode === 'U'
              ? (detailUpdateMode = '')
              : (isShowDetailSlider = false)
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
          :disabled="!canUpdateSlider"
          v-if="isModify"
          type="primary"
          @click="handleUpdateSlider"
          >Update</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getListSlider,
  createSlider,
  updateSlider,
  deleteSlider,
} from "@/api/slide";
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
      image: "",
      textButton: "",
      linkButton: "",
      listSlider: null,
      listLoading: false,
      isShowModal: false,
      dialogImageUrl: "",
      dialogVisible: false,
      detail: {
        title: "",
        description: "",
        image: "",
        textButton: "",
        linkButton: "",
        id: "",
      },
      isShowDetailSlider: false,
      detailUpdateMode: "",
      canUpdateSlider: false,
    };
  },
  computed: {
    isModify() {
      return this.detailUpdateMode === "U";
    },
  },
  created() {
    this.getListSlider();
  },
  methods: {
    getListSlider() {
      this.listLoading = true;
      getListSlider().then((response) => {
        this.listSlider = response.data;
        this.$store.dispatch("slide/getListSlider", this.listSlider);
        this.listLoading = false;
      });
    },
    handleCreateSlider() {
      const data = {
        title: this.title,
        description: this.description,
        image: this.image,
        textButton: this.textButton,
        linkButton: this.linkButton,
      };
      createSlider(data).then(() => {
        Message({
          message: "Create Slider successfully",
          type: "success",
          duration: 2000,
        });
        this.getListSlider();
        this.title = "";
        this.image = "";
        this.description = "";
        this.textButton = "";
        this.linkButton = "";
      });
    },

    openPopupSliderDetail(data) {
      this.detail = {
        ...this.detail,
        title: data.title,
        description: data.description,
        textButton: data.textButton,
        linkButton: data.linkButton,
        image: data.image,
        id: data._id,
      };
      this.isShowDetailSlider = true;
    },
    resetDataDetail() {
      this.isShowDetailSlider = false;
      this.canUpdateSlider = false;
      this.detailUpdateMode = "";
      this.detail = {
        title: "",
        description: "",
        textButton: "",
        linkButton: "",
        image: "",
        id: "",
      };
    },
    handleUpdateSlider() {
      const params = {
        title: this.detail.title,
        description: this.detail.description,
        image: this.detail.image,
        textButton: this.detail.textButton,
        linkButton: this.detail.linkButton,
        id: this.detail.id,
      };
      updateSlider(params).then((response) => {
        if (response) {
          Message({
            message: "Update Slider successfully",
            type: "success",
            duration: 2000,
          });
          this.getListSlider();
        }
        this.resetDataDetail();
      });
    },

    handleDeleteSlider(id) {
      deleteSlider({ id }).then((response) => {
        Message({
          message: "Delete Slider successfully",
          type: "success",
          duration: 2000,
        });
        this.getListSlider();
      });
    },
    selectimage(data) {
      if (this.isModify) {
        this.detail.image = data.link;
        this.canUpdateSlider = true;
      } else {
        this.image = data.link;
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
