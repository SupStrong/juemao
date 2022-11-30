<template>
	<view class="template-set">
		<!-- <popupLevelA :isVisibile="isVisibile"></popupLevelA> -->
		<!-- <popupLevelB :isVisibile="isVisibile"></popupLevelB> -->
		<popupLevelC :isVisibile="isVisibile"></popupLevelC>
	</view>
</template>

<script>
import popupLevelA from '@/wxcomponents/popup/components/popupLevelA.vue';
import popupLevelB from '@/wxcomponents/popup/components/popupLevelB.vue';
import popupLevelC from '@/wxcomponents/popup/components/popupLevelC.vue';
export default {
	name: 'popupItem',
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
		popupLevelA,
		popupLevelB,
		popupLevelC
	},
	methods: {}
};
</script>

<style lang="scss" scoped></style>
