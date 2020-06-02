<template>
	<view class="content">
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<image src="../../static/banner.png"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/banner.png"></image>
			</swiper-item>
		</swiper>
		<view class="nav">
			<view class="nav_box">
				<view class="nav_img">

				</view>
				<text>黑马超市</text>
			</view>
			<view class="nav_box">
				<view class="nav_img">

				</view>
				<text>联系我们</text>
			</view>
			<view class="nav_box">
				<view class="nav_img">

				</view>
				<text>社区图片</text>
			</view>
			<view class="nav_box">
				<view class="nav_img">

				</view>
				<text>学习视频</text>
			</view>
		</view>
		<view class="hot_goods">
			<text>推荐商品</text>
		</view>
	</view>

</template>

<script>
	export default {
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
		background-color: #d8cacb;

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
			height: 240rpx;
			width: 750rpx;
			background-color: #fff;
			display: flex;
			justify-content: space-around;

			.nav_box {
				width: 145rpx;
				height: 150rpx;
				text-align: center;

				.nav_img {
					margin: 15rpx auto;
					width: 100%;
					height: 140rpx;
					background-color: #b1191a;
					border-radius: 70rpx;
				}

				text {
					font-size: 28rpx;
					color: #333333;
				}
			}
		}

		.hot_goods {
			text {
				display: block;
				height: 80rpx;
				background-color: #fff;
				font-size: 30rpx;
				text-align: center;
				line-height: 80rpx;
				color: #f56566;
				margin: 5rpx 0 10rpx 0rpx;
				letter-spacing: 20rpx;
			}
		}
	}
</style>
