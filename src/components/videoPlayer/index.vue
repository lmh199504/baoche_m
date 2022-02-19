<template>
	<van-popup v-model="show" closeable @close="close">
		<video controls src="../../assets/video/1.mp4" ref="player" class="video"></video>
	</van-popup>
</template>

<script>
	export default{
		data() {
			return {
				show: true,
				isPlay: false
			}
		},
		mounted() {
			this.initPlayer()
			this.playVideo()
		},
		methods: {
			initPlayer() {
				console.log(this.$refs.player)
				this.$refs.player.onended = () => {
					this.isPlay = false
				}
				this.$refs.player.onpause = () => {
					this.isPlay = false
				}
				this.$refs.player.onplay = () => {
					this.isPlay = true
				}
			},
			playVideo() {
				this.$refs.player.play()
			},
			close() {
				this.$emit('close')
			}
		}
	}
</script>

<style scoped>
	.van-popup{
		background: transparent;
	}
	.video{
		width: 100vw;
	}
</style>
