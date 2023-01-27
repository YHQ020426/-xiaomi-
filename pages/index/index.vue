<template>
	<view>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x class="border-bottom scroll-row"
		style="height: 80rpx;" :scroll-into-view="scrollinto"
		:scroll-with-animation="true">
		    <view class="scroll-row-item px-3" @click="changeTab(index)"
			style="height: 80rpx;line-height: 80rpx;"
			v-for="(item,index) in tabBars" :key="index"
			:class="tabIndex === index ? 'main-text-color' : ''"
			:id="'tab'+index">
			    <text class="font-md">{{item.name}}</text>
			</view>
		</scroll-view>
		
		<swiper :duration="350" :current="tabIndex" :style="'height:' + scrollH + 'px;'"
		@change="onChangeTab">
			<swiper-item v-for="(item,index) in tabBars" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'">
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
			       <!-- <card :showhead="false">
						<image src="/static/images/bg.jpg" mode="widthFix"></image>
					</card> -->
					<!-- 大图广告位 -->
					<card headTitle="每日精选" bodyCover="/static/images/demo/demo4.png"></card>
					<!-- 公共列表组件 -->
					<view class="row j-sb">
						<block v-for="(item,index) in commonList" :key="index">
							<common-list :item="item" :index="index"></common-list>
						</block>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		

		
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
	import commonList from "@/components/common/common-list.vue"
	export default {
		//注册组件
		components:{
		    swiperImage,
			indexNav,
			threeAdv,
			card,
			commonList
		},
		data() {
			return {
				scrollinto:"",
				scrollH:500,
				tabIndex:0,
				tabBars:[
					{name:'关注',},
					{name:'推荐',},
					{name:'体育',},
					{name:'热点',},
					{name:'财经',},
					{name:'娱乐',},
					{name:'军事',},
					{name:'历史',},
					{name:'本地',}
				],
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
				},
			    commonList:[
					{
					    cover:"/static/images/demo/list/1.jpg",
						title:"米家空调",
						desc:"1.5匹变频",
						oprice:2699,
						pprice:1399
					},
					{
					    cover:"/static/images/demo/list/1.jpg",
						title:"米家空调",
						desc:"1.5匹变频",
						oprice:2699,
						pprice:1399
					},
					{
					    cover:"/static/images/demo/list/1.jpg",
						title:"米家空调",
						desc:"1.5匹变频",
						oprice:2699,
						pprice:1399
					},
					{
					    cover:"/static/images/demo/list/1.jpg",
						title:"米家空调",
						desc:"1.5匹变频",
						oprice:2699,
						pprice:1399
					},
					{
					    cover:"/static/images/demo/list/1.jpg",
						title:"米家空调",
						desc:"1.5匹变频",
						oprice:2699,
						pprice:1399
					},
					{
					    cover:"/static/images/demo/list/1.jpg",
						title:"米家空调",
						desc:"1.5匹变频",
						oprice:2699,
						pprice:1399
					}
				]
			}
		},
		onLoad() {
            //获取可视区域的高度
			uni.getSystemInfo({
				success:(res)=>{
					console.log(res),
					this.scrollH = res.windowHeight - uni.upx2px(80)
				}
			})
		},
		methods: {
			//切换选项卡
			changeTab(index){
				if(this.tabIndex === index){
					return;
				}
				this.tabIndex = index,
				this.scrollinto = 'tab'+index
			},
			//监听滑动列表
			onChangeTab(e){
				this.changeTab(e.detail.current)
			}
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
