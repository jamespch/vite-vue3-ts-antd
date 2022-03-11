<template>
    <div id="mmycharts2" ref="myRef2" class="chart-box" />
</template>

<script lang="ts">
    import {
        defineComponent,
        getCurrentInstance,
        ref,
        onMounted
    } from 'vue';
    export default defineComponent({
        setup() {
            const instance = getCurrentInstance()
            // @ts-ignore
            const _this = instance.appContext.config.globalProperties
            const myRef2 = ref(undefined);
            const initT = (dom: any) => {
                dom.setOption({
                    series: [{
                        name: 'Nightingale Chart',
                        type: 'pie',
                        radius: [20, 80],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 8
                        },
                        data: [{
                                value: 40,
                                name: 'Vue3'
                            },
                            {
                                value: 38,
                                name: 'TypeScript'
                            },
                            {
                                value: 32,
                                name: 'Vite'
                            },
                            {
                                value: 30,
                                name: 'Vuex'
                            },
                            {
                                value: 28,
                                name: 'Vue-router'
                            },
                            {
                                value: 26,
                                name: 'Ant Design Vue'
                            },
                            {
                                value: 22,
                                name: 'Echarts'
                            }
                        ]
                    }]
                });
            };
            onMounted(() => {
                const myChart = _this.echarts.init(myRef2.value, 'dark');
                initT(myChart);
            })
            return {
                myRef2
            };
        }
    });
</script>

<style lang="less" scoped>
    .chart-box {
        width: 25vw;
        height: 28vh;
        margin: 0 auto;
    }
</style>