<template>
    <div class="wrap">
        <div class="ring" :id="id"></div>
        <div class="circle">
            <div>{{text}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['text', 'id', 'type'],
        data() {
            return {
                // data1: '10',
                // data2: '20',
                // data3: '40',
                // data4: '20',
                // data5: '10',
                ops: {
                    series: [
                        {
                            type: 'pie',
                            color: this.type === '1' ? ['#bf5b01', '#ffcc71', '#fedda8'] : ['#ff781e', '#bf5b01', '#ffcc71', '#ffb15c', '#fedda8'],
                            radius: ['64%', '82%'],
                            startAngle: -90,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            data: this.type === '1' ? [1, 3, 2] : [ 1, 0, 5, 4, 2 ]
                        }
                    ]
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                let myChart = this.$echarts.init(document.querySelector(`#${this.id}`))
                myChart.setOption(this.ops)
                setInterval(() => {
                    // this.data1 = Math.ceil(20 * Math.random())
                    // this.data2 = Math.ceil(20 * Math.random())
                    // this.data3 = Math.ceil(20 * Math.random())
                    // this.data4 = Math.ceil(20 * Math.random())
                    // this.data5 = 100 - this.data1 - this.data2 - this.data3 - this.data4
                    this.$set(this, 'ops', {
                        series: [
                            {
                                type: 'pie',
                                color: this.type === '1' ? ['#bf5b01', '#ffcc71', '#fedda8'] : ['#ff781e', '#bf5b01', '#ffcc71', '#ffb15c', '#fedda8'],
                                radius: ['64%', '82%'],
                                startAngle: -90,
                                label: {
                                    show: false,
                                    position: 'center'
                                },
                                data: this.type === '1' ? [1, 3, 2] : [ 1, 0, 5, 4, 2 ]
                            }
                        ]
                    })
                    myChart.getOption()
                    myChart.clear()
                    myChart.setOption(this.ops)
                }, 3000)
            })
        }
    }
</script>

<style lang="less" scoped>
    .ring {
        width: 150px;
        height: 150px;
    }
    .wrap {
        position: relative;
        width: 150px;
        height: 150px;
        .circle {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 90px;
            height: 90px;
            border: 2px solid #fedda8;
            border-radius: 50%;
            top: 30px;
            left: 30px;
            font-size: 16px;
        }
    }
</style>