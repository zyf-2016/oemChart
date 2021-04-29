<template>
  <div class="page" :class="up?'up':''">
	  <h4 class="date">{{getMonth()}}月成绩总览</h4>
	  <chart5>
		  <h4 class="title title1" slot="header">多个党支部与XX支部的成绩分布</h4>
		  <ul slot="footer" class="flex list1">
			<li class="item flex-start" v-for="(item, index) in list1" :key="index">
				<em :style="{background:item.color}"></em>
				<span>{{item.text}}</span>
			</li>
		  </ul>
	  </chart5>
	  <chart6>
		<h4 class="title title2" slot="header">多个党支部与XX支部的平均分对比</h4>
		<ul slot="footer" class="flex list2">
			<li class="item flex-start" v-for="(item, index) in list2" :key="index">
				<em :style="{background:item.color}"></em>
				<span>{{item.text}}</span>
			</li>
		</ul>
	  </chart6>
  </div>
</template>

<script>
	import PubSub from 'pubsub-js'
	import chart5 from './chart5'
	import chart6 from './chart6'
    export default {
      data() {
		return {
			up: false,
			list1: [
				{
					text: '60-70',
					color: '#ff781e'
				},
				{
					text: '71-80',
					color: '#fedda8'
				},
				{
					text: '81-90',
					color: '#bf5c01'
				},
				{
					text: '91-100',
					color: '#ffcc71'
				},
			],
			list2: [
				{
					text: '党支部5',
					color: '#ff781e'
				},
				{
					text: '党支部4',
					color: '#fedda8'
				},
				{
					text: '党支部3',
					color: '#bf5c01'
				},
				{
					text: '党支部2',
					color: '#bf5c01'
				},
				{
					text: '党支部1',
					color: '#ffcc71'
				},
			]
		}
	  },
	  components: {
		chart5,
		chart6,
	  },
	  methods: {
		toggle() {
			this.up = !this.up
		},
		getMonth() {
			const month = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
			const index = new Date().getMonth()
			return month[index]
		}
	  },
	  mounted() {
		  PubSub.subscribe('change', (msg, data) => {
			  console.log(msg, data)
			  if (data === 1) {
				  this.up = true
			  } else {
				  this.up = false
			  }
		  })
	  }
    }
</script>

<style lang="less" scoped>
  .page {
    position: absolute;
    width: 1813px;
    height: 514px;
    top: 1480px;
    left: 54px;
	transition: all 0.8s;
	&.up {
		top: 375px;
	}
	.date {
		position: absolute;
		color: #ffd475;
		font-weight: normal;
		background: url(../assets/line.png) no-repeat;
		background-size: cover;
		width: 297px;
		height: 47px;
		line-height: 47px;
		text-align: center;
		left: 755px;
		top: 24px;
		font-size: 26px;
		font-weight: normal;
	}
	.title {
		position: absolute;
		font-size: 22px;
		font-weight: normal;
		color: #ffcc71;
		&.title1 {
			top: 118px;
			left: 288px;
		}
		&.title2 {
			top: 118px;
			right: 258px;
		}
	}
	.list1 {
		position: absolute;
		width: 290px;
		left: 315px;
		top: 315px;
	}
	.list2 {
		position: absolute;
		width: 680px;
		right: 90px;
		top: 315px;
	}
	.item {
		em {
			width: 10px;
			height: 10px;
		}
		span {
			color: #fedda8;
			font-size: 14px;
			margin-left: 10px;
		}
		& + .item {
			margin-left: 14px;
		}
	}
	.item2 {
		span {
			margin-left: 58px;
		}
	}
  }
</style>