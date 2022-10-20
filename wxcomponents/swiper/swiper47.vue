<template>
	<view>
		<view class="bab_opt_mod bab_opt_mod_1_8 module_85031127 customcode shared">
			<view class="tdphb">
				<view class="tdphbcon">
					<view class="phb phb1">
						<view class="leftimg"><image src="//m.360buyimg.com/babel/jfs/t1/186599/20/29512/23356/632bb53dEbbe9dc0b/8f8468ecceaa95f3.png" /></view>
						<view class="rightphb">
							<view class="smphb">
								<image src="https://img12.360buyimg.com/img/s192x243_jfs/t1/184204/4/26016/2174/630daddfE7401e061/6786c29317789ad2.png" class="tab" />
								<a href="//ranking.m.jd.com/comLandingPage/comLandingPage?rankType=10&amp;contentId=6277" class="phba">
									<image src="//m.360buyimg.com/babel/jfs/t1/118084/7/28742/17866/632a6b83E63a6b30f/af80b0bdfff88939.png" class="phbimg" />
								</a>
							</view>
							<view class="smphb">
								<image src="https://img12.360buyimg.com/img/s192x243_jfs/t1/209889/16/26353/2351/630daddfE7203239c/955b271b621231f0.png" class="tab" />
								<a href="//ranking.m.jd.com/comLandingPage/comLandingPage?rankType=10&amp;contentId=6275" class="phba">
									<image src="//m.360buyimg.com/babel/jfs/t1/61195/14/21996/19300/632a6ba4E4a2e2496/e67b2332133fc3dd.png" class="phbimg" />
								</a>
							</view>
							<view class="smphb">
								<image src="https://img12.360buyimg.com/img/s192x243_jfs/t1/10176/5/19674/2381/630daddfE15b03f43/48bc218170d00256.png" class="tab" />
								<a href="//ranking.m.jd.com/comLandingPage/comLandingPage?rankType=10&amp;contentId=1875735" class="phba">
									<image src="//m.360buyimg.com/babel/jfs/t1/191485/14/28903/16002/632a6b2eEe9f50bbb/bcbade0eb771a2a1.png" class="phbimg" />
								</a>
							</view>
							<view class="smphb">
								<image src="https://img12.360buyimg.com/img/s192x243_jfs/t1/186071/28/28074/2293/630daddfE6a7fcbb7/b2927ebf3cacb82f.png" class="tab" />
								<a href="//ranking.m.jd.com/comLandingPage/comLandingPage?rankType=10&amp;contentId=1444312" class="phba">
									<image src="//m.360buyimg.com/babel/jfs/t1/35671/15/17584/14187/632a6b5aEe370e92d/511363c5ddd2cb36.png" class="phbimg" />
								</a>
							</view>
						</view>
					</view>
				</view>
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

<style lang="scss" scoped>
.tdphb::-webkit-scrollbar {
	display: none;
}
.tdphb {
	position: relative;
	width: 100vw;
	height: 50vw;
	overflow-y: hidden;
	overflow-x: auto;
	transform: scale(0.94);
}
.tdphb .tdphbcon {
	position: absolute;
	height: 100%;
	white-space: nowrap;
}
.tdphb .phb {
	position: relative;
	width: 80vw;
	height: 100%;
	overflow: hidden;
	display: inline-block;
	white-space: nowrap;
	background: white;
	border-radius: 5px;
	margin-right: 8px;
}
.tdphb .leftimg {
	position: absolute;
	width: 46%;
	height: 100%;
	left: 0;
}
.tdphb .rightphb {
	position: absolute;
	width: 52%;
	height: 100%;
	display: flex;
	right: 0;
	justify-content: space-around;
	flex-wrap: wrap;
}
.tdphb .rightphb image.tab {
	position: absolute;
	left: 0;
	top: 0;
	pointer-events: none;
	z-index: 9;
}
.tdphb .rightphb .smphb {
	position: relative;
	width: 18vw;
	height: 50%;
	margin: 1vw 0vw 0vw 0vw;
	border-radius: 3px;
}
.tdphb .rightphb .smphb a.phba {
	display: block;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
</style>
