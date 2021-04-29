<template>
  <div>
    <slot></slot>
    <div id="chart1" class="chart"></div>
  </div>
</template>

<script>
    import echarts from "echarts"
    export default {
        data() {
          return {
            ops: {
              xAxis: [
                {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
                    offset: 10,
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
                    show: false
                  },
                  min: 0,
                  max: 10,
                  axisLabel: {
                    color: '#fedda8',
                    fontSize: 14
                  }
                },
                {
                  type: 'value',
                  min: 0,
                  max: 10,
                  show: false
                }
              ],
              grid: {
                left: 26,
                right: 0,
                bottom: 30
              },
              series: [
                {
                    type: 'bar',
                    stack: '广告',
                    barWidth: 10,
                    barGap: '10%',
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                          { offset: 1, color: '#970d01' },
                          { offset: 0, color: '#ffbd01' }
                      ]
                    ),
                    data: [3, 4, 3, 5, 7, 1, 1]
                },
                {
                  data: [3, 4, 3, 5, 7, 1, 1],
                  type: 'line',
                  symbol: 'none',
                  lineStyle: {
                    color: '#fedda8',
                    width: 2,
                    type: 'dashed'
                  }
                }
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
          let myChart = this.$echarts.init(document.querySelector('#chart1'))
          myChart.setOption(this.ops)
          setInterval(() => {
            // let list = this.formatData()
            this.$set(this, 'ops', {
              xAxis: [
                {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
                    offset: 10,
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
                    show: false
                  },
                  min: 0,
                  max: 10,
                  axisLabel: {
                    color: '#fedda8',
                    fontSize: 14
                  }
                },
                {
                  type: 'value',
                  min: 0,
                  max: 10,
                  show: false
                }
              ],
              grid: {
                left: 26,
                right: 0,
                bottom: 30
              },
              series: [
                {
                    type: 'bar',
                    stack: '广告',
                    barWidth: 10,
                    barGap: '10%',
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                          { offset: 1, color: '#970d01' },
                          { offset: 0, color: '#ffbd01' }
                      ]
                    ),
                    data: [3, 4, 3, 5, 7, 1, 1]
                },
                {
                  data: [3, 4, 3, 5, 7, 1, 1],
                  type: 'line',
                  symbol: 'none',
                  lineStyle: {
                    color: '#fedda8',
                    width: 2,
                    type: 'dashed'
                  }
                }
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
    width: 400px;
    height: 210px;
    position: absolute;
    top: 60px;
    left: 50px;
  }
</style>