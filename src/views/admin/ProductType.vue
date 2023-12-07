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
          <label>Parent ID</label>
          <div class="input-group">
            <el-select
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
          <label>Slug:</label>
          <span class="pl-2">slug-render-from-name</span>
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-12 d-flex justify-content-end">
          <el-button @click="handleClick" type="success" plain
            >Tạo danh mục sản phẩm</el-button
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
        <el-table-column label="Parent ID" width="150" align="center">
          <template slot-scope="scope">
            {{ scope.row.pageviews }}
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
      parentId: [],
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
