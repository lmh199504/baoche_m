<template>
	<div class="comment">
		<div class="banner">
			<img src="../../assets/images/comment/comment_banner.png">
		</div>
		<div class="comment_info">
			<div class="personInfo">
				<div class="header">
					<img src="../../assets/images/home/header.jpeg">
				</div>
				<div class="carInfo">
					<div class="flex_box">
						<div class="name">郑先生</div>
						<div class="name">188****3212</div>
					</div>

					<div class="flex_box between">
						<div class="use_info">用车城市：厦门</div>
						<div class="use_info">使用车型：35座大巴</div>
					</div>
					<div class="flex_box">
						<div class="use_info">用车时间：2022年1月30日</div>
					</div>
				</div>
			</div>

			<div class="swiperContainer">
				<div class="">
					<van-button icon="arrow-left" color="#05D1E3" size="mini" @click="tabPrev"></van-button>
				</div>
				<div class="swiper">
					<van-swipe class="my-swipe" ref="swiper">
						<van-swipe-item>
							<img src="@/assets/images/brand/brand01.png" class="swiper_img" >
						</van-swipe-item>
						<van-swipe-item>
							<img src="@/assets/images/brand/brand03.png" class="swiper_img">
						</van-swipe-item>
						<van-swipe-item>
							<img src="@/assets/images/brand/brand01.png" class="swiper_img">
						</van-swipe-item>
						<van-swipe-item>
							<img src="@/assets/images/brand/brand01.png" class="swiper_img">
						</van-swipe-item>
					</van-swipe>
				</div>
				<div class="">
					<van-button icon="arrow" color="#05D1E3" size="mini" @click="tabNext"></van-button>
				</div>
			</div>

		</div>
		<FixMenu />
	</div>
</template>

<script>
	import FixMenu from '@/components/fixMenu'
	export default{
		components: {
			FixMenu
		},
		methods: {
			tabPrev() {
				this.$refs.swiper.prev()
			},
			tabNext() {
				this.$refs.swiper.next()
			}
		}
	}
</script>

<style scoped lang="less">
	.banner {
		line-height: 0;
		img {
			width: 100%;
		}
	}

	.comment_info {
		background-image: url(../../assets/images/comment/bg.png);
		background-size: 100%;
		background-repeat: no-repeat;

		.personInfo {
			padding: 20px 56px;
			display: flex;

			.header {
				font-size: 28px;
				margin-right: 20px;

				img {
					width: 64px;
					height: 64px;
					border-radius: 50%;
				}
			}

			.carInfo {
				flex: 1;
			}

			.between {
				justify-content: space-between;
			}

			.flex_box {
				display: flex;
				align-items: center;
				margin-bottom: 20px;

				.name {
					font-size: 32px;
					color: rgba(0, 0, 0, 0.6);
					margin-right: 30px;
				}

				.use_info {
					font-size: 28px;
					color: rgba(0, 0, 0, 0.6);
				}
			}
		}

		.swiperContainer {
			padding: 30px;
			display: flex;
			
			.swiper {
				overflow: hidden;
				padding: 0 20px;
				flex: 1;
				.swiper_img{
					width: 100%;
				}
			}
		}
	}
</style>
