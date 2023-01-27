<template>
	<view>
        <!-- 轮播图组件 -->
		<swiper-image :resdata="swipers"></swiper-image>
		<!-- 首页分类 -->
		<index-nav :resdata="indexnavs"></index-nav>
	</view>
</template>

<script>
	//只要当前页面需要引入新的组件就不想这样做
	//<!-- 1.import abc from ... -->
	//<!-- 2.在export default中注册组件abc -->
	import swiperImage from "@/components/index/swiper-image.vue"
	import indexNav from "@/components/index/index-nav.vue"
	export default {
		//注册组件
		components:{
		    swiperImage,
			indexNav
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
				]
			    
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
