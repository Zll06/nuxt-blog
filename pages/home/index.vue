<!--
 * @Name: 2023/8/1
 * @module:
 * @desc:
 * @Author: zhangjiaqi
 * @Date: 2023/8/1
 * @LastEditTime: 星期二
 * @LastEditors: zhangjiaqi
-->

<template>
  <home-component :blog-list="blogList" />
</template>

<script>
import HomeComponent from "@/components/HomeComponent";
import { apiConstant } from '~/constant/apiConstant'
import { getWithQuery } from '~/api/httpUtils'

export default {
  name: 'IndexPage',
  components: { HomeComponent },
  data() {
    return {
      //博客列表
      blogList: [],
    }
  },
  mounted() {
    console.log(process.env)
  },
  async asyncData({ $axios }) {
    const res = await getWithQuery($axios, apiConstant.getArticleList).catch(
      (err) => {
        console.log(err)
        return Promise.resolve({ data: [] })
      }
    )
    return { blogList: res.data }
  },
}
</script>
