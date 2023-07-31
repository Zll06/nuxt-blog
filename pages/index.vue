<template>
  <home :blog-list="blogList" />
</template>

<script>
import Home from '~/pages/home'
import { apiConstant } from '~/constant/apiConstant'
import { getWithQuery } from '~/api/httpUtils'

export default {
  name: 'IndexPage',
  components: { Home },
  data() {
    return {
      //博客列表
      blogList: [],
    }
  },
  created() {},
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
