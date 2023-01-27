<template>
	<view class="d-flex main-text-color font-md line-h">
		<text class="a-self-start font-sm">¥</text>{{price}}
	</view>
	<!-- 插槽写法 (如下，且不用props)-->
<!-- 	<view class="d-flex main-text-color font-md line-h">
		<text class="a-self-start font-sm">¥</text><slot></slot>
	</view> -->
</template>

<script>
	export default {
		props:{
			price:[Number,String]
		}
	}
</script>

<style>
</style>