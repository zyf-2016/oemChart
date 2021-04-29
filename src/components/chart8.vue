<template>
  <div>
    <slot></slot>
    <div id="chart8" class="chart"></div>
  </div>
</template>

<script>
    import echarts from "echarts"
    export default {
        data() {
          return {
            ops: {
              xAxis: {
                  type: 'category',
                  data: ['习近平新时代中国特色社会主义30讲', '党的宗旨', '党员的权力', '党员义务', '中国共产党章程', '三会一课制度', '中国政要', '一大至十九大历程介绍', '共产党网', '人民网', '学习强国网', '中国共青团网'],
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                  interval: 0,
                  axisLabel: {
                    color: '#fedda8',
                    fontSize: 14,
                    formatter: function(params) {
                      var newParamsName = "" // 最终拼接成的字符串
                      var paramsNameNumber = params.length // 实际标签的个数
                      var provideNumber = 6 // 每行能显示的字的个数
                      var rowNumber = Math.ceil(paramsNameNumber / provideNumber) //  换行的话，需要显示几行，向上取整
                      /**
                       * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                       */
                      // 条件等同于rowNumber>1
                      if (paramsNameNumber > provideNumber) {
                        /** 循环每一行,p表示行 */
                        for (var p = 0; p < rowNumber; p++) {
                          var tempStr = "" //  表示每一次截取的字符串
                          if (params.match(/[0-9]/g) && p > 1) {
                            var start = p * provideNumber //  开始截取的位置
                            var end = start + provideNumber + 1 //  结束截取的位置
                          } else {
                            var start = p * provideNumber //  开始截取的位置
                            var end = start + provideNumber //  结束截取的位置
                          }
                          // 此处特殊处理最后一行的索引值
                          if (p === rowNumber - 1) {
                            // 最后一次不换行
                            tempStr = params.substring(start, paramsNameNumber)
                          } else {
                            // 每一次拼接字符串并换行
                            tempStr = params.substring(start, end) + "\n"
                          }
                          newParamsName += tempStr //  最终拼成的字符串
                        }
                      } else {
                        // 将旧标签的值赋给新标签
                        newParamsName = params
                      }
                      // 将最终的字符串返回
                      return newParamsName
                    }
                  },
                  offset: 10
                },
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
                  max: 25,
                  axisLabel: {
                    color: '#fedda8',
                    fontSize: 14
                  }
                },
                {
                  type: 'value',
                  min: 0,
                  max: 25,
                  show: false
                }
              ],
              grid: {
                left: 100,
                // right: 0,
                // bottom: 50
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
                    data: [17.5, 10, 12, 8, 16, 20, 16, 17.5, 10, 16, 17.5, 12]
                },
                {
                  data: [17.5, 10, 12, 8, 16, 20, 16, 17.5, 10, 16, 17.5, 12],
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
          //  formatData() {
          //    let list = []
          //    for (let i = 0; i < 7; i++) {
          //      list.push(this.getRandomData())
          //    }
          //    return list
          //  },
          //  getRandomData() {
          //    return Math.ceil(10 * Math.random())
          //  }
        },
        mounted() {
          let myChart = this.$echarts.init(document.querySelector('#chart8'))
          myChart.setOption(this.ops)
          setInterval(() => {
            //  let list = this.formatData()
            this.$set(this, 'ops', {
              xAxis: {
                  type: 'category',
                  data: ['习近平新时代中国特色社会主义30讲', '党的宗旨', '党员的权力', '党员义务', '中国共产党章程', '三会一课制度', '中国政要', '一大至十九大历程介绍', '共产党网', '人民网', '学习强国网', '中国共青团网'],
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                  interval: 0,
                  axisLabel: {
                    color: '#fedda8',
                    fontSize: 14,
                    formatter: function(params) {
                      var newParamsName = "" //  最终拼接成的字符串
                      var paramsNameNumber = params.length //  实际标签的个数
                      var provideNumber = 6 //  每行能显示的字的个数
                      var rowNumber = Math.ceil(paramsNameNumber / provideNumber) //  换行的话，需要显示几行，向上取整
                      /**
                       * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                       */
                      // 条件等同于rowNumber>1
                      if (paramsNameNumber > provideNumber) {
                        /** 循环每一行,p表示行 */
                        for (var p = 0; p < rowNumber; p++) {
                          var tempStr = "" //  表示每一次截取的字符串
                          if (params.match(/[0-9]/g) && p > 1) {
                            var start = p * provideNumber //  开始截取的位置
                            var end = start + provideNumber + 1 //  结束截取的位置
                          } else {
                            var start = p * provideNumber //  开始截取的位置
                            var end = start + provideNumber //  结束截取的位置
                          }
                          // 此处特殊处理最后一行的索引值
                          if (p === rowNumber - 1) {
                            // 最后一次不换行
                            tempStr = params.substring(start, paramsNameNumber)
                          } else {
                            // 每一次拼接字符串并换行
                            tempStr = params.substring(start, end) + "\n"
                          }
                          newParamsName += tempStr //  最终拼成的字符串
                        }
                      } else {
                        // 将旧标签的值赋给新标签
                        newParamsName = params
                      }
                      // 将最终的字符串返回
                      return newParamsName
                    }
                  },
                  offset: 10,
                },
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
                  max: 25,
                  axisLabel: {
                    color: '#fedda8',
                    fontSize: 14
                  }
                },
                {
                  type: 'value',
                  min: 0,
                  max: 25,
                  show: false
                }
              ],
              grid: {
                left: 100,
                // right: 0,
                // bottom: 50
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
                    data: [17.5, 10, 12, 8, 16, 20, 16, 17.5, 10, 16, 17.5, 12]
                },
                {
                  data: [17.5, 10, 12, 8, 16, 20, 16, 17.5, 10, 16, 17.5, 12],
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
    width: 1850px;
    height: 240px;
    position: absolute;
    left: 60px;
    top: 255px;
  }
</style>