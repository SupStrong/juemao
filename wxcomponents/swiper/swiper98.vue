<template>
	<view class="show-remark" data-spm="remark">
		<view class="remark-wrapper module-common module-dark">
			<view class="remark-container">
				<h3 class="remark-head">
					<span class="remark-title"></span>
					<span class="want-see-num">
						<span class="J_WantCount" data-count="106238">106,238</span>
						<span class="want-see-text">&nbsp;人想看</span>
					</span>
				</h3>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss"scoped>
	.show-remark{
		margin: 3.2vw;
	}
	.light-mode .show-remark .remark-wrapper{
		border-radius: 12px;
		border: solid 1px #e9ebef;
	}
	.module-common{
		padding: 2.66666667vw 4vw;
		border-radius: 1.6vw;
		border: solid 1px #e9ebef;
	}
	.show-remark .remark-head{
		    font-size: 16px;
		    display: flex;
		    align-items: center;
		    padding: 0;
		    line-height: inherit;
	}
	.show-remark .remark-head .remark-title{
		background-image:url(//img.alicdn.com/tfs/TB15abfvWL7gK0jSZFBXXXZZpXa-174-33.png)
	}
	.show-remark .remark-head .remark-title{
		    background-repeat: no-repeat;
		    background-size: contain;
		    width: 21.3333333vw;
		    height: 3.7333333vw;
	}
	.show-remark .remark-head .want-see-num{
		margin-left: auto;
		color: #ff901c;
	}
</style>
