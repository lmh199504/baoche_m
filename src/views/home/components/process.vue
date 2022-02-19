<template>
	<div class="process">
		<DotTitle>包车流程</DotTitle>
		<div class="process_text">只要四步轻松包车</div>
		<img src="../../../assets/images/home/group.png" >
	</div>
</template>

<script>
	import DotTitle from '@/components/dotTitle/index.vue'
	export default{
		components: {
			DotTitle
		}
	}
</script>

<style scoped lang="less">
	.process{
		padding: 0 28px;
		margin-top: 40px;
		font-size: 24px;
		.process_text{
			text-align: center;
			font-size: 20px;
			color: rgba(0, 0, 0, 0.65);
		}
		img{
			margin-top: 20px;
			width: 100%;
		}
	}
</style>
