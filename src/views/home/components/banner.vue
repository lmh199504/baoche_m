<template>
	<div>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
		  <van-swipe-item>
			  <div @click="playVideo">
				  <img src="@/assets/images/home/banner.png" class="swiper_img">
				  <img src="@/assets/images/home/playIcon.png" class="playIcon">
			  </div>
		  </van-swipe-item>
		</van-swipe>
		
		<VideoPlayer v-if="showVideo" @close="closeVideo"/>		
	</div>
</template>

<script>
	import VideoPlayer from '@/components/videoPlayer/index.vue'
	export default {
		components: {
			VideoPlayer
		},
		data() {
			return {
				showVideo: false
			}
		},
		methods: {
			playVideo() {
				this.showVideo = true
			},
			closeVideo() {
				this.showVideo = false
			}
		},
		
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
	.video{
		width: 100%;
		height: 400px;
	}
</style>
