<template>
	<view>
        <!-- 轮播图组件 -->
		<swiper-image :resdata="swipers" />
		<!-- 首页分类 -->
		<index-nav :resdata="indexnavs" />
        <!-- 全局分割线 -->
		<divider/>
		<!-- 三图广告 -->
		<three-adv :resdata="threeAdv" />
		<divider/>
		<!-- 基础卡片组件 -->
<!-- 		<card :showhead="false">
			<image src="/static/images/bg.jpg" mode="widthFix"></image>
		</card> -->
		<!-- 大图广告位 -->
		<card headTitle="每日精选" bodyCover="/static/images/demo/demo4.png"></card>
	    <!-- 公共列表组件 -->
		<view class="row">
			<view style="width: 372.5upx;">
				<image src="/static/images/demo/list/1.jpg"
				mode="widthFix"
				lazy-load></image>
				<view class="p-2 pt-1">
					<view class="font-md">米家空调</view>
					<text class="d-block font text-light-muted">1.5匹变频</text>
					<view class="d-flex my-1">
						<!-- 插槽写法 -->
						<!-- <price>1399</price> -->
						<price :price="1399"></price>
						<view class="font-sm text-light-muted line-through m1-1 a-self-end line-h">¥2699</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 底部tabbar挡住了部分内容，增加了一个空白盒子将整体抬高 -->
		<view style="height: 100upx;"></view>
	</view>
</template>

<script>
	//只要当前页面需要引入新的组件就不想这样做
	//<!-- 1.import abc from ... -->
	//<!-- 2.在export default中注册组件abc -->
	import swiperImage from "@/components/index/swiper-image.vue"
	import indexNav from "@/components/index/index-nav.vue"
	import threeAdv from "@/components/index/three-adv.vue"
	import card from "@/components/common/card.vue"
	import price from "@/components/common/price.vue"
	export default {
		//注册组件
		components:{
		    swiperImage,
			indexNav,
			threeAdv,
			card,
			price
		},
		data() {
			return {
				//数据
				swipers:[
					{src:"../../static/images/demo/demo4.png"},
					{src:"../../static/images/demo/demo4.png"},
					{src:"../../static/images/demo/demo4.png"}
				],
				indexnavs:[
					{src:"../../static/images/indexnav/1.png",text:"新品发布"},
					{src:"../../static/images/indexnav/2.gif",text:"小米众筹"},
					{src:"../../static/images/indexnav/3.gif",text:"以旧换新"},
					{src:"../../static/images/indexnav/4.gif",text:"一分换团"},
					{src:"../../static/images/indexnav/5.gif",text:"超值特卖"},
					{src:"../../static/images/indexnav/6.gif",text:"小米秒杀"},
					{src:"../../static/images/indexnav/7.gif",text:"真心想要"},
					{src:"../../static/images/indexnav/8.gif",text:"电视热卖"},
					{src:"../../static/images/indexnav/9.gif",text:"家电热卖"},
					{src:"../../static/images/indexnav/10.gif",text:"米粉卡"}
				],
				threeAdv:{
					big:{src:"/static/images/demo/demo1.jpg"},
					smalltop:{src:"/static/images/demo/demo2.jpg"},
					smallbotton:{src:"/static/images/demo/demo2.jpg"}
				}
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
