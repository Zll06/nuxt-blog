// highlight.js  代码高亮指令
// import highLightJs from 'highlight.js';
// 代码高亮风格，选择更多风格需导入 node_modules/hightlight.js/styles/ 目录下其它css文件
import 'highlight.js/styles/github.css'

// 按需引入
const highLightJs = require('highlight.js/lib/core');
highLightJs.registerLanguage('css', require('highlight.js/lib/languages/css'));
highLightJs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));
highLightJs.registerLanguage('dos', require('highlight.js/lib/languages/dos'));
highLightJs.registerLanguage('go', require('highlight.js/lib/languages/go'));
// highLightJs.registerLanguage('htmlbars', require('highlight.js/lib/languages/htmlbars'));
highLightJs.registerLanguage('http', require('highlight.js/lib/languages/http'));
highLightJs.registerLanguage('java', require('highlight.js/lib/languages/java'));
highLightJs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
highLightJs.registerLanguage('json', require('highlight.js/lib/languages/json'));
highLightJs.registerLanguage('lua', require('highlight.js/lib/languages/lua'));
highLightJs.registerLanguage('nginx', require('highlight.js/lib/languages/nginx'));
highLightJs.registerLanguage('php', require('highlight.js/lib/languages/php'));
highLightJs.registerLanguage('python', require('highlight.js/lib/languages/python'));
highLightJs.registerLanguage('python-repl', require('highlight.js/lib/languages/python-repl'));
highLightJs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
highLightJs.registerLanguage('shell', require('highlight.js/lib/languages/shell'));
highLightJs.registerLanguage('sql', require('highlight.js/lib/languages/sql'));
highLightJs.registerLanguage('less', require('highlight.js/lib/languages/less'));
highLightJs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));


let Highlight = {};
// 自定义插件
Highlight.install = function (Vue) {
  // 自定义指令 v-highlight
  Vue.directive('highlight', {
    // 被绑定元素插入父节点时调用
    inserted: function (el) {
      let blocks = el.querySelectorAll('pre code');
      for (let i = 0; i < blocks.length; i++) {
        highLightJs.highlightBlock(blocks[i]);
      }
    },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
    componentUpdated: function (el) {
      let blocks = el.querySelectorAll('pre code');
      for (let i = 0; i < blocks.length; i++) {
        highLightJs.highlightBlock(blocks[i]);
      }
    }
  })
};
export default Highlight;
