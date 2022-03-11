<template>
    <div id="mycharts1" ref="myRef1" class="chart-box" />
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
            const _this = instance.appContext.config.globalProperties
            const myRef1 = ref(undefined);
            const initT = (dom: any) => {
                dom.setOption({
                    series: [{
                        type: 'gauge',
                        progress: {
                            show: true,
                            width: 15
                        },
                        axisLine: {
                            lineStyle: {
                                width: 15
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            distance: 3,
                            length: 5,
                            lineStyle: {
                                width: 2,
                                color: '#999'
                            }
                        },
                        axisLabel: {
                            distance: 18,
                            color: '#999',
                            fontSize: 10
                        },
                        anchor: {
                            show: true,
                            showAbove: true,
                            size: 15,
                            itemStyle: {
                                borderWidth: 10
                            }
                        },
                        title: {
                            show: false
                        },
                        detail: {
                            valueAnimation: true,
                            fontSize: 30,
                            offsetCenter: [0, '70%']
                        },
                        data: [{
                            value: 75
                        }]
                    }]
                });
            };
            onMounted(() => {
                const myChart = _this.echarts.init(myRef1.value,'dark');
                initT(myChart);
            })
            return {
                myRef1
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