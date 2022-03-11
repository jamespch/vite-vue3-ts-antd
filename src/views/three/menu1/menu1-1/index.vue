<!--
  功能：List列表
  作者：pancheng
  邮箱：754724101@qq.com
  时间：2022年03月09日 16:33:52
  版本：v1.0
-->
<script lang="ts">
  import {
    StarOutlined,
    LikeOutlined,
    MessageOutlined
  } from '@ant-design/icons-vue';
  import {
    defineComponent,
    ref
  } from 'vue';

  const listData: Record < string, string > [] = [];

  for (let i = 0; i < 24; i++) {
    listData.push({
      href: 'https://www.antdv.com/',
      title: `用户昵称 NO.${i}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Parting is for the next meeting, you have to do better than me',
      content: 'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。',
    });
  }

  export default defineComponent({
    components: {
      StarOutlined,
      LikeOutlined,
      MessageOutlined,
    },
    setup() {
      const visible = ref < boolean > (true);
      const handleClose = () => {
        visible.value = false;
      };
      const pagination = {
        onChange: (page: number) => {
          console.log(page);
        },
        pageSize: 3,
      };
      const actions: Record < string, string > [] = [{
          type: 'StarOutlined',
          text: '156'
        },
        {
          type: 'LikeOutlined',
          text: '156'
        },
        {
          type: 'MessageOutlined',
          text: '2'
        },
      ];
      return {
        listData,
        pagination,
        actions,
        visible,
        handleClose,
      };
    },
  });
</script>
<template>
  <div class="appMain">
    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
      <template #footer>
        <a-alert message="Info Text" v-if="visible"
                 description="These are just some usage examples" type="info" closable
                 :after-close="handleClose" />
      </template>
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template #actions>
            <span v-for="{ type, text } in actions" :key="type">
              <component v-bind:is="type" style="margin-right: 8px;cursor: pointer;" />
              {{ text }}
            </span>
          </template>
          <template #extra>
            <img width="270" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
          </template>
          <a-list-item-meta :description="item.description">
            <template #title>
              <a href="javaScript:;">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar :src="item.avatar" /></template>
          </a-list-item-meta>
          {{ item.content }}
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>