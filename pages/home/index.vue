<!--
 * @Name: 2023/7/25
 * @module:
 * @desc:
 * @Author: zhangjiaqi
 * @Date: 2023/7/25
 * @LastEditTime: 星期二
 * @LastEditors: zhangjiaqi
-->

<template>
  <div class="home-body">
    <div class="bg-class"></div>
    <div class="content-body">
      <div class="content-left">
        <el-card>
          2222
        </el-card>
      </div>
      <div class="content-right">
        <el-card class="author-card">
          <el-image class="author-header" :src="require('@/static/common/avatar.png')" />
          <span class="author-name">张嘉琪</span>
          <div class="author-sign">
            <span>A Simple and Card UI Design theme for Hexo</span>
          </div>
          <div class="tabs-btn-area">
            <template v-for="item in tabsBtn">
              <div class="btn-class">
                <span>{{item.name}}</span>
                <span>{{item.number}}</span>
              </div>
            </template>
          </div>
          <el-button class="jump-btn" type="primary">
            GitHub
          </el-button>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index.vue",
  data() {
    return {
      //tab页的按钮列表
      tabsBtn: [
        {
          id: 1,
          name: "文章",
          number: 12
        },
        {
          id: 2,
          name: "标签",
          number: 13
        },
        {
          id: 3,
          name: "分类",
          number: 22
        }
      ]
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/animation.scss";
.home-body {
  .content-body {
    margin: 0 auto;
    padding: 40px 15px;
    display: flex;
    max-width: 1200px;
    .content-left {
      width: 74%;
    }
    .content-right {
      width: 26%;
      padding-left: 15px;
    }
  }
  .author-card {
    ::v-deep .el-card__body {
      display: flex;
      flex-direction: column;
    }
    .author-header {
      width: 110px;
      height: 110px;
      margin: 0 auto;
      @include rotate;
    }
    .author-name,
    .author-sign {
      text-align: center;
      font-family: 'PingFang SC','Hiragino Sans GB','Microsoft JhengHei','Microsoft YaHei',sans-serif;
    }
    .author-name {
      font-size: 22px;
      line-height: 2;
      margin: 10px 0;
    }
    .author-sign {
      font-size: 14px;
    }
    .tabs-btn-area {
      margin-top: 16px;
      display: flex;
      justify-content: space-around;
      .btn-class {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all .3s;
        & > span:nth-child(1) {
          margin-bottom: 8px;
        }
        &:hover {
          cursor: pointer;
          color: #49b1f5;
          @include user-select;
        }
      }
    }
    .jump-btn {
      margin-top: 16px;
    }
  }
}
</style>
