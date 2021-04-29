<template>
    <div class="page" :class="up ? 'up' : ''">
        <swiper :options="swiperOption" v-if="list.length">
            <swiper-slide
                class="swiper-slide clearfix"
                v-for="(item, index) in list"
                :key="index"
            >
                <div
                    class="item"
                    v-for="(v, i) in item"
                    :key="i"
                    :style="{ 'background-image': `url(https://api.shi1.cn/Common/DangJian/9999/Texture/${v.url})`}"
                >
					<div class="time">{{v.time}}</div>
				</div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
	import PubSub from 'pubsub-js'
	import axios from 'axios'
    export default {
      data() {
		return {
			up: false,
			swiperOption: {
				autoplay: {
					delay: 10000
				},
				speed: 3000,
				loop: true,
				disableOnInteraction: false,
				mousewheel: true
			},
			list: []
		}
	  },
	  methods: {
		  toggle() {
			  this.up = !this.up
		  },
		  group(array, subGroupLength) {
			let index = 0
			let newArray = []
			while (index < array.length) {
				newArray.push(array.slice(index, index += subGroupLength))
			}
			console.log(newArray)
			return newArray
	  	 },
		  getRandomTime(startTime = '2021/4/1') {
			  const start = new Date(startTime).getTime()
			  const end = new Date().getTime()
			  const dis = end - start
			  const randomTime = start + Math.random() * dis
			  const date = new Date(randomTime)
			  const year = date.getFullYear()
			  const month = date.getMonth() + 1
			  const day = date.getDate()
			  return `${year}/${month}/${day}`
		  },
		  sortKey(array, key) {
				return array.sort(function(a, b) {
				var x = new Date(a[key]).getTime()
				var y = new Date(b[key]).getTime()
				return x < y ? -1 : x > y ? 1 : 0
				})
			},
			newdataList(list) {
				return this.sortKey(list, 'time')
			}
	  },
	  created() {
		  axios.get('https://api.shi1.cn/wjw/handler.ashx?type=dangjian&action=GetFileImageArray&site=9999').then(res => {
			  let list = Object.values(res.data)
			  list = list.map(item => {
				  return {
					  url: item,
					  time: this.getRandomTime()
				  }
			  })
			  list = this.newdataList(list)
			  console.log('kli', list)
			  this.list = this.group(list, 18)
			  if (this.list.length === 1) {
				  this.$set(this.swiperOption, 'loop', false)
			  }
		  })
	  },
	  mounted() {
		  PubSub.subscribe('change', (msg, data) => {
			  if (data === 3) {
				  this.up = true
			  } else {
				  this.up = false
			  }
		  })
	  },
	  computed: {
		  format() {
			  return (index) => {
				  return `${index}`.padStart(3, 0)
			  }
		  }
	  }
    }
</script>

<style lang="less">
.swiper-slide {
    width: 1813;
    height: 514px;
    cursor: pointer;
    .item {
		position: relative;
		float: left;
        width: 298px;
        height: 166px;
        margin-bottom: 5px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        & + .item {
            margin-left: 5px;
        }
        &:nth-of-type(6n + 1) {
            margin-left: 0;
        }
    }
}
</style>

<style lang="less" scoped>
.page {
    position: absolute;
    width: 1813px;
    height: 516px;
    top: 1480px;
    left: 54px;
    transition: all 0.8s;
    &.up {
        top: 375px;
    }
}
.time {
	color: #fff;
	font-size: 20px;
	position: absolute;
	right: 10px;
	bottom: 10px;
}
</style>