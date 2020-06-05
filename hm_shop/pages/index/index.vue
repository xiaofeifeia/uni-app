<template>
	<view class="content">
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<image src="../../static/banner.png"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/banner2.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="nav">
			<navigator url="../goods/goods" class="nav_box" hover-class="navigator-hover">
				<view class="nav_img iconfont icon-ziyuan">

				</view>
				<text>黑马超市</text>
			</navigator>
			<navigator url="../contact/contact" class="nav_box" hover-class="navigator-hover">
				<view class="nav_img iconfont icon-tupian">

				</view>
				<text>联系我们</text>
			</navigator>
			<navigator url="../goods/goods" class="nav_box" hover-class="navigator-hover">
				<view class="nav_img iconfont icon-guanyuwomen">

				</view>
				<text>社区图片</text>
			</navigator>
			<navigator url="../goods/goods" class="nav_box" hover-class="navigator-hover">
				<view class="nav_img iconfont icon-shipin">

				</view>
				<text>学习视频</text>
			</navigator>
		</view>
		<view class="hot_goods">
			<text class="title">推荐商品</text>
			<good-list></good-list>
		</view>
	</view>

</template>

<script>
	import goodList from "../../components/good-list/good-list.vue";
	export default {
		components:{
			goodList
		},
		data() {
			return {
				"indicatorDots": true,
				"autoplay": true,
				"interval": 3000,
				"duration": 1000
			}
		},
		onLoad() {

		},
		methods: {

			
		}
	}
</script>

<style lang="scss">
	.content {
		background-color: #fff;

		swiper {
			width: 750rpx;
			height: 350rpx;
			background-color: red;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.nav {
			height: 180rpx;
			width: 750rpx;
			display: flex;
			justify-content: space-around;

			.nav_box {
				width: 120rpx;
				height: 130rpx;
				text-align: center;

				.nav_img {
					margin: 10rpx auto;
					width: 100rpx;
					height: 100rpx;
					background-color: #b1191a;
					border-radius: 50rpx;
					color: #fff;
					line-height: 100rpx;
				}

				text {
					font-size: 28rpx;
					color: #333333;
				}
			}
		}

		.hot_goods {
			width: 100%;
			margin-top: 5rpx;
			.title {
				display: block;
				height: 80rpx;
				font-size: 30rpx;
				border-top: 1px solid #C0C0C0;
				border-bottom: 1px solid #C0C0C0;
				text-align: center;
				line-height: 80rpx;
				color: #f56566;
				letter-spacing: 30rpx;
			}
		}
	}
</style>
