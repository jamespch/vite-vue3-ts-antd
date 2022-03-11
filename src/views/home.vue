<!--
  功能：项目主页
  作者：pancheng
  邮箱：754724101@qq.com
  时间：2022年02月15日 16:33:52
  版本：v1.0
-->
<script lang="ts">
  import {
    ref,
    defineComponent,
    reactive,
    onMounted,
    toRefs
  } from 'vue';
  import {
    AntDesignOutlined,RiseOutlined, FallOutlined,LikeOutlined,VerticalAlignBottomOutlined
  } from '@ant-design/icons-vue';
  import Storage from '../utils/stroage';
  import request from '../utils/request'
  import {
    format,
    timeFix,
    welcome,
    getWeek
  } from '../utils/utils'
  export default defineComponent({
    setup() {
      const address = localStorage.getItem('position')
      const state = reactive({
        weather: '',
        show: false,
        temperature: '',
        userName: Storage.get('user-name'),
        imgList: ['src/assets/images/001.png', 'src/assets/images/002.png', 'src/assets/images/003.png',
          'src/assets/images/004.png'
        ],
      });
      const getWeather = () => {
        request(
          `https://restapi.amap.com/v3/weather/weatherInfo?key=f1b6d5ca6877aab5b20e3d5949f43454&city=${localStorage.getItem('cityId')}`, {
            data: {},
            body: {}
          }).then((res: any) => {
          if (res.lives && res.count) {
            let info = res.lives[0]
            state.weather = info.weather
            state.temperature = info.temperature
            setTimeout(() => {
              state.show = true
            }, 1500)
          }
        })
      }
      onMounted(() => {
        getWeather()
      })
      return {
        address,
        format,
        timeFix,
        welcome,
        getWeek,
        ...toRefs(state)
      }
    },
    components: {
      AntDesignOutlined,
      RiseOutlined,
      FallOutlined,
      LikeOutlined,
      VerticalAlignBottomOutlined
    },
  })
</script>

<template>
  <div class="appMian">
    <div>
      <a-row :gutter="10" v-if="show">
        <a-col :span="6">
          <a-card hoverable>
            <a-statistic title="vite近况" :value="11.28" :precision="2" suffix="%" :value-style="{ color: '#cf1322' }">
              <template #prefix>
                <RiseOutlined />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card hoverable>
            <a-statistic title="webpack近况" :value="9.3" :precision="2" suffix="%" class="demo-class" :value-style="{ color: '#3f8600' }">
              <template #prefix>
                <FallOutlined />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card hoverable>
            <a-statistic title="项目star" :value="0.1" :precision="2" suffix="k" class="demo-class" :value-style="{ color: '#1890FF' }">
              <template #prefix>
                <LikeOutlined />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card hoverable>
            <a-statistic title="项目download" :value="0.1" :precision="2" suffix="k" class="demo-class" :value-style="{ color: '#FEC339' }">
              <template #prefix>
                <VerticalAlignBottomOutlined />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
      </a-row>
      <a-skeleton v-else active :paragraph="{ rows: 2 }" />
    </div>
    <a-divider />
    <div class="user">
      <div v-if="show">
        <a-descriptions>
          <template #title>
            <a-avatar :size="64" style="background-color: #1890ff;vertical-align: middle;">
              <template #icon>
                <AntDesignOutlined /></template>
            </a-avatar>
            <span class="userName">{{timeFix()}}，{{userName}}，{{welcome()}}</span>
          </template>
          <a-descriptions-item label="当前天气">{{weather}}</a-descriptions-item>
          <a-descriptions-item label="当前温度">{{temperature+'℃'}}</a-descriptions-item>
          <a-descriptions-item label="今日周几">{{getWeek()}}</a-descriptions-item>
          <a-descriptions-item label="登录地点">{{address}}</a-descriptions-item>
          <a-descriptions-item label="登录时间">{{format()}}</a-descriptions-item>
        </a-descriptions>
      </div>
      <a-skeleton v-else avatar active :paragraph="{ rows: 3 }" />
    </div>
    <a-divider />
    <div>
      <a-carousel autoplay effect="fade">
        <div v-for="(item,index) in imgList" :key="index">
          <img :src="item" alt="">
        </div>
      </a-carousel>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .ant-carousel :deep(.slick-slide) {
    img {
      width: 100%;
      height: 46vh;
      min-height: 46vh;
    }
  }

  .user {
    text-align: left;
    margin-bottom: 20px;

    .userName {
      margin-left: 20px;
      font-size: 30px;
      vertical-align: middle;
    }
  }
</style>