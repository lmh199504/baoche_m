<template>
	<div class="home">
		<TopSelect />
		<Banner />
		<div class="calculator_wrapper">
			<Calculator />
		</div>
		<Process />
		<CarList />
	</div>
</template>

<script>
	import TopSelect from './components/topSelect.vue'
	import Banner from './components/banner.vue'
	import Calculator from './components/calculator.vue'
	import Process from './components/process.vue'
	import CarList from './components/carList.vue'
	export default {
		name: "Home",
		components: {
			Banner,
			Calculator,
			Process,
			CarList,
			TopSelect
		}
	}
</script>

<style scoped lang="less">
	.calculator_wrapper{
		padding: 0 24px;
		margin-top: -40px;
		position: relative;
		z-index: 1;
	}
</style>
