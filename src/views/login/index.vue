<!--
  功能：注册登录
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
        UnwrapRef,
        getCurrentInstance
    } from 'vue';
    import {
        Storage
    } from '../../utils/stroage';
    import {
        randomNum
    } from '../../utils/utils';
    import {
        ValidateErrorEntity
    } from 'ant-design-vue/es/form/interface';
    import {
        notification
    } from 'ant-design-vue';
    import {
        UserOutlined,
        LockOutlined,
        SafetyOutlined
    } from '@ant-design/icons-vue'
    interface LoginState {
        user: string;
        password: string;
        verification: string;
    }
    interface RegisterState {
        user: string;
        password: string;
        secondary: string;
    }
    export default defineComponent({
        setup() {
            const notReset = true
            const activeKey = ref('login')
            const isConfirm = ref(false);
            const isRegister = ref(false);
            const instance = getCurrentInstance()
            // @ts-ignore
            const _this = instance.appContext.config.globalProperties
            const randomNumber = ref(randomNum())
            const loginState: UnwrapRef < LoginState > = reactive({
                user: 'Admin',
                password: '123456',
                verification: ''
            });
            const registerState: UnwrapRef < RegisterState > = reactive({
                user: '',
                password: '',
                secondary: ''
            });
            const handleFinishFailed = (errors: ValidateErrorEntity < LoginState > ) => {
                console.log(errors);
            };
            const handleFinishFaileds = (errors: ValidateErrorEntity < RegisterState > ) => {
                console.log(errors);
            };
            const randomNumbers = () => {
                randomNumber.value = randomNum()
            }
            const primaryClick = () => {
                isConfirm.value = true
                if (loginState.user == 'Admin') {
                    if (loginState.verification == randomNumber.value) {
                        notification.success({
                            message: '成功',
                            description: '登录成功!',
                            placement: 'topRight',
                            duration: 3
                        });
                        Storage.set('access-token', 'e10adc3949ba59abbe56e057f20f883e')
                        Storage.set('user-name', 'Admin')
                        setTimeout(() => _this.$router.replace({
                            path: '/home'
                        }));
                    } else {
                        notification.error({
                            message: '失败',
                            description: '验证码错误,请检查!',
                            placement: 'topRight',
                            duration: 3
                        });
                        isConfirm.value = false
                    }
                } else {
                    notification.error({
                        message: '失败',
                        description: '账号错误,请检查!',
                        placement: 'topRight',
                        duration: 3
                    });
                    isConfirm.value = false
                }

            }
            const registerClick = () => {
                isRegister.value = true
            }
            return {
                notReset,
                activeKey,
                loginState,
                registerState,
                isConfirm,
                isRegister,
                randomNumber,
                handleFinishFailed,
                handleFinishFaileds,
                primaryClick,
                registerClick,
                randomNumbers
            }
        },
        components: {
            UserOutlined,
            LockOutlined,
            SafetyOutlined
        },
    });
</script>

<template>
    <div class="login-container">
        <div class="left-box"></div>
        <div class="right-box">
            <div class="login-box">
                <div class="login-header">
                    <h1>Vite+Vue3 · 管理系统</h1>
                    <p><span style="white-space: pre-wrap;line-height:30px;">vite2.x + vue3.x + antd-design-vue2.x +
                            typescript4.x + vue-router4.x + vuex4.x</span></p>
                </div>
                <div class="login-content">
                    <a-tabs v-model:activeKey="activeKey" style="margin-bottom:10px;">
                        <!-- 登录 -->
                        <a-tab-pane key="login" tab="登录">
                            <a-form layout="vertical" :model="loginState" @finishFailed="handleFinishFailed">
                                <a-form-item label="用户名">
                                    <a-input v-model:value="loginState.user" placeholder="请输入用户名" :maxlength="11"
                                             allow-clear>
                                        <template #prefix>
                                            <UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
                                    </a-input>
                                </a-form-item>
                                <a-form-item label="密码">
                                    <a-input-password v-model:value="loginState.password" placeholder="请输入密码">
                                        <template #prefix>
                                            <LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
                                    </a-input-password>
                                </a-form-item>
                                <a-form-item label="验证码">
                                    <a-input v-model:value="loginState.verification" :maxlength="4"
                                             placeholder="请输入验证码">
                                        <template #prefix>
                                            <SafetyOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
                                        <template #addonAfter>
                                            <p class="code" @click="randomNumbers">{{randomNumber}}</p>
                                        </template>
                                    </a-input>
                                </a-form-item>
                                <a-form-item>
                                    <a-button type="primary" style="width:100%;" :loading="isConfirm"
                                              @click="primaryClick">登 录</a-button>
                                </a-form-item>
                            </a-form>
                        </a-tab-pane>
                        <!-- 注册 -->
                        <a-tab-pane key="register" tab="注册" force-render>
                            <a-form layout="vertical" :model="registerState" @finishFailed="handleFinishFaileds">
                                <a-form-item label="用户名">
                                    <a-input v-model:value="registerState.user" placeholder="请输入用户名" :maxlength="11"
                                             allow-clear>
                                        <template #prefix>
                                            <UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
                                    </a-input>
                                </a-form-item>
                                <a-form-item label="密码">
                                    <a-input-password v-model:value="registerState.password" placeholder="请输入密码">
                                        <template #prefix>
                                            <LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
                                    </a-input-password>
                                </a-form-item>
                                <a-form-item label="再次确认密码">
                                    <a-input-password v-model:value="registerState.secondary" placeholder="请再次输入密码">
                                        <template #prefix>
                                            <LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
                                    </a-input-password>
                                </a-form-item>
                                <a-form-item>
                                    <a-button type="primary" style="width:100%;" :loading="isRegister"
                                              @click="registerClick">注 册
                                    </a-button>
                                </a-form-item>
                            </a-form>
                        </a-tab-pane>
                    </a-tabs>
                </div>
            </div>
            <div class="copyright">&copy; 2022 潘程科技有限公司 |<a style="color: #0094ff;margin-left: 3px;"
                   href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_back"> 粤ICP备123456789号</a>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .login-container {
        height: 100%;
        width: 100%;
        overflow: hidden;

        .left-box {
            float: left;
            width: calc(100% - 580px);
            height: 100%;
            background-image: url('../../assets/images/login-bg.png');
            background-position: top left;
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }

        .right-box {
            float: right;
            width: 580px;
            height: 100%;
            margin: 0 auto;
            text-align: center;
            overflow: hidden;
            padding-top: 120px;
            font-size: 14px;
            position: relative;

            .copyright {
                text-align: center;
                position: fixed;
                bottom: 20px;
                display: flex;
                right: 120px;
            }

            .login-box {
                width: 90%;
                margin: 0 auto;
                padding: 20px;
            }

            .login-header {
                padding-top: 20px;

                p {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.45);
                }
            }

            .login-content {
                width: 80%;
                margin: 30px auto;

                .code {
                    width: 90px;
                    cursor: pointer;
                    height: 30px;
                    line-height: 30px;
                    font-size: 18px;
                    font-weight: 600;
                    letter-spacing: 2px;

                    .ant-input-group-addon {
                        padding: 0 !important;
                    }
                }

                .login-btn button {
                    width: 100%;
                }

                .tip {
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 20px;

                }
            }
        }
    }
</style>