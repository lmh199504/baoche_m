<template>
	<div class="tabBar">
		<van-tabbar route active-color="#000">
			<van-tabbar-item replace :to="item.path" icon="home-o" v-for="(item, index) in tabList" :key="index">
				<template #icon="props">
					<img :src="props.active ? item.activeIcon : item.icon " />
				</template>
				<span class="tabText">{{ item.name }}</span>
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [{
						name: "首页",
						icon: require('../../assets/images/tabIcon/home.png'),
						activeIcon: require('../../assets/images/tabIcon/home_active.png'),
						path: '/'
					},
					{
						name: "服务",
						icon: require('../../assets/images/tabIcon/service.png'),
						activeIcon: require('../../assets/images/tabIcon/service_active.png'),
						path: '/service'
					},
					{
						name: "品牌",
						icon: require('../../assets/images/tabIcon/brand.png'),
						activeIcon: require('../../assets/images/tabIcon/brand_active.png'),
						path: '/brand'
					},
					{
						name: "评论",
						icon: require('../../assets/images/tabIcon/comment.png'),
						activeIcon: require('../../assets/images/tabIcon/comment_active.png'),
						path: '/comment'
					},
					{
						name: "关于",
						icon: require('../../assets/images/tabIcon/home.png'),
						activeIcon: require('../../assets/images/tabIcon/home_active.png'),
						path: '/about'
					}
				]
			}
		},
		computed: {

		}
	}
</script>

<style scoped lang="less">
	.tabBar {
		width: 100%;
		height: 133px;
		box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.1);
		background: #fff;
		position: relative;
		// z-index: 10;
		.tabText{
			font-size: 20px;
		}
	}
</style>
