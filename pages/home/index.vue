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
          <div class="card-item">
            <div class="card-left">
              <el-image class="card-left-img" :src="require('@/static/common/butterfly-docs-03-cover.png')" />
            </div>
            <div class="card-right">
              <span class="card-right-title">Butterfly 安裝文檔(三) 主題配置-1</span>
              <span class="card-right-description">📖 本教程更新於 2023 年 06 月 06 日，教程的內容針對最新穩定版而更新（如果你是舊版，教程會有些出入，請留意） 🦋 Butterfly 已經更新到 4.9.0 📚 文檔目錄 🚀 快速開始 - 📑 主題頁面 - 📌 主題配置-1 - ⚔️ 主題配置-2 - ❓ 主題問答 - ⚡️ 進階教程 - ✨ 更新日誌 - 🤞 打賞 你可以通過右下角的 簡 按鈕切換為簡體顯示 語言修改站點配置文件 _config.yml 默認語言是 en 主題支持三種語言 default(en) zh-CN (簡體中文) zh-TW (繁體中文) 網站資料修改網站各種資料，例如標題、副標題和郵箱等個人資料，請修改博客根目錄的_config.yml 導航欄設置 (Navigation bar settings)參數設置主題配置文件中 1234nav: logo: #image display_title: true fixed: false # fixed navigation bar 參數 解釋 logo 網站的 logo，支持圖片，直接填 ...</span>
            </div>
          </div>
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
          <el-button class="jump-btn" type="primary" @click="jumpGitHub">
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
    //跳转github
    jumpGitHub() {
      window.open("https://github.com/Zll06/nuxt-blog")
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/animation.scss";
@import "@/assets/css/mixin.scss";
.home-body {
  .content-body {
    margin: 0 auto;
    padding: 40px 15px;
    display: flex;
    max-width: 1200px;
    .content-left {
      width: 74%;
      ::v-deep .el-card {
        .el-card__body {
          padding: 0;
        }
      }
      .card-item {
        height: 16.8em;
        display: flex;
        .card-left {
          height: 100%;
          width: 42%;
          .card-left-img {
            height: 100%;
            width: 100%;
          }
        }
        .card-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 40px;
          .card-right-title {
            font-size: 1.55em;
            line-height: 1.4;
          }
          .card-right-description {
            font-size: 14px;
            color: #4c4948;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            margin-top: 6px;
          }
        }
      }
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
