<template>
  <div>
    <p>数据状态：{{ loadingM }}</p>
    <button @click="postAjax">发送请求</button>
  </div>
</template>


<script>
// 假装自己是异步请求
function sleep(params){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ code: 200, msg: 'ok', data: [], params: params + '--sleep' })
    }, 1000)
  })
}

export default {
  name: 'app',
  data() {
    return {
      test: ''
    }
  },
  mounted() {

  },
  methods: {
    async postAjax() {
      const res = await sleep()
      console.log(res.msg)
    }
  }
};
</script>


<style>
html,
body {
  height: 100%;
  width: 100%;
}
* {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
#app {
  height: 100%;
}
.el-menu {
  border: 0 none !important;
}
.el-menu--horizontal {
  border: 0 none !important ;
}
/*滚动条*/
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  /* background-color: #f1f1f1; */
  background-color: transparent;
  border-radius: 10px;
}

.fl {
  float: left;
}
.fr {
  float: right;
}
.pointer {
  cursor: pointer;
}
.oh {
  overflow: hidden;
}
.el-message {
  top: 60px;
}
</style>
