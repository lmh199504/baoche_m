<template>
	<van-popup v-model="show" round position="bottom">
		<van-picker show-toolbar title="城市选择" :columns="columns" @confirm="confirm" @cancel="cancel" />
	</van-popup>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				columns: [{
						text: '浙江',
						code: '浙江code',
						children: [{
								text: '杭州',
								code: '杭州code',
								children: [{
									text: '西湖区',
									code: '西湖区code'
								}, {
									text: '余杭区',
									code: '余杭区code'
								}],
							},
							{
								text: '温州',
								code: '温州code',
								children: [{
									text: '鹿城区',
									code: '鹿城区code'
								}, {
									text: '瓯海区',
									code: '瓯海区code'
								}],
							},
						],
					},
					{
						text: '福建',
						code: '福建code',
						children: [{
								text: '福州',
								code: '福州code',
								children: [{
									text: '鼓楼区',
									code: '福州code',
								}, {
									text: '台江区',
									code: '福州code',
								}],
							},
							{
								text: '厦门',
								code: '厦门code',
								children: [{
									text: '思明区',
									code: '思明区code'
								}, {
									text: '海沧区',
									code: '海沧区code'
								}],
							},
						],
					},
				]
			}
		},
		methods: {
			showPicker() {
				this.show = true
			},
			confirm(val) {
				const province = this.columns.find(item => item.text == val[0])
				const city = province.children.find(item => item.text == val[1])
				const country = city.children.find(item => item.text == val[2])
				this.$emit('confirm', {
					province,
					city,
					country
				})
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
