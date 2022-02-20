<template>
	<div>
		<div class="img_wrapper">
			<img src="../../assets/images/brand/brand01.png" >
			<img src="../../assets/images/brand/brand02.png" >
			<img src="../../assets/images/brand/brand03.png" >
		</div>
		<FixMenu />
	</div>
</template>

<script>
	import FixMenu from '@/components/fixMenu'
	export default {
		components: {
			FixMenu
		}
	}
</script>

<style scoped lang="less">
	.img_wrapper{
		line-height: 0;
		img{
			width: 100%;
		}
	}
</style>
