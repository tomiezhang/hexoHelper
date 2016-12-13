var Vue = require('vue/dist/vue.js');

console.log(Vue);

var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      {message: 'foosssaaass' },
      {message: 'Barqqqdasdsaasw133889' }
    ]
  }
})
//todo 拆分组件，添加veu热更新插件，实现对.vue文件的热更新，开始写逻辑之类