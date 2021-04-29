<template>
  <div >
    <slot name="header"></slot>
    <div id="chart5" class="chart"></div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
    export default {
        data() {
          return {
            ops: {
              yAxis: [
                {
                  type: 'category',
                  data: ['党支部5', '党支部4', '党支部3', '党支部2', '党支部1'],
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                  axisLabel: {
                    color: '#fedda8',
                    fontSize: 14
                  },
                  // offset: -20
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
                    show: false
                  },
                  min: 0,
                  max: 100,
                  axisLabel: {
                    show: false
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
                left: 130,
                right: 0
              },
              series: [
                {
                  name: '60-70',
                  type: 'bar',
                  stack: '成绩分布',
                  color: '#ff781e',
                  barWidth: 8,
                  emphasis: {
                      focus: 'series'
                  },
                  data: [30, 20, 40, 30, 40]
                },
                {
                  name: '71-80',
                  type: 'bar',
                  stack: '成绩分布',
                  color: '#fedda8',
                  barWidth: 8,
                  emphasis: {
                    focus: 'series'
                  },
                  data: [40, 20, 20, 30, 10]
                },
                {
                  name: '81-90',
                  type: 'bar',
                  stack: '成绩分布',
                  color: '#bf5c01',
                  barWidth: 8,
                  emphasis: {
                    focus: 'series'
                  },
                  data: [20, 40, 20, 20, 20]
                },
                {
                  name: '91-100',
                  type: 'bar',
                  stack: '成绩分布',
                  color: '#ffcc71',
                  barWidth: 8,
                  emphasis: {
                      focus: 'series'
                  },
                  data: [10, 20, 20, 20, 30]
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
          let myChart = this.$echarts.init(document.querySelector('#chart5'))
          myChart.setOption(this.ops)
          setInterval(() => {
            // let list = this.formatData()
            this.$set(this, 'ops', {
              yAxis: [
                {
                  type: 'category',
                  data: ['党支部5', '党支部4', '党支部3', '党支部2', '党支部1'],
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                  axisLabel: {
                    color: '#fedda8',
                    fontSize: 14
                  },
                  // offset: -20
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
                    show: false
                  },
                  min: 0,
                  max: 100,
                  axisLabel: {
                    show: false
                  }
                },
              ],
              grid: {
                left: 130,
                right: 0
              },
              series: [
                {
                  name: '60-70',
                  type: 'bar',
                  stack: '成绩分布',
                  color: '#ff781e',
                  barWidth: 8,
                  emphasis: {
                      focus: 'series'
                  },
                  data: [30, 20, 40, 30, 40]
                },
                {
                  name: '71-80',
                  type: 'bar',
                  stack: '成绩分布',
                  color: '#fedda8',
                  barWidth: 8,
                  emphasis: {
                    focus: 'series'
                  },
                  data: [40, 20, 20, 30, 10]
                },
                {
                  name: '81-90',
                  type: 'bar',
                  stack: '成绩分布',
                  color: '#bf5c01',
                  barWidth: 8,
                  emphasis: {
                    focus: 'series'
                  },
                  data: [20, 40, 20, 20, 20]
                },
                {
                  name: '91-100',
                  type: 'bar',
                  stack: '成绩分布',
                  color: '#ffcc71',
                  barWidth: 8,
                  emphasis: {
                      focus: 'series'
                  },
                  data: [10, 20, 20, 20, 30]
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
    width: 730px;
    height: 242px;
    position: absolute;
    top: 106px;
    left: 60px;
  }
</style>