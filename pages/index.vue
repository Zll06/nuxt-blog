<template>
  <home />
</template>

<script>
import Home from "~/pages/home";
// import apiReq from "~/api/httpUtils";
// import {apiHome} from "@/constant/apiConstant/apiHome";
// const {getWithQuery} = require("@/api/httpUtils")
// const {apiHome} = require("@/constant/apiConstant/apiHome")

export default {
  name: 'IndexPage',
  components: {Home},
  data() {
    return {
      //博客
      blogList: []
    }
  },
  mounted() {
    // console.log(apiReq)
    console.log(this.title);
  },
  // asyncData(data, callback) {
    // return getWithQuery(apiHome.getArticleList)
    //   .then(res => {
    //     console.log(res)
    //   })
  // }
}
</script>
