<template>
	<div class="layout">
		<div class="route_view">
			<router-view />
		</div>
		<TabBar />
	</div>
</template>

<script>
	import TabBar from '@/components/tabBar'
	export default {
		components: {
			TabBar
		}
	}
</script>

<style scoped lang="less">
	.layout{
		display: flex;
		height: 100vh;
		flex-direction: column;
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		.route_view{
			flex: 1;
			overflow: auto;
			padding-bottom: 20px;
		}
	}
</style>
