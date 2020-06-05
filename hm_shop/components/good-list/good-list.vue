<template>
	<view class="goods_list">
		<view class="goods_item" v-for="(item,index) in goodList" :key="item.id">
			<image :src="item.goodsImgUrl" mode="scaleToFill"></image>
			<view class="goods_info">
				<text class="new_price">${{item.newPrice}}</text>
				<text class="old_price">${{item.oldPrice}}</text>
				<view class="goods_title">{{item.goodsName}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
            "goodList":[
				{
					"id":1,
					"goodsImgUrl":"../../static/iphone.jpg",
					"newPrice":3999,
					"oldPrice":5999,
					"goodsName":"iPhone X苹果XR XS Max全网通正品国行手机"
				},
				{
					"id":2,
					"goodsImgUrl":"../../static/iphone.jpg",
					"newPrice":3999,
					"oldPrice":5999,
					"goodsName":"iPhone X苹果XR XS Max全网通正品国行手机"
				},
				{
					"id":3,
					"goodsImgUrl":"../../static/iphone.jpg",
					"newPrice":3999,
					"oldPrice":5999,
					"goodsName":"iPhone X苹果XR XS Max全网通正品国行手机"
				},
				{
					"id":4,
					"goodsImgUrl":"../../static/iphone.jpg",
					"newPrice":3999,
					"oldPrice":5999,
					"goodsName":"iPhone X苹果XR XS Max全网通正品国行手机"
				},
				{
					"id":5,
					"goodsImgUrl":"../../static/iphone.jpg",
					"newPrice":1888,
					"oldPrice":3000,
					"goodsName":"小米手机6"
				},
				{
					"id":6,
					"goodsImgUrl":"../../static/iphone.jpg",
					"newPrice":1888,
					"oldPrice":3000,
					"goodsName":"小米手机6"
				},
				{
					"id":7,
					"goodsImgUrl":"../../static/iphone.jpg",
					"newPrice":1200,
					"oldPrice":2000,
					"goodsName":"小米手机5"
				}
			]
			};
		},
		
		methods:{
			async getGoodList() {
				const res = await this.myRequest({
					url: '/api/getGoods?pageIndex=1'
				})
			}
		},
		onLoad() {
			this.getGoodList();
		}
	}
</script>

<style lang="scss" scoped>
	.goods_list {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		image {
			width: 100%;
			height: 400rpx;
		}

		.goods_item {
			width: 47%;
			text-align: center;
			margin: 6rpx 0;
			border: 2rpx solid #C0C0C0;

			.goods_info {
				.new_price {
					color: red;
					margin-right: 20rpx;
				}

				.old_price {
					text-decoration: line-through;
					color: #C0C0C0;
					font-size: 19rpx;
				}

				.goods_title {
					font-size: 20rpx;
					padding: 10rpx;
					line-height: 40rpx;
				}
			}
		}
	}
</style>
