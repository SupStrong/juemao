<template>
  <view class="tn-cascade-selection tn-cascade-selection-class">
    <scroll-view
      class="selection__scroll-view"
      :class="[{'tn-border-solid-bottom': headerLine}]"
      :style="[scrollViewStyle]"
      scroll-x
      scroll-with-animation
      :scroll-into-view="scrollViewId"
    >
      <view class="selection__header" :class="[backgroundColorClass]" :style="[headerStyle]">
        <view
          v-for="(item, index) in selectedArr"
          :key="index"
          :id="`select__${index}`"
          class="selection__header__item"
          :class="[headerItemClass(index)]"
          :style="[headerItemStyle(index)]"
          @tap.stop="clickNav(index)"
        >
          {{ item.text }}
          <view
            v-if="index===currentTab && showActiveLine"
            class="selection__header__line"
            :style="{backgroundColor: activeLineColor}"
          ></view>
        </view>
      </view>
    </scroll-view>
    
    <swiper
      class="selection__list"
      :class="[backgroundColorClass]"
      :style="[listStyle]"
      :current="currentTab"
      :duration="300"
      @change="switchTab"
    >
      <swiper-item
        v-for="(item, index) in selectedArr"
        :key="index"
      >
        <scroll-view
          class="selection__list__item"
          :style="{height: selectionContainerHeight + 'rpx'}"
          scroll-y
          :scroll-into-view="item.scrollViewId"
        >
          <view class="selection__list__item--first"></view>
          <view
            v-for="(subItem, subIndex) in item.list"
            :key="subIndex"
            :id="`select__${subIndex}`"
            class="selection__list__item__cell"
            :style="[itemStyle]"
            @tap="change(index, subIndex, subItem)"
          >
            <view
              v-if="item.index === subIndex"
              class="selection__list__item__icon tn-icon-success"
              :style="[itemIconStyle]"
            ></view>
            <image
              v-if="subItem.src"
              class="selection__list__item__image"
              :style="[itemImageStyle]"
              :src="subItem.src"
            ></image>
            <view
              class="selection__list__item__title"
              :class="[{'tn-text-bold': item.index === subIndex && itemActiveBold}]"
              :style="[itemTitleStyle(index, subIndex)]"
            >
              {{ subItem.text }}
            </view>
            <view
              v-if="subItem.subText"
              class="selection__list__item__title--sub"
              :style="[itemSubTitleStyle]"
            >
              {{ subItem.subText }}
            </view>
          </view>
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
  import componentsColorMixin from '../../libs/mixin/components_color.js'
  export default {
    name: 'tn-cascade-selection',
    mixins: [ componentsColorMixin ],
    props: {
      // ??????????????????????????????????????????????????????????????????????????????
      /* {
        text: '', // ??????
        subText: '', // ?????????
        src: '', // ????????????
        value: 0, // ????????????
        children: [
          {
            text: '',
            subText: '',
            value: 0,
            children: []
          }
        ]
      } */
      list: {
        type: Array,
        default() {
          return []
        }
      },
      // ???????????????
      // ['value1','value2','value3']
      defaultValue: {
        type: Array,
        default() {
          return []
        }
      },
      // ?????????????????????????????????
      request: {
        type: Boolean,
        default: false
      },
      // request???true?????????, ????????????????????????
      receiveData: {
        type: Array,
        default() {
          return []
        }
      },
      // ??????header????????????
      headerLine: {
        type: Boolean,
        default: true
      },
      // header????????????
      headerBgColor: {
        type: String,
        default: ''
      },
      // ?????????????????????,??????rpx
      tabsHeight: {
        type: Number,
        default: 88
      },
      // ??????????????????
      text: {
        type: String,
        default: '?????????'
      },
      // ???????????????
      activeColor: {
        type: String,
        default: '#01BEFF'
      },
      // ???????????????
      activeBold: {
        type: Boolean,
        default: true
      },
      // ????????????????????????
      showActiveLine: {
        type: Boolean,
        default: true
      },
      // ????????????
      activeLineColor: {
        type: String,
        default: '#01BEFF'
      },
      // icon??????,??????rpx
      activeIconSize: {
        type: Number,
        default: 0
      },
      // icon??????
      activeIconColor: {
        type: String,
        default: '#01BEFF'
      },
      // item????????????, ??????rpx
      itemImgWidth: {
        type: Number,
        default: 0
      },
      // item????????????, ??????rpx
      itemImgHeight: {
        type: Number,
        default: 0
      },
      // item????????????
      itemImgRadius: {
        type: String,
        default: '50%'
      },
      // item text??????
      itemTextColor: {
        type: String,
        default: ''
      },
      // item text????????????
      itemActiveTextColor: {
        type: String,
        default: ''
      },
      // item text????????????
      itemActiveBold: {
        type: Boolean,
        default: true
      },
      // item text????????????, ??????rpx
      itemTextSize: {
        type: Number,
        default: 0
      },
      // item subText??????
      itemSubTextColor: {
        type: String,
        default: ''
      },
      // item subText????????????, ??????rpx
      itemSubTextSize: {
        type: Number,
        default: 0
      },
      // item??????
      itemStyle: {
        type: Object,
        default() {
          return {}
        }
      },
      // selection??????????????????, ??????rpx
      selectionContainerHeight: {
        type: Number,
        default: 300
      }
    },
    computed: {
      scrollViewStyle() {
        let style = {}
        if (this.headerBgColor) {
          style.backgroundColor = this.headerBgColor
        }
        return style
      },
      headerStyle() {
        let style = {}
        style.height = `${this.tabsHeight}rpx`
        if (this.backgroundColorStyle) {
          style.backgroundColor = this.backgroundColorStyle
        }
        return style
      },
      headerItemClass() {
        return (index) => {
          let clazz = ''
          if (index !== this.currentTab) {
            clazz += ` ${this.fontColorClass}`
          } else {
            if (this.activeBold) {
              clazz += ' tn-text-bold'
            }
          }
          return clazz
        }
      },
      headerItemStyle() {
        return (index) => {
          let style = {}
          style.color = index === this.currentTab ? this.activeColor : (this.fontColorStyle ? this.fontColorStyle : '')
          if (this.fontSizeStyle) {
            style.fontSize = this.fontSizeStyle
          }
          return style
        }
      },
      listStyle() {
        let style = {}
        style.height = `${this.selectionContainerHeight}rpx`
        if (this.backgroundColorStyle) {
          style.color = this.backgroundColorStyle
        }
        return style
      },
      itemIconStyle() {
        let style = {}
        if (this.activeIconColor) {
          style.color = this.activeIconColor
        }
        if (this.activeIconSize) {
          style.fontSize = this.activeIconSize + 'rpx'
        }
        return style
      },
      itemImageStyle() {
        let style = {}
        if (this.itemImgWidth) {
          style.width = this.itemImgWidth + 'rpx'
        }
        if (this.itemImgHeight) {
          style.height = this.itemImgHeight + 'rpx'
        }
        if (this.itemImgRadius) {
          style.borderRadius = this.itemImgRadius
        }
        return style
      },
      itemTitleStyle() {
        return (index, subIndex) => {
          let style = {}
          if (index === subIndex) {
            if (this.itemActiveTextColor) {
              style.color = this.itemActiveTextColor
            }
          } else {
            if (this.itemTextColor) {
              style.color = this.itemTextColor
            }
          }
          if (this.itemTextSize) {
            style.fontSize = this.itemTextSize + 'rpx'
          }
          return style
        }
      },
      itemSubTitleStyle() {
        let style = {}
        if (this.itemSubTextColor) {
          style.color = this.itemSubTextColor
        }
        if (this.itemSubTextSize) {
          style.fontSize = this.itemSubTextSize + 'rpx'
        }
        return {}
      }
    },
    watch: {
      list(val) {
        this.initData(val, -1)
      },
      defaultValue(val) {
        this.setDefaultValue(val)
      },
      receiveData(val) {
        this.addSubData(val, this.currentTab)
      },
    },
    data() {
      return {
        // ?????????????????????
        currentTab: 0,
        // tabs???scrollView???????????????
        scrollViewId: 'select__0',
        // ????????????
        selectedArr: []
      }
    },
    created() {
      this.setDefaultValue(this.defaultValue)
    },
    methods: {
      // ???????????????
      initData(data, index) {
        if (!data || data.length === 0) return
        if (this.request) {
          // ???????????????
          this.addSubData(data, index)
        } else {
          this.addSubData(this.getItemList(index, -1), index)
        }
      },
      // ????????????
      reset() {
        this.initData(this.list, -1)
      },
      // ????????????
      switchTab(e) {
        this.currentTab = e.detail.current
        this.checkSelectPosition()
      },
      // ??????????????????
      clickNav(index) {
        if (this.currentTab !== index) {
          this.currentTab = index
        }
      },
      // ????????????????????????
      change(index, subIndex, subItem) {
        let item = this.selectedArr[index]
        if (item.index === subIndex) return
        item.index = subIndex
        item.text = subItem.text
        item.subText = subItem.subText || ''
        item.value = subItem.value
        item.src = subItem.src || ''
        this.$emit('change', {
          index: index,
          subIndex: subIndex,
          ...subItem
        })
        
        // ???????????????????????????????????????????????????
        if (!this.request) {
          let data = this.getItemList(index, subIndex)
          this.addSubData(data, index)
        }
      },
      // ?????????????????????
      setDefaultValue(val) {
        let defaultValues = val || []
        if (defaultValues.length > 0) {
          this.selectedArr = this.getItemListWithValues(JSON.parse(JSON.stringify(this.list)), defaultValues)
          if (!this.selectedArr) return
          this.currentTab = this.selectedArr.length - 1
          this.$nextTick(() => {
            this.checkSelectPosition()
          })
          // defaultItemList.map((item) => {
          //   item.scrollViewId = `select__${item.index}`
          // })
          // this.selectedArr = defaultItemList
          // this.currentTab = defaultItemList.length - 1
          // this.$nextTick(() => {
          //   this.checkSelectPosition()
          // })
        } else {
          this.initData(this.list, -1)
        }
      },
      // ?????????????????????item??????
      getItemList(index, subIndex) {
        let list = []
        let arr = JSON.parse(JSON.stringify(this.list))
        // ???????????????
        if (index === -1) {
          list = this.removeChildren(arr)
        } else {
          // ?????????????????????????????????
          let value = this.selectedArr[0].index
          value = value === -1 ? subIndex : value
          list = arr[value].children || []
          if (index > 0) {
            for (let i = 1; i < index + 1; i++) {
              // ?????????????????????????????????
              let val = index === i ? subIndex : this.selectedArr[i].index
              list = list[val].children || []
              if (list.length === 0) break
            }
          }
          list = this.removeChildren(list)
        }
        return list
      },
      // ????????????????????????????????????item??????
      getItemListWithValues(data, values) {
        const defaultValues = JSON.parse(JSON.stringify(values))
        if (!defaultValues || defaultValues.length === 0) return
        // ??????????????????????????????item
        const itemIndex = data.findIndex((item) => {
          return item.value === defaultValues[0]
        })
        if (itemIndex === -1) return
        const item = data[itemIndex]
        item.index = itemIndex
        item.scrollViewId = `select__${itemIndex}`
        item.list = this.removeChildren(JSON.parse(JSON.stringify(data)))
        // ??????????????????1??????
        if (defaultValues.length === 1 || (!item.hasOwnProperty('children') || item.children.length === 0)) {
          return this.removeChildren([item])
        } else {
          let selectItemList = []
          const children = item.children
          selectItemList.push(item)
          // ????????????????????????
          defaultValues.splice(0, 1)
          const childrenValue = this.getItemListWithValues(children, defaultValues)
          selectItemList = selectItemList.concat(childrenValue)
          
          return this.removeChildren(selectItemList)
        }
      },
      // ???????????????
      removeChildren(data) {
        let list = data.map((item) => {
          if (item.hasOwnProperty('children')) {
            delete item['children']
          }
          return item
        })
        return list
      },
      // ???????????????????????????
      addSubData(data, index) {
        // ????????????????????????????????????????????????????????????
        if (!data || data.length === 0) {
          if (index == -1) return
          // ????????????
          let arr = this.selectedArr
          // ????????????????????????????????????????????????????????????????????????????????????????????????
          if (index < arr.length - 1) {
            let newArr = arr.slice(0, index + 1)
            this.selectedArr = newArr
          }
          let result = JSON.parse(JSON.stringify(this.selectedArr))
          let lastItem = result[result.length - 1] || {}
          let text = ''
          result.map(item => {
            text += item.text
            delete item['list']
            delete item['scrollViewId']
            return item
          })
          this.$emit('complete', {
            result: result,
            value: lastItem.value,
            text: text,
            subText: lastItem.subText,
            src: lastItem.src
          })
        } else {
          // ????????????
          let item = [{
            text: this.text,
            subText: '',
            value: '',
            src: '',
            index: -1,
            scrollViewId: 'select__0',
            list: data
          }]
          // ???????????????
          if (index === -1) {
            this.selectedArr = item
          } else {
            // ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            let retainArr = this.selectedArr.slice(0, index + 1)
            this.selectedArr = retainArr.concat(item)
          }
          this.$nextTick(() => {
            this.currentTab = this.selectedArr.length - 1
          })
        }
      },
      // ??????????????????????????????????????????????????????
      checkSelectPosition() {
        let item = this.selectedArr[this.currentTab]
        item.scrollViewId = 'select__0'
        this.$nextTick(() => {
          setTimeout(() => {
            // ????????????????????????????????????
            let val = item.index < 2 ? 0 : Number(item.index - 2)
            item.scrollViewId = `select__${val}`
          }, 10)
        })
        
        // ????????????????????????????????????
        if (this.currentTab > 1) {
          this.scrollViewId = `select__${this.currentTab - 1}`
        } else {
          this.scrollViewId = `select__0`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tn-cascade-selection {
    width: 100%;
  }
  
  .selection {
    &__scroll-view {
      background-color: #FFFFFF;
    }
    
    &__header {
      width: 100%;
      display: flex;
      align-items: center;
      position: relative;
      
      &__item {
        max-width: 240rpx;
        padding: 15rpx 30rpx;
        flex-shrink: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
      }
      
      &__line {
        width: 60rpx;
        height: 6rpx;
        border-radius: 4rpx;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    
    &__list {
      background-color: #FFFFFF;
      &__item {
        &--first {
          width: 100%;
          height: 20rpx;
        }
        
        &__cell {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 20rpx 30rpx;
        }
        
        &__icon {
          margin-right: 12rpx;
          font-size: 24rpx;
        }
        
        &__image {
          width: 40rpx;
          height: 40rpx;
          margin-right: 12rpx;
          flex-shrink: 0;
        }
        
        &__title {
          word-break: break-all;
          color: #333333;
          font-size: 28rpx;
          
          &--sub {
            margin-left: 20rpx;
            word-break: break-all;
            color: $tn-font-sub-color;
            font-size: 24rpx;
          }
        }
      }
    }
  }
</style>
