<template>
	<div class="dottitle">
		<div class="dot_let">
			<div class="dot dotone"></div>
			<div class="dot dottwo"></div>
			<div class="dot dotthree"></div>
		</div>
		<div class="text">
			<slot></slot>
		</div>
		<div class="dot_right">
			<div class="dot dotone"></div>
			<div class="dot dottwo"></div>
			<div class="dot dotthree"></div>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped lang="less">
	.dottitle {
		font-size: 28px;
		color: rgba(0, 0, 0, 0.8);
		font-weight: 500;
		display: flex;
		justify-content: center;
		margin-bottom: 20px;
		align-items: center;
		.text {
			color: #000000;
			font-size: 30px;
		}
	
		.dot_let {
			display: flex;
			align-items: center;
	
			.dot {
				width: 6px;
				height: 26px;
				background: #353C6A;
				margin-right: 12px;
				border-radius: 3px;
			}
			.dotone{
				animation: dotAnimate 0.4s infinite;
			}
			.dottwo{
				animation: dotAnimate 0.4s infinite 0.2s;
			}
			.dotthree{
				animation: dotAnimate 0.4s infinite 0.3s;
			}
		}
		.dot_right{
			display: flex;
			align-items: center;
			
			.dot {
				width: 6px;
				height: 26px;
				background: #353C6A;
				margin-left: 12px;
				border-radius: 3px;
			}
			.dotone{
				animation: dotAnimate 0.4s infinite 0.3s;
			}
			.dottwo{
				animation: dotAnimate 0.4s infinite 0.2s;
			}
			.dotthree{
				animation: dotAnimate 0.4s infinite;
			}
		}
	}
	@keyframes dotAnimate {
		from {
			height: 26px;
		}
	
		to {
			height: 5px;
		}
	}
</style>
