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
				}

				text {
					font-size: 28rpx;
					color: #333333;
				}
			}
		}

		.hot_goods {
			margin-top: 5rpx;
			text {
				display: block;
				height: 70rpx;
				font-size: 30rpx;
				border-top: 2px solid #C0C0C0;
				border-bottom: 4px solid #C0C0C0;
				text-align: center;
				line-height: 70rpx;
				color: #f56566;
				letter-spacing: 20rpx;
			}
		}
	}
</style>
