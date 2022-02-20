<template>
	<div>
		<div class="fix_menu">
			<div class="menu_item" @click="show=true">
				<img src="@/assets/images/call.png" >
				<div>询价</div>
			</div>
			<div class="menu_item">
				<img src="@/assets/images/customerservice.png" >
				<div>电话</div>
			</div>
		</div>
		
		<selectCar v-if="show" @close="show=false" />
	</div>
</template>

<script>
	import selectCar from '@/components/selectCar'
	export default{
		components: {
			selectCar
		},
		data() {
			return {
				show: false
			}
		}
	}
</script>

<style scoped lang="less">
	.fix_menu{
		position: fixed;
		right: 0;
		top: 300px;
		.menu_item{
			font-size: 24px;
			width: 90px;
			height: 100px;
			background: #6902FF;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-bottom: 30px;
			color: #fff;
			img{
				width: 40px;
			}
		}
	}
</style>
