

### 通过 import 使用 (Vue)

#### 1. 安装插件

```shell
# 通过 npm 安装
npm install @right-menu/vue

# 通过 yarn 安装
yarn add @right-menu/vue
```

#### 2. 使用插件

>> **Vue2.x 注册组件**
```js
import RightMenu from '@right-menu/vue'
Vue.use(RightMenu)
```

>> **Vue3.x 注册组件**
```js
import RightMenu from '@right-menu/vue'
createApp(App).use(RightMenu).mount('#app')
```

#### 3. 在 `xxx.vue` 中使用

```vue
<template>
  <div>
    <!-- 方式1: 指令组件 -->
    <div v-menu="options" style="height: 300px; background-color: #82acff"></div>
    <!-- 方式2: 抽象组件 -->
    <right-menu :options="options">
      <div style="height: 300px; background-color: #82acff"></div>
    </right-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        type: 'li', // type为li是普通按钮
        text: '复制(C)', // 按钮的名称
        callback: () => alert('点击了复制') // 回调函数
      }]
    }
  }
}
</script>
```


<br />

### 通过 script 标签使用 (Vue)

> `CDN链接`: https://cdn.jsdelivr.net/npm/@right-menu/vue/dist/index.umd.min.js

#### Vue2.x 示例

```html
<div id="app">
  <!-- 方式1: 指令组件 -->
  <div v-menu="options" style="height: 300px; background-color: #82acff"></div>
  <!-- 方式2: 抽象组件 -->
  <right-menu :options="options">
    <div style="height: 300px; background-color: #82acff"></div>
  </right-menu>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@vue/composition-api@1.2.4/dist/vue-composition-api.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-demi@0.11.4/lib/index.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@right-menu/vue/dist/index.umd.min.js"></script>
<script>
  new Vue({
    el: '#app',
    data () {
      return {
        options: [{
          type: 'li', // type为li是普通按钮
          text: '复制(C)', // 按钮的名称
          callback: () => alert('点击了复制') // 回调函数
        }]
      }
    }
  })
</script>
```

#### Vue3.x 示例

```html
<div id="app">
  <!-- 方式1: 指令组件 -->
  <div v-menu="options" style="height: 300px; background-color: #82acff"></div>
  <!-- 方式2: 抽象组件 -->
  <right-menu :options="options">
    <div style="height: 300px; background-color: #82acff"></div>
  </right-menu>
</div>

<script src="https://cdn.bootcdn.net/ajax/libs/vue/3.1.5/vue.global.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-demi@0.11.4/lib/index.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@right-menu/vue/dist/index.umd.min.js"></script>
<script>
  const app = Vue.createApp({
    data() {
      return {
        options: [{
          type: 'li', // type为li是普通按钮
          text: '复制(C)', // 按钮的名称
          callback: () => alert('点击了复制') // 回调函数
        }]
      }
    },
  }).use(RightMenu).mount('#app')
</script>
```
