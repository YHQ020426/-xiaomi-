<template>
	<view>
        <!-- 轮播图组件 -->
		<swiper-image :resdata="swipers"></swiper-image>
	</view>
</template>

<script>
	//只要当前页面需要引入新的组件就不想这样做
	//<!-- 1.import abc from ... -->
	//<!-- 2.在export default中注册组件abc -->
	import swiperImage from "@/components/index/swiper-image.vue"
	export default {
		//注册组件
		components:{
		    swiperImage	
		},
		data() {
			return {
				//数据
				swipers:[
					{
						src:"../../static/images/demo/demo4.png"
					},
					{
						src:"../../static/images/demo/demo4.png"
					},
					{
						src:"../../static/images/demo/demo4.png"
					}
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
