<template>
	<view class="template-set">
		<!-- <searchLevelA :isVisibile="isVisibile"></searchLevelA> -->
		<!-- <searchLevelB :isVisibile="isVisibile"></searchLevelB> -->
		<searchLevelC :isVisibile="isVisibile"></searchLevelC>
	</view>
</template>

<script>
import searchLevelA from '@/wxcomponents/search/components/searchLevelA.vue';
import searchLevelB from '@/wxcomponents/search/components/searchLevelB.vue';
import searchLevelC from '@/wxcomponents/search/components/searchLevelC.vue';
export default {
	name: 'searchItem',
	data() {
		return {}
	},
	props: {
		isVisibile: {
			type: Boolean,
			default: false
		}
	},
	computed: {},
	components: {
		searchLevelA,
		searchLevelB,
		searchLevelC
	},
	methods: {}
};
</script>

<style lang="scss" scoped></style>
