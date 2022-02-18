<template>
	<div class="calculator">
		<div class="calculatorTitle">
			<div class="dot_let">
				<div class="dot dotone"></div>
				<div class="dot dottwo"></div>
				<div class="dot dotthree"></div>
			</div>
			<div class="text">包车计算器，算一算需要多少</div>
			<div class="dot_right">
				<div class="dot dotone"></div>
				<div class="dot dottwo"></div>
				<div class="dot dotthree"></div>
			</div>
		</div>
		<div class="digifacewide">{{ num }}</div>
		<div class="form_wrapper">
			<div class="form_item form_flex" @click="tabCity">
				<div class="form_label">用车城市</div>
				<input type="text" disabled v-model="city" placeholder="请选择城市" style="flex: 1;" @click="tabCity">
				<div class="triangle"></div>
			</div>
			<div class="form_item form_flex">
				<div class="form_label">手机号码</div>
				<input type="text" v-model="phone" class="form_content" placeholder="报价将发送您手机上" maxlength="11" @input="inputChange" />
			</div>
			<div class="form_item">
				<div class="form_label">用车需求</div>
				<textarea rows="" cols="" placeholder="请描述您的具体用车需求，不少于5字"></textarea>
			</div>
		</div>
		
		<CityPicker ref="picker" />
	</div>
</template>

<script>
	import CityPicker from '@/components/cityPicker/index.vue'
	export default {
		components: {
			CityPicker
		},
		data() {
			return {
				num: 1681,
				phone: '',
				city: '',
				showCity: false
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
			},
			tabCity() {
				console.log(111111)
				this.showCity = true
				this.$refs.picker.showPicker()
			}
		}
	}
</script>

<style scoped lang="less">
	.calculator {
		background: #FFFFFF;
		border: 3px solid #C5CBD4;
		border-radius: 12px 12px 12px 12px;
		padding: 20px;

		.calculatorTitle {
			font-size: 28px;
			color: rgba(0, 0, 0, 0.8);
			font-weight: 500;
			display: flex;
			justify-content: center;
			margin-bottom: 20px;
			align-items: center;
			.text {
				color: #000000;
				font-size: 24px;
			}

			.dot_let {
				display: flex;
				align-items: center;

				.dot {
					width: 6px;
					height: 20px;
					background: #353C6A;
					margin-right: 10px;
					border-radius: 3px;
				}
				.dotone{
					animation: dotAnimate 0.4s infinite;
				}
				.dottwo{
					animation: dotAnimate 0.4s infinite 0.2s;
				}
				.dotthree{
					animation: dotAnimate 0.4s infinite 0.3s;
				}
			}
			.dot_right{
				display: flex;
				align-items: center;
				
				.dot {
					width: 6px;
					height: 20px;
					background: #353C6A;
					margin-left: 10px;
					border-radius: 3px;
				}
				.dotone{
					animation: dotAnimate 0.4s infinite 0.3s;
				}
				.dottwo{
					animation: dotAnimate 0.4s infinite 0.2s;
				}
				.dotthree{
					animation: dotAnimate 0.4s infinite;
				}
			}
		}
		.form_wrapper{
			margin-top: 20px;
			.form_item{
				background: #F3F8F8;
				border-radius: 4px;
				border: 2px solid #D0D8D8;
				margin-bottom: 20px;
				padding: 10px;
				.form_label{
					font-size: 24px;
					color: rgba(0, 0, 0, 0.8);
					font-weight: bold;
					margin-right: 20px;
					flex-shrink: 0;
				}
				.form_content{
					display: flex;
					justify-content: flex-end;
				}
				.triangle {
				    width: 0;
				    height: 0;
				    border-left: 6px solid transparent;
				    border-right: 6px solid transparent;
				    border-top: 8px solid rgba(0, 0, 0, 0.65);
					margin-left: 10px;
				}
				textarea{
					width: 100%;
					height: 60px;
					font-size: 24px;
					background: transparent;
					border: none;
				}
				input{
					font-size: 24px;
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
				.form_content{
					flex: 1;
				}
			}
		}
	}

	.digifacewide {
		font-family: DigifaceWide;
		font-size: 40px;
		border: 4px solid #353C6A;
		color: #353C6A;
		text-align: right;
		padding: 5px 32px;
		border-radius: 5px;
		background: #b7bfc7;
	}

	@keyframes dotAnimate {
		from {
			height: 20px;
		}

		to {
			height: 5px;
		}
	}
</style>
