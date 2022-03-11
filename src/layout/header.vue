<!--
  功能：顶部区域
  作者：pancheng
  邮箱：754724101@qq.com
  时间：2022年03月05日 15:38:08
  版本：v1.0
-->
<script lang="ts">
    import screenfull from 'screenfull'
    import { Modal } from 'ant-design-vue';
    import Storage from '../utils/stroage';
    import {
        createVNode,
        defineComponent,
        getCurrentInstance
    } from 'vue';
    import {
        BellOutlined,
        FullscreenOutlined,
        FullscreenExitOutlined,
        UserOutlined,
        DownOutlined,
        SmileOutlined,
        GithubOutlined,
        LogoutOutlined,
        ExclamationCircleOutlined
    } from '@ant-design/icons-vue'
    export default defineComponent({
        setup() {
            const num = 2
            const userName = Storage.get('user-name')
            const instance = getCurrentInstance()
            // @ts-ignore
            const _this = instance.appContext.config.globalProperties
            const handleFullScreen = () => {
                if (screenfull.isEnabled) {
                    screenfull.toggle()
                }
            };
            const showConfirm = () => {
                Modal.confirm({
                    title: () => '温馨提示',
                    icon: () => createVNode(ExclamationCircleOutlined),
                    cancelText: () => '取消',
                    okText: () => '确定',
                    okType: 'danger',
                    content: () => '即将退出系统, 请确认是否继续?',
                    onOk() {
                        Storage.remove('access-token')
                        setTimeout(() => _this.$router.push({
                            path: '/login'
                        }));
                    },
                    onCancel() {},
                });
            }
            return {
                num,
                userName,
                screenfull,
                showConfirm,
                handleFullScreen
            }
        },
        components: {
            BellOutlined,
            FullscreenOutlined,
            FullscreenExitOutlined,
            UserOutlined,
            DownOutlined,
            SmileOutlined,
            GithubOutlined,
            LogoutOutlined,
            ExclamationCircleOutlined
        }
    });
</script>
<template>
    <div class="header-container">
        <!-- 消息 -->
        <div class="message">
            <a-badge :count="num">
                <a href="#" class="head-example">
                    <BellOutlined :style="{fontSize: '20px'}" />
                </a>
            </a-badge>
        </div>
        <!-- 全屏/取消全屏 -->
        <div class="fullscreen" @click="handleFullScreen">
            <a-tooltip placement="top">
                <template #title>
                    <span>{{screenfull.isFullscreen?'退出全屏':'打开全屏'}}</span>
                </template>
                <FullscreenExitOutlined v-if="screenfull.isFullscreen" :style="{fontSize: '20px'}" />
                <FullscreenOutlined v-else :style="{fontSize: '20px'}" />
            </a-tooltip>
        </div>
        <!-- 用户信息 -->
        <div class="userinfo">
            <a-avatar style="background-color: #1890ff">
                <template #icon>
                    <UserOutlined /></template>
            </a-avatar>
            <a-dropdown>
                <a class="ant-dropdown-link" @click.prevent>
                    {{userName}}
                    <DownOutlined />
                </a>
                <template #overlay>
                    <a-menu>
                        <a-menu-item class="dropdown-item">
                            <a-popover placement="left" trigger="click" title="微信扫码查看" style="width:100px;">
                                <template #content>
                                    <img src="../assets/images/gh_e0f4536767f4_258.jpg" style="width:100px;" alt="">
                                </template>
                                <a href="javascript:;">
                                    <SmileOutlined :style="{fontSize: '14px',marginRight:'5px'}" />关于作者</a>
                            </a-popover>
                        </a-menu-item>
                        <a-menu-item class="dropdown-item">
                            <a href="javascript:;">
                                <GithubOutlined :style="{fontSize: '14px',marginRight:'5px'}" />Github仓库</a>
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item class="dropdown-item" @click="showConfirm">
                            <a href="javascript:;">
                                <LogoutOutlined :style="{fontSize: '14px',marginRight:'5px'}" />退出登录</a>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
        </div>
    </div>
</template>
<style lang="less">
    .header-container {
        display: flex;
    }

    .fullscreen {
        margin: 0 20px;
    }

    .userinfo {
        width: 120px;
        display: flex;
        /* Safari */
        display: -webkit-flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
    }

    .dropdown-item {
        vertical-align: middle;
    }

    .head-example {
        width: 30px;
        height: 30px;
        border-radius: 4px;
        margin-left: 10px;
        display: inline-block;
    }
</style>