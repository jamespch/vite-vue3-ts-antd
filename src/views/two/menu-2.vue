<!--
  功能：穿梭框
  作者：pancheng
  邮箱：754724101@qq.com
  时间：2022年03月05日 15:38:08
  版本：v1.0
-->
<script lang="ts">
  import {
    difference
  } from 'lodash';
  import {
    defineComponent,
    ref
  } from 'vue';
  interface MockData {
    key: string;
    title: string;
    description: string;
    disabled: boolean;
  }
  type tableColumn = Record < string, string > ;
  const mockData: MockData[] = [];
  for (let i = 0; i < 30; i++) {
    mockData.push({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
      disabled: i % 4 === 0,
    });
  }

  const originTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

  const leftTableColumns = [{
      dataIndex: 'title',
      title: 'Name',
    },
    {
      dataIndex: 'description',
      title: 'Description',
    },
  ];
  const rightTableColumns = [{
    dataIndex: 'title',
    title: 'Name',
  }, ];

  export default defineComponent({
    setup() {
      const showInfo = ref(false)
      const targetKeys = ref < string[] > (originTargetKeys);
      const disabled = ref < boolean > (false);
      const leftColumns = ref < tableColumn[] > (leftTableColumns);
      const rightColumns = ref < tableColumn[] > (rightTableColumns);

      const onChange = (nextTargetKeys: string[]) => {
        targetKeys.value = nextTargetKeys;
      };
      setTimeout(() => {
        showInfo.value = true
      }, 2000)

      const getRowSelection = ({
        disabled,
        selectedKeys,
        onItemSelectAll,
        onItemSelect,
      }: Record < string, any > ) => {
        return {
          getCheckboxProps: (item: Record < string, string | boolean > ) => ({
            disabled: disabled || item.disabled,
          }),
          onSelectAll(selected: boolean, selectedRows: Record < string, string | boolean > []) {
            const treeSelectedKeys = selectedRows
              .filter(item => !item.disabled)
              .map(({
                key
              }) => key);
            const diffKeys = selected ?
              difference(treeSelectedKeys, selectedKeys) :
              difference(selectedKeys, treeSelectedKeys);
            onItemSelectAll(diffKeys, selected);
          },
          onSelect({
            key
          }: Record < string, string > , selected: boolean) {
            onItemSelect(key, selected);
          },
          selectedRowKeys: selectedKeys,
        };
      };
      return {
        showInfo,
        mockData,
        targetKeys,
        disabled,
        leftColumns,
        rightColumns,
        onChange,
        getRowSelection,
      };
    },
  });
</script>
<template>
  <div class="appMain">
    <a-card hoverable v-if="showInfo">
      <template #title>
        操作:
        <a-switch un-checked-children="启用" checked-children="禁用" v-model:checked="disabled" />
      </template>
      <a-transfer :data-source="mockData" :target-keys="targetKeys" :disabled="disabled" :show-search="true"
                  :filter-option="({inputValue, item}) => item.title.indexOf(inputValue) !== -1" :show-select-all="false"
                  @change="onChange">
        <template #children="{
          direction,
          filteredItems,
          selectedKeys,
          disabled: listDisabled,
          onItemSelectAll,
          onItemSelect,
        }">
          <a-table :row-selection="
            getRowSelection({
              disabled: listDisabled,
              selectedKeys,
              onItemSelectAll,
              onItemSelect,
            })
          " :columns="direction === 'left' ? leftColumns : rightColumns" :data-source="filteredItems" size="small"
                   :style="{ pointerEvents: listDisabled ? 'none' : null }" :custom-row="
            ({ key, disabled: itemDisabled }) => ({
              onClick: () => {
                if (itemDisabled || listDisabled) return;
                onItemSelect(key, !selectedKeys.includes(key));
              },
            })
          " />
        </template>
      </a-transfer>
    </a-card>
    <div class="loading" v-else>
      <a-spin size="large" tip="Loading..." />
    </div>
  </div>
</template>
<style scoped>
  .loading {
    margin: 200px auto;
    text-align: center;
  }
</style>