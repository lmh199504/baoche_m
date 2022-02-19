<template>
	<div>
		<van-sticky>
			<div class="top_select">
				<div class="left_city" @click="tapCity">
					<img src="../../../assets/images/home/location.png">
					<div class="city_name" v-if="city">{{ city }}</div>
					<div class="placeholer" v-else>选择城市</div>
					<div class="triangle"></div>
				</div>
				<div class="right_go">
					<div class="go_left">
						<img src="../../../assets/images/home/calculator.png">
						<div>5分钟包车报价</div>
					</div>
					<div class="go_right" @click="go">
						<div>去估算</div>
						<img src="../../../assets/images/home/next.png">
					</div>
				</div>
			</div>
		</van-sticky>

		<CityPicker ref="picker" @confirm="getCity" />
		<SelectCar v-if="showCar" @close="showCar=false" />
	</div>
</template>

<script>
	import SelectCar from '@/components/selectCar'
	import CityPicker from '@/components/cityPicker'
	export default {
		components: {
			CityPicker,
			SelectCar
		},
		data() {
			return {
				city: '',
				showCar: false
			}
		},
		methods: {
			getCity(data) {
				console.log(data)
				this.city = data.city.text
			},
			tapCity() {
				this.$refs.picker.showPicker()
			},
			go() {
				this.showCar = true
			}
		}
	}
</script>

<style scoped lang="less">
	.top_select {
		background: #fff;
		font-size: 28px;
		display: flex;
		align-items: center;
		padding: 0 20px;
		justify-content: space-between;
		height: 90px;
		box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.1);

		.left_city {
			display: flex;
			align-items: center;

			img {
				width: 24px;
				margin-right: 5px;
			}

			input {
				width: 60px;
				outline: none;
				background: transparent;
				border: none;
			}

			.placeholer {
				color: #999;
			}
		}

		.right_go {
			display: flex;
			align-content: center;
			justify-content: space-between;
			background: #f6f7fd;
			border-radius: 2px;
			border: 2px solid #D0D8D8;
			width: 450px;
			padding: 14px 16px;

			.go_left {
				display: flex;
				align-items: center;
				color: #979797;

				img {
					width: 32px;
					margin-right: 10px;
				}
			}

			.go_right {
				color: #FF5543;
				display: flex;
				align-items: center;

				img {
					width: 36px;
					margin-left: 10px;
				}
			}
		}
	}
</style>
