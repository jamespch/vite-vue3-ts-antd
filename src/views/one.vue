<!--
  功能：表单示例
  作者：pancheng
  邮箱：754724101@qq.com
  时间：2022年02月17日 16:33:52
  版本：v1.0
-->
<script lang="ts">
  import {
    ValidateErrorEntity
  } from 'ant-design-vue/es/form/interface';
  import moment, {
    Moment
  } from 'moment';
  import {
    notification
  } from 'ant-design-vue';
  import {
    defineComponent,
    reactive,
    ref,
    toRaw,
    UnwrapRef
  } from 'vue';
  interface FormState {
    name: string;
    region: string | undefined;
    date1: Moment | undefined;
    delivery: boolean;
    type: string[];
    rate: Number;
    resource: string;
    desc: string;
  }
  export default defineComponent({
    setup() {
      const formRef = ref();
      const showInfo = ref(false)
      const formState: UnwrapRef < FormState > = reactive({
        name: 'vite+vue3+Ts',
        region: 'qianhou',
        date1: moment('2022-02-28', 'YYYY-MM-DD'),
        delivery: true,
        rate: 4.5,
        type: ['1', '2', '3', '4', '5', '6', '7'],
        resource: '2',
        desc: '这是一个极简的 vue3 管理后台。除了技术栈提供的相关依赖，本模板还集成了动态菜单、路由权限、请求二次封装、公共存储等功能，让开发更加便捷，真正做到开箱即用。',
      });
      const rules = {
        name: [{
            required: true,
            message: '请输入项目名称',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 10,
            message: '长度在3 - 5位之间',
            trigger: 'blur'
          },
        ],
        region: [{
          required: true,
          message: '请选择项目类型',
          trigger: 'change'
        }],
        date1: [{
          required: true,
          message: '请选择上线日期',
          trigger: 'change',
          type: 'object'
        }],
        type: [{
          type: 'array',
          required: true,
          message: '请选择项目技术栈',
          trigger: 'change',
        }, ],
        resource: [{
          required: true,
          message: '请选择项目框架',
          trigger: 'change'
        }],
        rate: [{
          required: true,
          message: '请进行项目评分',
          trigger: 'change'
        }],
        desc: [{
          required: true,
          message: '请输入其他信息',
          trigger: 'blur'
        }],
      };
      setTimeout(() => {
        showInfo.value = true
      }, 2000)
      const onSubmit = () => {
        formRef.value.validate().then(() => {
          console.log('values', formState, toRaw(formState));
          notification.success({
            message: '保存成功',
            description: '表单信息已存储'
          })
        }).catch((error: ValidateErrorEntity < FormState > ) => {
          console.log('error', error);
        });
      };
      const resetForm = () => {
        formRef.value.resetFields();
      };
      return {
        formRef,
        labelCol: {
          span: 2
        },
        wrapperCol: {
          span: 16
        },
        formState,
        rules,
        onSubmit,
        resetForm,
        showInfo
      };
    },
  });
</script>

<template>
  <div class="appMain">
    <div v-if="showInfo">
      <a-card hoverable>
        <a-steps :current="1">
          <a-step title="发起流程" />
          <a-step title="流程中转" />
          <a-step title="审核通过" />
        </a-steps>
      </a-card>
      <a-divider />
      <a-card hoverable title="表单信息" style="text-align: left">
        <a-form ref="formRef" :model="formState" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-item ref="name" label="项目名称" name="name">
            <a-input v-model:value="formState.name" placeholder="请输入" />
          </a-form-item>
          <a-form-item label="项目类型" name="region">
            <a-select v-model:value="formState.region" placeholder="请选择">
              <a-select-option value="qianhou">前后端分离式开发</a-select-option>
              <a-select-option value="houduan">SSR渲染</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="上线日期" required name="date1">
            <a-date-picker v-model:value="formState.date1" format="YYYY-MM-DD" placeholder="请选择" style="width: 100%" />
          </a-form-item>
          <a-form-item label="项目框架" name="resource">
            <a-radio-group v-model:value="formState.resource">
              <a-radio value="1">React</a-radio>
              <a-radio value="2">Vue</a-radio>
              <a-radio value="3">Angular</a-radio>
            </a-radio-group>
          </a-form-item>
          <a-form-item label="是否开源" name="delivery">
            <a-switch checked-children="是" un-checked-children="否" v-model:checked="formState.delivery" />
          </a-form-item>
          <a-form-item label="项目技术栈" name="type">
            <a-checkbox-group v-model:value="formState.type">
              <a-checkbox value="1" name="type">Vite</a-checkbox>
              <a-checkbox value="2" name="type">Vue3</a-checkbox>
              <a-checkbox value="3" name="type">Vuex</a-checkbox>
              <a-checkbox value="4" name="type">Vue-router</a-checkbox>
              <a-checkbox value="5" name="type">Axios</a-checkbox>
              <a-checkbox value="6" name="type">TypeScript</a-checkbox>
              <a-checkbox value="7" name="type">Ant Design Vue</a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="项目评分" name="rate">
            <a-rate v-model:value="formState.rate" allow-half />
          </a-form-item>
          <a-form-item label="其他信息" name="desc">
            <a-textarea v-model:value="formState.desc" :rows="3" showCount :maxlength="255" placeholder="请输入" />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmit">保 存</a-button>
            <a-button style="margin-left: 10px" @click="resetForm">重 置</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
    <div class="loading" v-else>
      <a-spin size="large" tip="Loading..." />
    </div>
  </div>
</template>

<style scoped>
  .stepList {
    margin: 0 auto;
    padding: 30px;
  }
  .loading{
    margin: 200px auto;
    text-align: center;
  }
</style>