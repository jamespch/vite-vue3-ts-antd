<template>
    <div id="mycharts4" ref="myRef4" class="chart-box" />
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
            const myRef4 = ref(undefined);
            const initT = (dom: any) => {
                dom.setOption({
                    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    grid: {
                        top: '5%',
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        data: ['一', '二', '三', '四', '五', '六', '日']
                    }],
                    yAxis: [{
                        type: 'value'
                    }],
                    series: [{
                            name: 'Line 1',
                            type: 'line',
                            stack: 'Total',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: '#80FFA5'
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [140, 232, 101, 264, 90, 340, 250]
                        },
                        {
                            name: 'Line 2',
                            type: 'line',
                            stack: 'Total',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: '#00DDFF'
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [120, 282, 111, 234, 220, 340, 310]
                        },
                        {
                            name: 'Line 3',
                            type: 'line',
                            stack: 'Total',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: '#37A2FF'
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [320, 132, 201, 334, 190, 130, 220]
                        },
                        {
                            name: 'Line 4',
                            type: 'line',
                            stack: 'Total',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: '#FF0087'
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [220, 402, 231, 134, 190, 230, 120]
                        },
                        {
                            name: 'Line 5',
                            type: 'line',
                            stack: 'Total',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            label: {
                                show: true,
                                position: 'top'
                            },
                            areaStyle: {
                                opacity: 0.8,
                                color: '#FFBF00'
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [220, 302, 181, 234, 210, 290, 150]
                        }
                    ]
                });
            };
            onMounted(() => {
                const myChart = _this.echarts.init(myRef4.value, 'dark');
                initT(myChart);
            })
            return {
                myRef4
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