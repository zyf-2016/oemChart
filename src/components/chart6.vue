<template>
  <div>
    <slot name="header"></slot>
    <div id="chart6" class="chart"></div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
    export default {
        data() {
          return {
            ops: {
              xAxis: [
                {
                    type: 'category',
                    data: ['第一周', '第二周', '第三周', '第四周'],
                    axisLine: {
                      show: false
                    },
                    axisTick: {
                      show: false
                    },
                    axisLabel: {
                      color: '#fedda8',
                      fontSize: 14,
                    },
                    // offset: 10,
                }
              ],
              yAxis: [
                {
                  type: 'value',
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                  splitLine: {
                    show: true,
                    lineStyle: {
                      color: '#c96f55'
                    }
                  },
                  min: 50,
                  max: 100,
                  axisLabel: {
                    color: '#fedda8',
                    fontSize: 14
                  }
                }
              ],
              grid: {
                left: 30,
                right: 0,
                bottom: 30
              },
              series: [
                {
                    type: 'bar',
                    name: '党支部5',
                    barWidth: 8,
                    barGap: 1.1,
                    color: '#ff781e',
                    data: [80, 85, 70, 90]
                },
                {
                    type: 'bar',
                    name: '党支部4',
                    barWidth: 8,
                    barGap: 1.1,
                    color: '#fedda8',
                    data: [95, 85, 80, 90]
                },
                {
                    type: 'bar',
                    name: '党支部3',
                    barWidth: 8,
                    barGap: 1.1,
                    color: '#bf5c01',
                    data: [75, 85, 90, 80]
                },
                {
                    type: 'bar',
                    name: '党支部2',
                    barWidth: 8,
                    barGap: 1.1,
                    color: '#ffcc71',
                    data: [80, 90, 75, 80]
                },
                {
                    type: 'bar',
                    name: '党支部1',
                    barWidth: 8,
                    barGap: 1.1,
                    color: '#ff9a36',
                    data: [70, 90, 95, 80]
                },
              ]
            }
          }
        },
        methods: {
          // formatData() {
          //   let list = []
          //   for (let i = 0; i < 7; i++) {
          //     list.push(this.getRandomData())
          //   }
          //   return list
          // },
          // getRandomData() {
          //   return Math.ceil(10 * Math.random())
          // }
        },
        mounted() {
          let myChart = this.$echarts.init(document.querySelector('#chart6'))
          myChart.setOption(this.ops)
          setInterval(() => {
            // let list = this.formatData()
            this.$set(this, 'ops', {
              xAxis: [
                {
                    type: 'category',
                    data: ['第一周', '第二周', '第三周', '第四周'],
                    axisLine: {
                      show: false
                    },
                    axisTick: {
                      show: false
                    },
                    axisLabel: {
                      color: '#fedda8',
                      fontSize: 14,
                    },
                    // offset: 10,
                }
              ],
              yAxis: [
                {
                  type: 'value',
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                  splitLine: {
                    show: true,
                    lineStyle: {
                      color: '#c96f55'
                    }
                  },
                  min: 50,
                  max: 100,
                  axisLabel: {
                    color: '#fedda8',
                    fontSize: 14
                  }
                }
              ],
              grid: {
                left: 30,
                right: 0,
                bottom: 30
              },
              series: [
                {
                    type: 'bar',
                    name: '党支部5',
                    barWidth: 8,
                    barGap: 1.1,
                    color: '#ff781e',
                    data: [80, 85, 70, 90]
                },
                {
                    type: 'bar',
                    name: '党支部4',
                    barWidth: 8,
                    barGap: 1.1,
                    color: '#fedda8',
                    data: [95, 85, 80, 90]
                },
                {
                    type: 'bar',
                    name: '党支部3',
                    barWidth: 8,
                    barGap: 1.1,
                    color: '#bf5c01',
                    data: [75, 85, 90, 80]
                },
                {
                    type: 'bar',
                    name: '党支部2',
                    barWidth: 8,
                    barGap: 1.1,
                    color: '#ffcc71',
                    data: [80, 90, 75, 80]
                },
                {
                    type: 'bar',
                    name: '党支部1',
                    barWidth: 8,
                    barGap: 1.1,
                    color: '#ff9a36',
                    data: [70, 90, 95, 80]
                },
              ]
            })
            myChart.getOption()
            myChart.clear()
            myChart.setOption(this.ops)
          }, 3000)
        }
    }
</script>

<style lang="less" scoped>
  .chart {
    width: 710px;
    height: 216px;
    position: absolute;
    top: 95px;
    right: 80px;
  }
</style>