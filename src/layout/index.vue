<!--
  功能：Layout布局
  作者：pancheng
  邮箱：754724101@qq.com
  时间：2022年02月15日 16:33:52
  版本：v1.0
-->
<script lang="ts">
    import {
        defineComponent,
        reactive,
        toRefs,
        watch,
        computed,
        getCurrentInstance
    } from 'vue'
    import router from '../router/index';
    import {
        MenuFoldOutlined,
        MenuUnfoldOutlined,
        HomeFilled,
        MailOutlined,
        DesktopOutlined,
        AppstoreFilled,
        ProfileFilled,
        ReadFilled,
        IeSquareFilled
    } from '@ant-design/icons-vue'
    import HeaderVue from './header.vue';
    import {
        isExternal
    } from '@/utils/utils';
    export default defineComponent({
        setup() {
            const instance = getCurrentInstance()
            const _this = instance.appContext.config.globalProperties
            const state = reactive({
                collapsed: false,
                selectedKeys: [_this.$route.path],
                rootSubmenuKeys: [],
                openKeys: ['sub1'],
                preOpenKeys: ['sub1'],
            });
            const routeList = router.options.routes
            const routes = routeList.filter(i => !i.hidden)
            const key = computed(() => {
                return _this.$route.path
            })
            watch(
                () => state.openKeys,
                (val, oldVal) => {
                    state.preOpenKeys = oldVal;
                },
            );
            const onOpenChange = (openKeys: string[]) => {
                const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
                if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
                    state.openKeys = openKeys;
                } else {
                    state.openKeys = latestOpenKey ? [latestOpenKey] : [];
                }
            };
            const toggleCollapsed = () => {
                state.collapsed = !state.collapsed;
                state.openKeys = state.collapsed ? [] : state.preOpenKeys;
            };
            const menuItemClick = ({ key }) => {
                if (isExternal(key)) {
                    window.open(key)
                } else {
                    _this.$router.replace({
                        path: key
                    })
                }
            }
            return {
                key,
                ...toRefs(state),
                toggleCollapsed,
                menuItemClick,
                onOpenChange,
                routes
            };
        },

        components: {
            MenuFoldOutlined,
            MenuUnfoldOutlined,
            HomeFilled,
            MailOutlined,
            DesktopOutlined,
            AppstoreFilled,
            ProfileFilled,
            ReadFilled,
            IeSquareFilled,
            HeaderVue
        },
    });
</script>
<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <!-- 左侧 -->
        <a-layout-sider v-model:collapsed="collapsed">
            <!-- logo区域 -->
            <div class="header-logo">
                <a href="/home">
                    <img src="../assets/logo.png" class="logo" alt="logo">
                    <span class="title" v-if="!collapsed">Vite + Vue3</span>
                    <span v-else></span>
                </a>
            </div>
            <!-- 侧边菜单  从router取数据 -->
            <a-menu mode="inline" theme="dark" v-model:openKeys="openKeys" @openChange="onOpenChange"
                    v-model:selectedKeys="selectedKeys" @click="menuItemClick">
                <template v-for="(item,index) in routes" :key="index">
                    <template v-if="item.children.length>1">
                        <a-sub-menu :key="item.path" :title="item.meta.title">
                            <template #icon>
                                <component :is="item.meta.icon"></component>
                            </template>
                            <template v-for="(sub,index) in item.children" :key="`sub`+index">
                                <a-sub-menu :key="sub.path" v-if="sub.children&&sub.children.length>0"
                                            :title="sub.meta.title">
                                    <template v-for="(child,index) in sub.children" :key="`child`+index">
                                        <a-sub-menu :key="child.path" v-if="child.children&&child.children.length>0" :title="child.meta.title">
                                                <a-menu-item v-for="(last,index) in child.children" :key="last.path">
                                                    <span>{{last.meta.title}}</span>
                                                </a-menu-item>
                                        </a-sub-menu>
                                        <a-menu-item :key="child.path" v-else>
                                            <span>{{child.meta.title}}</span>
                                        </a-menu-item>
                                    </template>
                                </a-sub-menu>
                                <a-menu-item :key="sub.path" v-else>
                                    <span>{{sub.meta.title}}</span>
                                </a-menu-item>
                            </template>
                        </a-sub-menu>
                    </template>
                    <template v-else>
                        <a-menu-item :key="item.children[0].path">
                            <template #icon>
                                <component :is="item.children[0].meta.icon"></component>
                            </template>
                            {{ item.children[0].meta.title }}
                        </a-menu-item>
                    </template>
                </template>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <!-- 顶部区域 -->
            <a-layout-header style="background: #fff; padding: 0">
                <div class="header-left">
                    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
                    <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
                </div>
                <div class="header-right">
                    <HeaderVue />
                </div>
            </a-layout-header>
            <!-- 内容区域 -->
            <a-layout-content :style="{ margin: '15px', padding: '20px', background: '#fff', minHeight: '280px' }">
                <!-- 面包屑 -->
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<style lang="less">
    #components-layout-demo-custom-trigger {
        width: 100vw;
        height: 100vh;
    }

    #components-layout-demo-custom-trigger .header-logo {
        height: 35px;
        margin: 13px;
        overflow: hidden;

        .title {
            color: #fff;
            font-size: 20px;
            margin: 0 0 0 12px;
            font-weight: 600;
            vertical-align: middle;
            z-index: -1;
        }
    }

    #components-layout-demo-custom-trigger .logo {
        width: 35px;
        height: 36px;
    }

    #components-layout-demo-custom-trigger .trigger {
        font-size: 20px;
        line-height: 64px;
        cursor: pointer;
        transition: color 0.3s;
    }

    #components-layout-demo-custom-trigger .trigger:hover {
        color: #1890ff;
    }

    .header-left {
        float: left;
        margin-left: 20px;
    }

    .header-right {
        float: right;
        margin-right: 20px;
    }
</style>