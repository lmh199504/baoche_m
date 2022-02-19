<template>
	<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
		<CarItem v-for="item in list" :key="item" :title="item" />
<!-- 		<div class="loadall">
			已展示<span>25条</span>，点击加载更多
		</div> -->
		<template slot="finished">
			<div class="loadall">已展示<span>25条</span>，已全部加载</div>
		</template>
	</van-list>
</template>

<script>
	import CarItem from './carItem.vue'
	export default {
		components: {
			CarItem
		},
		data() {
			return {
				list: [],
				loading: false,
				finished: false,
			};
		},
		methods: {
			onLoad() {
				// 异步更新数据
				// setTimeout 仅做示例，真实场景中一般为 ajax 请求
				setTimeout(() => {
					for (let i = 0; i < 10; i++) {
						this.list.push(this.list.length + 1);
					}

					// 加载状态结束
					this.loading = false;

					// 数据全部加载完成
					if (this.list.length >= 40) {
						this.finished = true;
					}
				}, 1000);
			},
		},
	};
</script>

<style scoped lang="less">
	.loadall{
		height: 90px;
		background: #FFFFFF;
		border-radius: 16px;
		border: 1px solid #D0D8D8;
		color: rgba(0, 0, 0, 0.6);
		line-height: 90px;
		font-size: 28px;
		text-align: center;
		margin-top: 20px;
		span{
			color: #05D1E3;
		}
	}
</style>
