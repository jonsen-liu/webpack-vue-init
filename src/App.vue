<template>
  <div id="app">
    <h1>Hello World!</h1>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <div>
      img引入的
      <img src="@/assets/imgs/123.jpg" alt>
      improt引入的
      <img :src="urlsrc" alt>
    </div>
  </div>
</template>

<script>
import urlsrc from "@assets/imgs/321.jpg";
export default {
  name: "App",
  data() {
    return {
      urlsrc: urlsrc
    };
  }
};
</script>
<style lang="less" scoped>
#app {
  h1 {
    display: inline-block;
    font-size: 12px;
    transform: translateX(50%);
  }
  img:nth-last-child(1) {
    width: 100%;
  }
}
</style>
