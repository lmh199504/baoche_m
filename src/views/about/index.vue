<template>
	<div class="about">
		<div class="banner">
			<img src="../../assets/images/about/about_banner.png">
		</div>
		<DotTitle>
			<div class="title">关于我们</div>
		</DotTitle>

		<div class="paragh">
			“包车邦”为厦门奇骏旅游客运有限公司旗下品牌，包车邦品牌诞生于于2002年，
			公司本部设计设在海上花园城市——厦门，历经20年的艰苦卓绝的不懈努力，
			包车邦逐步发展成车型齐全、覆盖城市面广的大型车辆服务提供商。品牌以客
			户为中心、以客户满意为目标，注重员工培训教育。每一名包车邦员工需经过严
			格的培训通过相应的职业资格考试选拔后方可任用。客服专员熟悉专业知识，对
			客户反应的问题能礼貌用语、耐心解答；调度经理熟悉交通地理、车型报价，客户
			用车询能收获有所裨益的答复，用车过程突发状况能稳妥处理；司机驾驶技术娴熟
			，服务客户过程能热情周到、不厌其烦；市场监督员熟悉公司规章制度及当地城市
			场风俗人情行使市监管职责，急客户之所急高效处理客户投诉及反馈的意见。我
			们正以统一、高效标准化的管理，在每个环节为您提供快速便捷的服务，我们用
			心做好每一个细节，只为带给您非凡的出行享受。
		</div>
		
		<div class="paragh">
			自品牌成立以来，包车邦坚持秉承“诚信经营，客户至上”的服务理念，不断
			颠覆繁琐的传统用车模式，为客户提供快速、便利的全新用车服务体验，品牌
			口号“让包车出行更简单”体现我们化繁为简让客户用车更省心、舒心的服务理念
			。经过多年的发展，包车邦赢得了良好的口碑，被业内人士广泛推崇，包车邦逐渐
			成为国内大型活动、商务会议首选的车辆服务提供商，不断为社会各界提供品质的用
			车服务，遍布在中国大陆各主要城市的服务网点团结协作，不仅可随时随地满足
			客户的用车需求更为客户用车过程排忧解难、杜绝后顾之忧。
		</div>
		
		<div class="paragh">
			包车邦致力成为中国最佳的旅游包车服务提供商，正努力打造成综合性汽车服
			务领导品牌。并立志为推动中国的汽车租赁产业和汽车工业的发展而努力。
		</div>
		<FixMenu />
	</div>
</template>

<script>
	import DotTitle from '@/components/dotTitle'
	import FixMenu from '@/components/fixMenu'
	export default {
		components: {
			DotTitle,
			FixMenu
		}
	}
	
</script>

<style scoped lang="less">
	.banner {
		img {
			width: 100%;
		}
	}

	.title {
		padding: 0 30px;
		font-size: 36px;
		font-weight: bold;
	}
	.paragh{
		padding: 0 28px;
		margin-top: 30px;
		text-indent: 2em;
		font-size: 28px;
		line-height: 50px;
	}
</style>
