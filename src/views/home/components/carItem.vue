<template>
	<div class="carItem">
		<div class="car_info">
			<div class="info_left">
				<img src="../../../assets/images/home/che.jpeg" >
			</div>
			<div class="info_right">
				<div class="carname">57座大巴车</div>
				<div class="flex_box">
					<div class="flex_lable">车况星级：</div>
					<van-rate :value="4" gutter="2px"/>
				</div>
				<div class="flex_box">
					<div class="flex_lable">车辆编号：</div>
					<div class="flex_text">BJ036</div>
				</div>
				<div class="flex_box" style="justify-content: space-between;">
					<div class="flex_box" style="margin-top: 0;">
						<div class="flex_lable">座位险：</div>
						<div class="flex_text">50万</div>
					</div>
					<div class="flex_box" style="margin-top: 0;">
						<div class="flex_lable">座位数：</div>
						<div class="flex_text">57座</div>
					</div>
				</div>
			</div>
		</div>
		<div class="characteristic" :class="[ open ? '' : 'close' ]">
			<div class="characteristic_text">
				<span class="label">车型特点：</span>
				<span class="text">航空座椅，坐感舒适，车内宽敞明亮，内航空座椅，坐感舒适，车内宽敞明亮，内…航空座椅，坐感舒适，车内宽敞明亮，内…航空座椅，坐感舒适，车内宽敞明亮，内…</span>
			</div>
			<div class="more_btn" @click="open = !open">{{  open ? '收起': '更多'  }}</div>
		</div>
		<div class="contact">
			<div class="person">
				<div>
					<img src="../../../assets/images/home/header.jpeg" >
				</div>
				<div class="person_name">调度专员：李队长</div>
			</div>
			<div class="wechet">
				<img src="../../../assets/images/home/wechat.png" >
				<div class="wechet_num">微信：LVCHEHU0000LVCHEHU0000</div>
				<van-button size="mini" color="#05D1E3" 
					v-clipboard:copy="wechet"
					v-clipboard:success="copySuccess"
					v-clipboard:error="copyError"
				>复制</van-button>
			</div>
		</div>
		<div class="btn_wrapper">
			<div id="" style="width: 45%;">
				<van-button block size="mini" @click="askMoney">快速询价</van-button>
			</div>
			<div id="" style="width: 45%;">
				<van-button size="mini" color="#05D1E3" block @click="callPhone">拨打电话</van-button>
			</div>
		</div>
		
		<FastPopup v-if="showPopup" @close="showPopup=false"/>
	</div>
</template>

<script>
	import FastPopup from './fastPopup.vue'
	export default{
		components: {
			FastPopup
		},
		data() {
			return {
				open: false,
				showPopup: false,
				wechet: "lmh123456"
			}
		},
		methods: {
			callPhone() {
				window.location.href = 'tel:' + 18160980499
			},
			askMoney() {
				this.showPopup = true
			},
			copySuccess() {
				this.$toast("复制成功")
			},
			copyError() {
				this.$toast("复制失败")
			}
		}
	}
</script>

<style scoped lang="less">
	.carItem{
		background: #FFFFFF;
		box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.1);
		border-radius: 16px;
		border: 1px solid #D0D8D8;
		padding: 24px;
		margin-top: 20px;
		
		.car_info{
			display: flex;
			align-items: center;
			margin-bottom: 10px;
			.info_left{
				margin-right: 20px;
				border-radius: 5px;
				width: 256px;
				height: 174px;
				overflow: hidden;
				img{
					width: 100%;
					border-radius: 10px;
				}
			}
			.info_right{
				font-size: 28px;
				flex: 1;
				.carname{
					font-weight: bold;
					font-size: 28px;
					color: #000000;
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
		.characteristic{
			font-size: 24px;
			border-bottom: 1px solid #D0D8D8;
			padding-bottom: 10px;
			line-height: 50px;
			.more_btn{
				color: #05D1E3;
				line-height: 50px;
			}
			.characteristic_text{
				text-align: justify;
			}
		}
		.close{
			display: flex;
			.characteristic_text{
				flex: 1;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
		.contact{
			display: flex;
			.person, .wechet{
				width: 50%;
			}
			.person{
				display: flex;
				align-items: center;
				img{
					width: 60px;
					height: 60px;
					border-radius: 50%;
				}
				.person_name{
					margin-left: 10px;
					font-size: 24px;
					color: #000;
				}
			}
			.wechet{
				display: flex;
				align-items: center;
				justify-content: space-between;
				img{
					width: 30px;
					margin-right: 10px;
				}
				.wechet_num{
					font-size: 24px;
					color: #000;
					overflow: hidden;
					flex: 1;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
		.btn_wrapper{
			display: flex;
			justify-content: space-between;
		}
	}
</style>
