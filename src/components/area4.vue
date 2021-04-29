<template>
  <div class="page" :class="up?'up':''" id="navbar">
	<chart1>
		<h4 class="title title1">小程序7日访问时长</h4>
	</chart1>
	<chart2>
		<h4 class="title title2">党建魔方各模块本周访问次数</h4>
	</chart2>
	<ul class="list flex" ref="navbar">
		<li class="item" v-for="(itme,index) in 4" :key="index" :class="currentIndex === index?`nav${index} active` : `nav${index}`" @click="handleClick(index)"></li>
	</ul>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import chart1 from './chart1'
import chart2 from './chart2'
    export default {
      data() {
		return {
			currentIndex: -1,
			up: false
		}
	  },
	  components: {
		chart1,
		chart2,
	  },
	  methods: {
		  handleClick(index) {
			if (this.currentIndex === index) {
				return
			}
			this.currentIndex = index
			PubSub.publish('change', index)
			this.up = true
		  },
		  toggle() {
			  this.up = !this.up
		  }
	  },
	  mounted() {
		this.$nextTick(() => {
			document.querySelector('#navbar').addEventListener('click', (e) => {
				if (!this.$refs.navbar.contains(e.target)) {
				PubSub.publish('change')
				this.up = false
				this.currentIndex = -1
			}
		  })
		})
	  }
    }
</script>

<style lang="less" scoped>
  .page {
    position: absolute;
    width: 1813px;
    height: 294px;
    top: 738px;
    left: 54px;
    background: url(../assets/bg4.png) no-repeat;
	background-size: 100%;
	cursor: pointer;
	transition: all 0.8s;
	&.up {
		top: 67px;
	}
	.title {
		position: absolute;
		top: 82px;
		color: #fff895;
		font-size: 22px;
		font-weight: normal;
		&.title1 {
			left: 110px;
		}
		&.title2 {
			right: 96px;
		}
	}
	.list {
		margin-top: 80px;
	}
	.item {
		width: 150px;
		height: 181px;
		background-size: cover;
		background-repeat: no-repeat;
		cursor: pointer;
		& + .item {
			margin-left: 60px;
		}
	}
	.nav0 {
		background-image: url(../assets/nav0_0.png);
		&.active {
			background-image: url(../assets/nav0.png);
		}
	}
	.nav1 {
		background-image: url(../assets/nav1_1.png);
		&.active {
			background-image: url(../assets/nav1.png);
		}
	}
	.nav2 {
		background-image: url(../assets/nav2_2.png);
		&.active {
			background-image: url(../assets/nav2.png);
		}
	}
	.nav3 {
		background-image: url(../assets/nav3_3.png);
		&.active {
			background-image: url(../assets/nav3.png);
		}
	}
  }
</style>