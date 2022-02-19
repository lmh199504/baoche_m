<template>
	<van-popup v-model="show" round position="bottom" :get-container="getEle">
		<van-picker show-toolbar title="选择车型" :columns="columns" @confirm="confirm" @cancel="cancel" />
	</van-popup>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州']
			}
		},
		methods: {
			showPicker() {
				this.show = true
			},
			getEle() {
				return document.getElementsByTagName('body')[0]
			},
			confirm(val) {
				this.$emit('confirm', val)
				this.show = false
			},
			cancel() {
				this.show = false
			}
		}
	}
</script>

<style>
</style>
