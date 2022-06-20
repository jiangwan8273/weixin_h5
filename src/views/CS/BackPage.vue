<template>
  <keep-alive>
    <div>
      <div>测试拦截返回事件</div>
      <div>
        <input type="text" name id />
      </div>
      <div>{{value}}</div>
      <div @click="change">as</div>
      <!-- 弹出框 -->
      <van-dialog v-model="show" title="标题">
        <div>zhangsan</div>
      </van-dialog>
    </div>
  </keep-alive>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      value: 'zhangsan'
    }
  },
  mounted() {
    window.history.pushState(null, null, '#')
    window.addEventListener('popstate', function () {
      window.history.pushState(null, null, '#')
      this.value = 'qinshi'
      this.change()
    })
  },
  methods: {
    change() {
      this.$toast('asdasds')
      this.show = true
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
