<template>
	<view>
		
		<good-list></good-list>
		<view v-show="isBottom" class="bottomClass">
			---我是有底线的---
		</view>
	</view>
</template>

<script>
	import goodList from "../../components/good-list/good-list.vue"
	export default {
		data() {
			return {
				isBottom:false
			}
		},
		methods: {
			
		},
		components:{
			goodList
		},
		onReachBottom() {
			console.log("我是有底线的...")
			this.isBottom=true
		}
	}
</script>

<style lang="scss" scoped>

.bottomClass{
	text-align: center;
	color: #999999;
}
</style>
