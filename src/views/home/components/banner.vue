<template>
	<div>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
		  <van-swipe-item>
			  <img src="@/assets/images/home/banner.png" class="swiper_img">
			  <img src="@/assets/images/home/playIcon.png" class="playIcon">
		  </van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped lang="less">
	.my-swipe{
		height: 400px!important;
	}
	.swiper_img{
		width: 100%;
		height: 400px;
	}
	.playIcon{
		position: absolute;
		z-index: 10;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 120px;
		height: 120px;
	}
</style>
