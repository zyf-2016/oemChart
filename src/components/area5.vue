<template>
  <div class="page" :class="up?'up':''">
	  <chart3>
		  <h4 class="title title1">点击次数统计</h4>
	  </chart3>
	  <chart4>
		  <h4 class="title title2">时长统计(小时)</h4>
	  </chart4>
  </div>
</template>

<script>
	import PubSub from 'pubsub-js'
	import chart3 from './chart3'
	import chart4 from './chart4'
    export default {
      data() {
		return {
			up: false
		}
	  },
	  components: {
		chart3,
		chart4,
	  },
	  methods: {
		  toggle() {
			  this.up = !this.up
		  }
	  },
	  mounted() {
		  PubSub.subscribe('change', (msg, data) => {
			  if (data === 0) {
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
	.title {
		position: absolute;
		color: #fff895;
		font-size: 22px;
		font-weight: normal;
		&.title1 {
			left: 898px;
			top: 23px;
		}
		&.title2 {
			left: 890px;
			top: 276px;
		}
	}
  }
</style>