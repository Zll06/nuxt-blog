<template>
  <home />
</template>

<script>
import Home from "~/pages/home";
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
    console.log(this.title);
  },
  asyncData(data, callback) {
    callback(null, {title: "2222"})
  }
}
</script>
