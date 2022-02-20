<template>
	<div class="service">
		<div class="img_wrapper">
			<img src="../../assets/images/service/service01.png" >
			<img src="../../assets/images/service/service02.png" >
			<img src="../../assets/images/service/service03.png" >
			<img src="../../assets/images/service/service04.png" >
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
	.service{
		.img_wrapper{
			line-height: 0;
			img{
				width: 100%;
				height: auto;
			}
		}
	}
</style>
