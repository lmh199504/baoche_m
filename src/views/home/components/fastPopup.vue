<template>
	<van-popup v-model="show" round @close="close" style="width: 90%;">
		<div class="fast">
			<div class="header">
				<div>快速询价</div>
				<div class="close" @click="show=false">
					<img src="../../../assets/images/home/close.png" >
				</div>
			</div>
			<div class="carInfo">
				<div class="left">
					<img src="../../../assets/images/home/che.jpeg" >
				</div>
				<div class="right">
					<div class="carname">57座大巴车</div>
					<div class="flex_box">
						<div class="flex_lable">座位数：</div>
						<div class="flex_text">57座</div>
					</div>
					<div class="flex_box">
						<div class="flex_lable">车况星级：</div>
						<van-rate :value="4" gutter="2px"/>
					</div>
					
				</div>
			</div>
			
			<div class="form_wrpper">
				<div class="flex_box">
					<div class="form_item">
						<div class="form_label">您的姓名</div>
						<input type="text" placeholder="您的姓名">
					</div>
					<div class="form_item">
						<div class="form_label">手机号码<span>*</span></div>
						<input type="number" v-model="phone" placeholder="手机号码" @input="inputChange" maxlength="11">
					</div>
				</div>
				<div class="form_item">
					<div class="form_label">行程概要</div>
					<div>
						<textarea rows="" cols="" placeholder="请输入您的行程和用车要求，方便调度评估"></textarea>
					</div>
				</div>
				
				
				<van-button block color="#05D1E3" class="sub_btn">确定</van-button>
			</div>
			
		</div>
	</van-popup>
</template>

<script>
	export default{
		data() {
			return {
				show: true,
				phone: ''
			}
		},
		methods: {
			close() {
				this.$emit('close')
			},
			inputChange() {
				this.phone = this.phone.replace(/[^\d]/g, '')
				if (this.phone.length >= 11) {
					this.phone = this.phone.substr(0, 11)
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.fast{
		.header{
			height: 82px;
			background: #05D1E3;
			font-size: 36px;
			text-align: center;
			color: #fff;
			line-height: 82px;
			position: relative;
			.close{
				position: absolute;
				right: 30px;
				top: 0;
				img{
					width: 32px;
				}
			}
		}
		.carInfo{
			display: flex;
			align-items: center;
			padding: 20px;
			border-bottom: 2px solid #D0D8D8;
			margin-bottom: 20px;			.left{
				width: 204px;
				height: 138px;
				overflow: hidden;
				border-radius: 10px;
				margin-right: 20px;
				img{
					width: 100%;
					min-height: 100%;
					border-radius: 10px;
				}
			}
			.right{
				.carname{
					font-size: 32px;
					color: rgba(0, 0, 0, 0.8);
					font-weight: bold;
				}
				.flex_box{
					display: flex;
					align-items: center;
					margin-top: 10px;
					.flex_lable{
						font-size: 24px;
						color: rgba(0, 0, 0, 0.6);
						white-space: nowrap;
					}
					/deep/ .van-rate__icon{
						font-size: 24px;
					}
					.flex_text{
						color: rgba(0, 0, 0, 0.8);
						white-space: nowrap;
						font-size: 24px;
					}
				}
			}
		}
		.form_wrpper{
			padding: 20px;
			font-size: 28px;
			overflow: hidden;
			.flex_box{
				display: flex;
				align-items: center;
				justify-content: space-between;
				.form_item{
					width: 45%;
				}
			}
			.form_item{
				margin-bottom: 20px;
			}
			.form_label{
				margin-bottom: 10px;
				span{
					color: red;
				}
			}
			input{
				width: 100%;
				outline: none;
				border: none;
				background: #F6F7FD;
				height: 72px;
				border-bottom: 1px solid #05D1E3;
				border-radius: 4px;
			}
			textarea{
				width: 100%;
				outline: none;
				border: none;
				background: #F6F7FD;
				border-bottom: 1px solid #05D1E3;
				border-radius: 4px;
				height: 120px;
			}
			.sub_btn{
				height: 80px;
				font-size: 28px;
			}
		}
	}
</style>
