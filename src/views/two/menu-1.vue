<!--
  功能：列表信息
  作者：pancheng
  邮箱：754724101@qq.com
  时间：2022年03月09日 15:38:08
  版本：v1.0
-->
<script lang="ts">
  import {
    defineComponent,
    createVNode,
    ref,
    toRefs,
    reactive
  } from 'vue';
  import {
    SearchOutlined,
    PlusOutlined
  } from '@ant-design/icons-vue';
  import {
    Moment
  } from 'moment';
  import {
    Modal
  } from 'ant-design-vue';
  const columns = [{
      title: 'Index',
      dataIndex: 'key',
      width: 80
    }, {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address'
    },
    {
      title: 'Date',
      dataIndex: 'createTime'
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      slots: {
        customRender: 'operation'
      },
    },
  ];
  interface DataItem {
    key: number;
    name: string;
    age: number;
    address: string;
    createTime: Moment | undefined;
  }

  const data: DataItem[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i + 1,
      name: `PanCheng ${i}`,
      age: 28,
      address: `广东省深圳市光明区光明街道 ${i+1}号`,
      createTime: '2022-02-28 11:11:11'
    });
  }

  export default defineComponent({
    setup() {
      const state = reactive({
        loading: true,
        dataSource:[]
      });
      setTimeout(()=>{
        state.dataSource = ref(data);
        state.loading = false
      },1000)
      const edit = (record: any) => {
        Modal.confirm({
          title: () => '编辑信息',
          cancelText: () => '取消',
          okText: () => '确定',
          content: () => createVNode('div',{class:'info'},[
            createVNode('p',{class:'name'},`name: ${record.name}`),
            createVNode('p',{class:'age'},`age: ${record.age}`),
            createVNode('p',{class:'address'},`address: ${record.address}`)
          ]),
          onOk() {
            return new Promise((resolve, reject) => {
              setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onCancel() {},
        });
      }
      return {
        columns,
        edit,
        ...toRefs(state)
      };

    },
    components: {
      SearchOutlined,
      PlusOutlined
    },
  });
</script>
<template>
  <div class="appMain">
    <a-card hoverable>
      <a-row :gutter="16">
        <a-col class="gutter-row" :span="6">
          <a-input prefix="Name:" />
        </a-col>
        <a-col class="gutter-row" :span="6">
          <a-input prefix="Age:" />
        </a-col>
        <a-col class="gutter-row" :span="6">
          <a-input prefix="Sex:" />
        </a-col>
        <a-col class="gutter-row" :span="6">
          <div class="flexBox">
            <a-button type="primary">
              <template #icon>
                <PlusOutlined /></template>
              新增
            </a-button>
            <a-button type="primary">
              <template #icon>
                <SearchOutlined /></template>
              查询
            </a-button>
          </div>
        </a-col>
      </a-row>
    </a-card>
    <a-table class="ant-table-striped" :loading="loading" size="middle" :data-source="dataSource" :columns="columns"
             :scroll="{ x: 1500, y: 900 }" bordered>
      <!-- 重点 record -->
      <template #operation="{ record }">
        <a-button type="link" @click="edit(record)">Edit</a-button>
      </template>
    </a-table>
  </div>
</template>
<style lang="less">
  .ant-table-striped {
    margin-top: 25px;
  }

  .ant-table-striped :deep(.table-striped) td {
    background-color: #fafafa;
  }
</style>