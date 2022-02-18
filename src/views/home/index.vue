<template>
	<div class="home">
		<Banner />
		<div class="calculator_wrapper">
			<Calculator />
		</div>
	</div>
</template>

<script>
	import Banner from './components/banner.vue'
	import Calculator from './components/calculator.vue'
	export default {
		components: {
			Banner,
			Calculator
		}
	}
</script>

<style scoped lang="less">
	.calculator_wrapper{
		padding: 0 24px;
		margin-top: -40px;
		position: relative;
		z-index: 10;
	}
</style>
