<template>
	<div class="layer" :key="name">
		<div class="content">
			<div>
				<div class="avatar" :style="{'background-image': `url(${avatar}`}"></div>
				<div class="name">{{name}}</div>
			</div>
			<p>{{text[index]}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['index', 'name', 'avatar'],
		data() {
			return {
				text: [
					'职位：工程师',
					'职位：工程师',
					'职位：工程师',
					'职位：工程师',
					'职位：工程师',
					'职位：工程师',
					'职位：工程师',
					'职位：工程师',
				],
				pos: [
					{
						left: 65
					},
					{
						left: 255
					},
					{
						left: 430
					},
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	@keyframes scale {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}
	.layer {
		width: 700px;
		height: 400px;
		background: rgba(0, 0, 0, .6);
		position: absolute;
		left: 610px;
		top: 340px;
		animation: scale .8s ease;
	}
	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		height: 100%;
		.avatar {
			width: 120px;
			height: 120px;
			margin-bottom: 20px;
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			border-radius: 50%;
			border: 1px solid #fff;
		}
		.name {
			text-align: center;
		}
		p {
			flex: 1;
			font-size: 20px;
			color: #fff;
			margin-left: 20px;
			text-indent: 40px;
			margin-top: -5px;
		}
	}
</style>