<template>
  <div >
    <slot></slot>
    <div id="chart2" class="chart"></div>
  </div>
</template>

<script>
    import echarts from "echarts"
    export default {
        data() {
          return {
            ops: {
              yAxis: [
                {
                  type: 'category',
                  data: ['党建导航', '党建学习', '学习视频', '拍照留念'],
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                  axisLabel: {
                    color: '#fedda8',
                    fontSize: 18
                  },
                  offset: 7
                }
              ],
              xAxis: [
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
                  min: 0,
                  max: 500,
                  // data: [0, 20, 40, 60, 80, 100, 150, 200, 300, 500],
                  splitNumber: 9,
                  axisLabel: {
                    color: '#fedda8',
                    fontSize: 14,
                    // formatter: '{value} %'
                  }
                },
                // {
                //   type: 'value',
                //   min: 0,
                //   max: 10,
                //   show: false
                // }
              ],
              grid: {
                left: 87
              },
              series: [
                {
                    type: 'bar',
                    stack: '广告',
                    barWidth: 10,
                    barGap: '8%',
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 1, 0,
                      [
                          { offset: 0, color: '#970d01' },
                          { offset: 1, color: '#ffbd01' }
                      ]
                    ),
                    data: [40, 80, 300, 150]
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
          //   return Math.ceil(45 * Math.random())
          // }
        },
        mounted() {
          let myChart = this.$echarts.init(document.querySelector('#chart2'))
          myChart.setOption(this.ops)
          setInterval(() => {
            // let list = this.formatData()
            this.$set(this, 'ops', {
              yAxis: [
                {
                  type: 'category',
                  data: ['党建导航', '党建学习', '学习视频', '拍照留念'],
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                  axisLabel: {
                    color: '#fedda8',
                    fontSize: 18
                  },
                  offset: 7
                }
              ],
              xAxis: [
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
                  min: 0,
                  max: 500,
                  // data: [0, 20, 40, 60, 80, 100, 150, 200, 300, 500],
                  splitNumber: 9,
                  axisLabel: {
                    color: '#fedda8',
                    fontSize: 14,
                    // formatter: '{value} %'
                  }
                },
                // {
                //   type: 'value',
                //   min: 0,
                //   max: 10,
                //   show: false
                // }
              ],
              grid: {
                left: 87
              },
              series: [
                {
                    type: 'bar',
                    stack: '广告',
                    barWidth: 10,
                    barGap: '8%',
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 1, 0,
                      [
                          { offset: 0, color: '#970d01' },
                          { offset: 1, color: '#ffbd01' }
                      ]
                    ),
                    data: [40, 80, 300, 150]
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
    width: 440px;
    height: 238px;
    position: absolute;
    top: 60px;
    right: 0px;
  }
</style>