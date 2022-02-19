<template>
	<div class="carlist">
		<div class="bg_left">
			<img src="../../../assets/images/home/bg_left.png">
		</div>
		<div class="bg_right">
			<img src="../../../assets/images/home/bg_right.png">
		</div>
		<DotTitle>车型展示</DotTitle>
		<div class="tabList">
			<van-tabs color="#05D1E3" title-active-color="#000">
				<van-tab title="全部">
					<List />
				</van-tab>
				<van-tab title="5-14座">
					<List />
				</van-tab>
				<van-tab title="15-29座">
					<List />
				</van-tab>
				<van-tab title="30-57座">
					<List />
				</van-tab>
			</van-tabs>
		</div>
		
	</div>
</template>

<script>
	import DotTitle from '@/components/dotTitle'
	import List from './list.vue'
	export default {
		components: {
			DotTitle,
			List
		}
	}
</script>

<style scoped lang="less">
	.carlist {
		position: relative;
		padding: 28px;

		.bg_left {
			position: absolute;
			left: 0;
			top: 0;

			img {
				width: 225px;
			}
		}

		.bg_right {
			position: absolute;
			right: 0;
			top: 0;

			img {
				width: 225px;
			}
		}

		.tabList {
			/deep/ .van-tabs__wrap {
				font-size: 28px;
				height: 92px;
				border-radius: 46px;
				border: 3px solid #05D1E3;
				overflow: hidden;
				box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.1);
				padding: 15px 0;
				box-sizing: border-box;
				.van-tab {
					font-size: 28px;
				}
				.van-tabs__line{
					width: 40px;
				}
			}

		}
	}
</style>
