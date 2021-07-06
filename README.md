# vue-loading-mixin

自动为`methods`中的`async`异步函数在data中注册对应的`loading`变量，并且在异步发生和结束时都会改变状态并引发视图联动。

**默认情况下，会在vue文件的data中，自动混入名为 `loadingPluginData_` 的变量名，使用前需要确保不会出现变量名冲突！**

## 安装
````
npm i vue-loading-mixin -S
````

## 简单使用示例：

main.js
```` js
import vueLoadingMixin from 'vue-loading-mixin'
Vue.use(vueLoadingMixin)
````

demo.vue
```` html
<template>
    <div>
        <el-button :loading="loadingPluginData_.onSubmit">提交</el-button>
    <div>
</template>

<script>
    export default {
        data() {
            return {
                // 不需要挂在任何名称。只要保证名称不和 loadingPluginData_ 变量名冲突即可
            }
        },
        methods: {
            async onSubmit(formData) {
                const res = await submitForm()
                .......
            }
        }
    }
</script>
````

## 使用其他变量名


main.js
```` js
import vueLoadingMixin from 'vue-loading-mixin'
Vue.use(vueLoadingMixin, {
    loadingName: 'loadingM'
})
````

demo.vue
```` html
<template>
    <div>
        <el-button :loading="loadingM.onSubmit">提交</el-button>
    <div>
</template>

<script>
    export default {
        data() {
            return {
                // 不需要挂在任何名称。只要保证名称不和 loadingPluginData_ 变量名冲突即可
            }
        },
        methods: {
            async onSubmit(formData) {
                const res = await submitForm()
                .......
            }
        }
    }
</script>
````
