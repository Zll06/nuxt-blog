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
  <div class="layout-body" @scroll="onBodyScroll">
    <header class="header-body" :class="headerClass">
      <el-menu
        mode="horizontal"
        :default-active="defaultIndex"
        active-text-color="#ffffff"
      >
        <template v-for="item in routeList">
          <el-menu-item :index="item.path">
            <nuxt-link :to="item.path" :key="item.path">{{item.name}}</nuxt-link>
          </el-menu-item>
        </template>
      </el-menu>
    </header>
    <main class="content">
      <nuxt />
    </main>
  </div>
</template>

<script>
import {getRoute, reasonTypeReturnData} from "~/utils";

export default {
  name: "index",
  data() {
    return {
      //默认选中的菜单
      defaultIndex: null,
      //路由数组
      routeList: [
        {
          name: "首页",
          path: "/home"
        },
        {
          name: "导航站",
          path: "/navigation"
        },
        {
          name: "实例",
          path: "/example"
        }
      ],
      //路由实例
      route: null,
      //当前距离顶部
      curScrollTop: null,
      //header的class样式
      headerClass: null
    }
  },
  methods: {
    //监听页面滚动
    onBodyScroll(e) {
      const {scrollTop} = reasonTypeReturnData(e.target, "object")
      if(scrollTop) {
        this.$store.commit("UPDATE_SCROLL_TOP", scrollTop)
        if(scrollTop > 0) {
          this.headerClass = "nav-fixed"
        }
        if(scrollTop < this.curScrollTop) {
          this.headerClass = "nav-fixed-top"
        }
        this.curScrollTop = scrollTop
        if(scrollTop === 0) {
          this.headerClass = null
        }
      }
    }
  },
  mounted() {
    this.route = getRoute()
    this.defaultIndex = this.route.path
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/animation.scss";
@import "@/assets/css/mixin.scss";
.layout-body {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: relative;
  .header-body {
    position: fixed;
    top: 0;
    right: 10px;
    width: 100%;
    background: rgba(0, 0, 0 ,0);
    transition: all .5s;
  }
  ::v-deep .el-menu {
    border-bottom: none;
    display: flex;
    justify-content: flex-end;
    background: rgba(0, 0, 0 ,0);
    .el-menu-item:not(.is-disabled) {
      &:hover,
      &:focus {
        background: rgba(0, 0, 0 ,0) !important;
      }
    }
    .el-menu-item {
      padding: 0;
      line-height: normal;
      height: auto;
      cursor: default;
      display: flex;
      margin-right: 10px;
      color: #ffffff;
      & > a {
        padding: 10px;
        text-decoration: none;
        display: inline-block;
        width: 100%;
      }
    }
  }
  .nav-fixed {
    position: fixed;
    top: -41px;
    @include menu-text;
  }
  .nav-fixed-top {
    position: fixed;
    top: 0;
    @include menu-text;
  }
}
</style>
