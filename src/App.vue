<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss" scoped>
.quill-editor{
  height: 100%;
}
::v-deep{
  .ql-container{
    height: 200px;
  }
 
}
</style>

