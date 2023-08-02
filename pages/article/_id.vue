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
  <div >
    <div class="bg-class" />
    <el-card class="content-body">
      <div v-html="$md.render(mdFile)" />
    </el-card>
  </div>
</template>

<script>
import {apiConstant} from "@/constant/apiConstant";
import {getWithQuery} from "@/api/httpUtils";

export default {
  name: "articleHome",
  data() {
    return {
      //md文件
      mdFile: null
    }
  },
  async asyncData({$axios, route}) {
    const {data} = await getWithQuery($axios, apiConstant.getArticle, {id: route.params.id})
    const mdFile = await getWithQuery($axios, `${encodeURI(`/api${data.path}`)}`)
      .catch(err => {
        console.log(err)
      });
    return {mdFile}
  }
}
</script>

<style lang="scss" scoped>
.content-body {
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 0 20px;
}
</style>
