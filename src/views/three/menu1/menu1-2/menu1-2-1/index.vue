<!--
  功能：描述卡片
  作者：pancheng
  邮箱：754724101@qq.com
  时间：2022年03月09日 16:33:52
  版本：v1.0
-->
<template>
  <div class="appMain">
    <a-card hoverable title="用户信息">
      <a-descriptions layout="vertical" bordered>
        <a-descriptions-item label="用户名">张三</a-descriptions-item>
        <a-descriptions-item label="昵称">法外狂徒</a-descriptions-item>
        <a-descriptions-item label="性别">
          <a-tag color="#108ee9">男</a-tag>
        </a-descriptions-item>
        <a-descriptions-item label="注册时间">2022-02-24 18:00:00</a-descriptions-item>
        <a-descriptions-item label="更新时间" :span="2">2022-03-10 15:00:00</a-descriptions-item>
        <a-descriptions-item label="工作单位"  :span="3">深圳市XXX网络科技有限公司</a-descriptions-item>
        <a-descriptions-item label="在线状态">
          <a-badge status="processing" text="在线" />
        </a-descriptions-item>
        <a-descriptions-item label="从事职业">前端开发</a-descriptions-item>
        <a-descriptions-item label="工作年限">5年</a-descriptions-item>
        <a-descriptions-item label="其他信息">
          <a-row>
            <a-col :span="12">
              爱好: 女
            </a-col>
            <a-col :span="12">
              性格: 外向开朗
            </a-col>
            <a-col :span="12">
              年龄: 保密
            </a-col>
            <a-col :span="12">
              兴趣: 打游戏
            </a-col>
            <a-col :span="12">
              籍贯: 湖北
            </a-col>
            <a-col :span="12">
              联系方式: 暂无
            </a-col>
          </a-row>
        </a-descriptions-item>
      </a-descriptions>
    </a-card>
  </div>
</template>

<style></style>