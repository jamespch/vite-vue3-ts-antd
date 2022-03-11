<!--
  功能：图表展示
  作者：pancheng
  邮箱：754724101@qq.com
  时间：2022年03月08日 16:01:52
  版本：v1.0
-->
<script lang="ts">
  import {
    ref,
    defineComponent,
    toRefs
  } from 'vue';
  import echart1 from './model/echart1.vue'
  import echart2 from './model/echart2.vue'
  import echart3 from './model/echart3.vue'
  import echart4 from './model/echart4.vue'
  export default defineComponent({
    setup() {
      return {}
    },
    components: {
      echart1,
      echart2,
      echart3,
      echart4,
    },
  })
</script>
<template>
  <div class="appMain">
    <div class="chart">
      <a-row type="flex" :gutter="16">
        <a-col :span="12">
          <a-card hoverable title="CPU使用率">
            <echart1 />
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card hoverable title="项目技术栈">
            <echart2 />
          </a-card>
        </a-col>
      </a-row>
      <a-divider />
      <a-row type="flex" :gutter="16">
        <a-col :span="12">
          <a-card hoverable title="用户类型分析">
            <echart3 />
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card hoverable title="项目周活跃">
            <echart4 />
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<style lang="less" scoped>
</style>