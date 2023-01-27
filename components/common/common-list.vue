<template>
	<!-- 公共列表组件 -->
			<view style="width: 372.5upx;">
				<image :src="item.cover"
				mode="widthFix"
				lazy-load></image>
				<view class="p-2 pt-1">
					<view class="font-md">{{item.title}}</view>
					<text class="d-block font text-light-muted">{{item.desc}}</text>
					<view class="d-flex my-1">
						<!-- 插槽写法 -->
					    <price>{{item.pprice}}</price>
						<!-- <price :price="1399"></price> -->
						<view class="font-sm text-light-muted line-through m1-1 a-self-end line-h">¥2699</view>
					</view>
				</view>
			</view>
</template>

<script>
	import price from "@/components/common/price.vue"
	export default{
		components:{
			price
		},
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style>
</style>