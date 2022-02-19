<template>
	<div>
		<van-popup v-model="show" :get-container="getEle" style="width: 90%;" @close="close" round>
			<div class="select_car">
				<div class="bg_left">
					<img src="../../assets/images/home/bg_left.png" >
				</div>
				<div class="bg_right">
					<img src="../../assets/images/home/bg_right.png" >
				</div>
				
				<div class="container">
					<div class="title">请选择城市/车型</div>
					<div class="form_item" @click="selectCity">
						<div class="icon">
							<img src="../../assets/images/home/loca.png" >
						</div>
						<input type="text" placeholder="请选择城市" v-model="city" disabled>
						<div class="triangle"></div>
					</div>
					<div class="form_item" @click="selectCar">
						<div class="icon">
							<img src="../../assets/images/home/car.png" >
						</div>
						<input v-model="car" type="text" placeholder="请选择车型" disabled>
						<div class="triangle"></div>
					</div>
					<van-button block color="#05D1E3" class="sub_btn">确定</van-button>
				</div>
				
			</div>
		</van-popup>
	
		
		<CityPicker ref="cityPicker" @confirm="getCity"/>
		<CarPicker ref="carPicker" @confirm="geCar"/>
	</div>
</template>

<script>
	import CityPicker from '@/components/cityPicker'
	import CarPicker from '@/components/carPicker'
	export default{
		components: {
			CityPicker,
			CarPicker
		},
		data() {
			return {
				show: true,
				city: '',
				car: ''
			}
		},
		methods: {
			getEle() {
				return document.getElementsByTagName('body')[0]
			},
			selectCity() {
				this.$refs.cityPicker.showPicker()
			},
			getCity(data) {
				this.city = data.city.text
			},
			selectCar() {
				this.$refs.carPicker.showPicker()
			},
			geCar(data) {
				this.car = data
			},
			close() {
				this.$emit('close')
			}
		}
	}
</script>

<style scoped lang="less">
	.select_car{
		position: relative;
		.bg_left{
			position: absolute;
			left: 0;
			top: 0;
			img{
				width: 200px;
			}
		}
		.bg_right{
			position: absolute;
			right: 0;
			top: 0;
			img{
				width: 200px;
			}
		}
		.container{
			padding: 50px 90px 30px 90px;
			.form_item{
				font-size: 28px;
				display: flex;
				align-items: center;
				height: 80px;
				box-sizing: border-box;
				padding: 20px;
				background: #F6F7FD;
				margin-bottom: 20px;
				.icon{
					margin-right: 10px;
					img{
						width: 32px;
					}
				}
				input{
					outline: none;
					border: none;
					flex: 1;
					background: transparent;
				}
			}
			.sub_btn{
				height: 80px;
				font-size: 28px;
			}
			.title{
				margin-bottom: 20px;
				text-align: center;
				font-size: 36px;
				color: #000000;
			}
		}
		
	}
</style>
