<template>
	<div class="calculator">
		<DotTitle>
			<template>包车计算器，算一算需要多少</template>
		</DotTitle>
		<div class="digifacewide">{{ num }}</div>
		<div class="form_wrapper">
			<div class="form_item form_flex" @click="tabCity">
				<div class="form_label">用车城市</div>
				<div class="city_wrapper">
					<input type="text" disabled v-model="city" class="city_input" placeholder="请选择城市" @click="tabCity">
					<div class="triangle"></div>
				</div>
			</div>
			<div class="form_item form_flex">
				<div class="form_label">手机号码</div>
				<input type="number" v-model="phone" class="form_content phone_input" placeholder="报价将发送您手机上" maxlength="11" @input="inputChange" />
			</div>
			<div class="form_item">
				<div class="form_label">用车需求</div>
				<textarea rows="" cols="" placeholder="请描述您的具体用车需求，不少于5字"></textarea>
			</div>
			<div>
				<van-button color="#05D1E3" class="submit_btn" block>马上报价给您</van-button>
			</div>
		</div>
		
		<div class="tag_list">
			<div class="tag_item">
				<img src="../../../assets/images/home/check-circle.png" >
				<div class="text">直营车辆</div>
			</div>
			<div class="tag_item">
				<img src="../../../assets/images/home/check-circle.png" >
				<div class="text">真实车况</div>
			</div>
			<div class="tag_item">
				<img src="../../../assets/images/home/check-circle.png" >
				<div class="text">误点赔付</div>
			</div>
			<div class="tag_item">
				<img src="../../../assets/images/home/check-circle.png" >
				<div class="text">违约赔偿</div>
			</div>
		</div>
		
		
		<CityPicker ref="picker" @confirm="getCity"/>
	</div>
</template>

<script>
	import DotTitle from '@/components/dotTitle/index.vue'
	import CityPicker from '@/components/cityPicker/index.vue'
	export default {
		components: {
			CityPicker,
			DotTitle
		},
		data() {
			return {
				num: 1681,
				phone: '',
				city: ''
			}
		},
		created() {
			this.getRandomNum()
		},
		methods: {
			getRandomNum() {
				setInterval(() => {
					this.num = parseInt(Math.random() * 10000) + 1000
				}, 500)
			},
			inputChange() { //输入框值改变
				this.phone = this.phone.replace(/[^\d]/g, '')
				if (this.phone.length >= 11) {
					this.phone = this.phone.substr(0, 11)
				}
			},
			tabCity() {
				this.$refs.picker.showPicker()
			},
			getCity(data) {
				console.log(data)
				this.city = data.city.text
			}
		}
	}
</script>

<style scoped lang="less">
	.calculator {
		background: #D0D8D8;
		border: 3px solid #C5CBD4;
		border-radius: 12px 12px 12px 12px;
		box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.1);
		padding: 20px;
		.form_wrapper{
			margin-top: 20px;
			padding: 20px;
			background: #fff;
			.form_item{
				background: #F3F8F8;
				border-radius: 4px;
				border: 2px solid #D0D8D8;
				margin-bottom: 20px;
				padding: 20px;
				.form_label{
					font-size: 28px;
					color: rgba(0, 0, 0, 0.8);
					font-weight: bold;
					margin-right: 20px;
					flex-shrink: 0;
				}
				.form_content{
					display: flex;
					justify-content: flex-end;
				}
				.phone_input{
					max-width: 400px;
				}
				.city_wrapper{
					font-size: 28px;
					display: flex;
					align-items: center;
					.city_input{
						flex: 1;
						max-width: 400px;
					}
				}
				
				textarea{
					width: 100%;
					height: 60px;
					font-size: 28px;
					background: transparent;
					border: none;
				}
				input{
					font-size: 28px;
					background: transparent;
					outline: none;
					border: none;
					text-align: right;
				}
				
			}
			.form_flex{
				display: flex;
				justify-content: space-between;
				align-items: center;
				overflow: hidden;
				.form_content{
					flex: 1;
				}
			}
			
		}
		.submit_btn{
			height: 80px;
			font-size: 28px;
		}
	}
	.digifacewide {
		font-family: DigifaceWide;
		font-size: 40px;
		border: 4px solid #353C6A;
		color: #353C6A;
		text-align: right;
		padding: 10px 32px;
		border-radius: 5px;
		background: #b7bfc7;
	}
	.tag_list{
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28px;
		margin-top: 20px;
		.tag_item{
			display: flex;
			align-items: center;
			img{
				width: 24px;
				height: 24px;
				margin-right: 10px;
			}
			.text{
				color: rgba(0, 0, 0, 0.6);
				font-size: 18px;
			}
		}
	}
	
</style>
