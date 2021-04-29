<template>
  <div class="page" :class="hide?'hide':''">
	  <p>8<span class="unit">人</span></p>
  </div>
</template>

<script>
	import PubSub from 'pubsub-js'
    export default {
		data() {
			return {
				hide: false
			}
		},
		methods: {
			toggle() {
				this.hide = !this.hide
			}
		},
		mounted() {
			PubSub.subscribe('change', (msg, data) => {
				console.log(msg, data, typeof data)
				if (!data && data !== 0) {
					this.hide = false
				} else {
					this.hide = true
				}
			})
		}
    }
</script>

<style lang="less" scoped>
  .page {
    position: absolute;
    width: 970px;
    height: 625px;
    top: 40px;
    left: 486px;
    background: url(../assets/bg3.png) no-repeat;
	background-size: 100%;
	transition: all 0.8s;
	&.hide {
		top: -625px;
	}
	p {
		position: absolute;
		bottom: 0;
		left: 450px;
		color: #ffde00;
		font-weight: bold;
		font-size: 70px;
		line-height: 1;
		.unit {
			font-weight: normal;
			font-size: 38px;
		}
	}
  }
</style>