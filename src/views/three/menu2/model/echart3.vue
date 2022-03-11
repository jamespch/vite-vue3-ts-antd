<template>
    <div id="mycharts3" ref="myRef3" class="chart-box" />
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
            const myRef3 = ref(undefined);
            const initT = (dom: any) => {
                dom.setOption({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            // Use axis to trigger tooltip
                            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                        }
                    },
                    grid: {
                        top: '3%',
                        left: '5%',
                        right: '2%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        data: ['一季度', '二季度', '三季度', '四季度']
                    },
                    series: [{
                            name: '新增用户',
                            type: 'bar',
                            stack: 'total',
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [2, 5, 4, 3, 1, 5, 4]
                        },
                        {
                            name: '裂变用户',
                            type: 'bar',
                            stack: 'total',
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [3, 4, 1, 5, 7, 2, 5]
                        },
                        {
                            name: '潜水用户',
                            type: 'bar',
                            stack: 'total',
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [2, 1, 1, 2, 3, 3, 3]
                        },
                        {
                            name: '日活用户',
                            type: 'bar',
                            stack: 'total',
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [1, 2, 2, 1, 1, 3, 4]
                        },
                        {
                            name: '基础用户',
                            type: 'bar',
                            stack: 'total',
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [8, 8, 9, 8, 12, 13, 13]
                        }
                    ]
                });
            };
            onMounted(() => {
                const myChart = _this.echarts.init(myRef3.value, 'dark');
                initT(myChart);
            })
            return {
                myRef3
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