<template>
  <div class="page" :class="hide?'hide':''">
    <div class="address">
      <!-- <h4 class="title">徐汇区</h4> -->
      <p class="info top notview">327941<span>人</span></p>
    </div>
    <ul class="clearfix list">
      <li class="flex-end" style="align-items:center;margin-top:10px;" :class="index%2==0?'fl':'fr'" v-for="(item, index) in list" :key="index">
        <label class="title" style="margin-top:4px;">{{item.label}}:</label>
        <p class="info">{{item.value}}<span>人</span></p>
      </li>
    </ul>
    <div class="flex-start-col content">
      <img src="man.jpg">
      <img src="man.jpg">
      <img src="man.jpg">
      <!-- <div class="userinfo">
        <h4 class="title">林军</h4>
        <p>林军作为中国互联网代表人物及全球年度电子商务创新领袖人物 ，曾获中国经济年度人物及十大财智领袖人物、中国互联网年度人物等多项国内外荣誉，并当选2014年度商业人物。同时兼任银海、WW、猛虎移动等三家上市公司董事长。林军曾任两届徐汇区政协委员，2012年当选上海市人大代表，2013年2月当选全国人民代表大会代表</p>
      </div> -->
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    data() {
      return {
        hide: false,
        list: [
          {
            label: '党支部1',
            value: 2021
          },
          {
            label: '党支部2',
            value: 2045
          },
          {
            label: '党支部3',
            value: 2049
          },
          {
            label: '党支部4',
            value: 3021
          },
        ]
      }
    },
    methods: {
      toggle() {
        this.hide = !this.hide
      }
    },
    mounted() {
      PubSub.subscribe('change', (msg, data) => {
        console.log(msg, data, typeof data)
        if (!data && data !== 0) {
          this.hide = false
        } else {
          this.hide = true
        }
      })
    }
  }
</script>

<style lang="less" scoped>
  .page {
    position: absolute;
    width: 567px;
    height: 657px;
    top: 90px;
    left: 54px;
    padding: 0 30px;
    background: url(../assets/bg1.png) no-repeat;
    background-size: 100%;
    transition: all 0.8s;
    &.hide {
      left: -567px;
    }
    .title {
      color: #ffefc0;
      font-size: 16px;
      line-height: 1;
    }
    .address {
      margin-top: 178px;
    }
    .info {
      color: #ffde00;
      font-size: 32px;
      font-weight: bold;
      &.top {
        margin-top: 3px;
      }
      span {
        font-size: 16px;
      }
    }
    .list {
      width: 450px;
      margin-top: 160px;
      line-height: 1;
      .info {
        font-size: 30px;
        margin-left: 10px;
      }
      li {
        margin-bottom: 4px;
      }
    }
    .content {
      margin-top: 52px;
      img {
        width: 120px;
        margin-right: 19px;
        border-radius: 50%;
        & + img {
          margin-left: 28px;
        }
      }
    }
    .userinfo {
      font-size: 13px;
      width: 352px;
      p {
        line-height: 1.2;
        margin-top: 8px;
      }
    }
  }
</style>