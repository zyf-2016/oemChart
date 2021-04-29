<template>
    <div class="page" :class="hide?'hide':''">
      <div class="day-info flex-end">
        <span class="theme num" style="margin-left:121px;">60</span>
        <span class="theme unit">人</span>
      </div>
      <div>
        <div class="progress-wrap flex-start">
          <label>男性</label>
          <div class="progress-out">
            <div class="progress-in progress1"></div>
          </div>
          <div class="progress">{{male}}%</div>
        </div>
        <div class="progress-wrap flex-start">
          <label>女性</label>
          <div class="progress-out">
            <div class="progress-in progress2"></div>
          </div>
          <div class="progress">{{female}}%</div>
        </div>
      </div>
      <div class="flex-start chart">
        <ring1 class="left" text="学历" id="ring4" />
        <ring1 class="right" text="职称" id="ring5" type="1" />
      </div>
      <vue-seamless-scroll
        :data="list"
        :class-option="classOption"
        class="scroll-warp"
      >
        <ul class="flex-between list">
          <li class="flex-center list-item" v-for="(item, index) in list" :key="index">
            <img :src="item.src" :class="{female:item.sex==2}">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>
</template>

<script>
    import vueSeamlessScroll from 'vue-seamless-scroll'
    import PubSub from 'pubsub-js'
    import ring1 from './ring1'
    import $ from 'jquery'
    export default {
      // props: [ 'male', 'female' ]
      data() {
        return {
          hide: false,
          male: 37.5,
          female: 62.5,
          list: [
            {
              name: 'XXX',
              src: 'man.jpg'
            },
            {
              name: 'XXX',
              src: 'man.jpg'
            },
            {
              name: 'XXX',
              src: 'man.jpg'
            },
            {
              name: 'XXX',
              src: 'man.jpg'
            },
            {
              name: 'XXX',
              src: 'man.jpg'
            },
            {
              name: 'XXX',
              src: 'man.jpg'
            },
            {
              name: 'XXX',
              src: 'man.jpg'
            },
            {
              name: 'XXX',
              src: 'man.jpg'
            },
          ],
          classOption: {
            limitMoveNum: 8,
            direction: 2,
            step: 0.5
          }
        }
      },
      components: {
        ring1,
        vueSeamlessScroll
      },
      methods: {
        toggle() {
          this.hide = !this.hide
        }
      },
      mounted() {
        setInterval(() => {
          this.male = 37.5
          this.female = 62.5
        }, 3000)
        PubSub.subscribe('change', (msg, data) => {
          console.log(msg, data, typeof data)
          if (!data && data !== 0) {
            this.hide = false
          } else {
            this.hide = true
          }
        })

        this.$nextTick(() => {
          let that = this
          $('.scroll-warp').on('click', 'li', function() {
            const index = $(this).index()
            that.$emit('click', {
              index,
              name: that.list[index].name,
              avatar: that.list[index].src
            })
          })
        })
      }
    }
</script>

<style lang="less" scoped>
  @keyframes change1 {
    0% {
      width: 0
    }
    33.3333% {
      width: 37.5%
    }
    100% {
      width: 37.5%
    }
  }
  @keyframes change2 {
    0% {
      width: 0
    }
    33.3333% {
      width: 62.5%
    }
    100% {
      width: 62.5%
    }
  }
  .page {
    position: absolute;
    width: 567px;
    height: 657px;
    top: 90px;
    right: 54px;
    padding: 0 30px;
    background: url(../assets/bg2.png) no-repeat;
    background-size: 100%;
    transition: all 0.8s;
    &.hide {
      right: -567px;
    }
  }
  .progress1 {
    animation: change1 3s ease infinite;
  }
  .progress2 {
    animation: change2 3s ease infinite;
  }
  .day-info {
    margin-bottom: 82px;
    margin-top: 76px;
    line-height: 1;
  }
  .progress-wrap {
    font-size: 16px;
    margin-top: 19px;
    & + .progress-wrap {
      margin-top: 8px;
    }
    .progress-out {
      margin-left: 12px;
      margin-right: 16px;
      height: 7px;
      width: 400px;
      border-radius: 4px;
      background: #bc4b00;
      overflow: hidden;
    }
    .progress-in {
      background: #fedda8;
      height: 100%;
      width: 0;
      border-radius: 4px;
      // transition: width 1s ease;
    }
  }
  .chart {
    margin-top: 56px;
    .left {
      margin-left: -11px;
    }
    .right {
      margin-left: 145px;
    }
  }
  .list {
    margin-top: 54px;
  }
  .list-item {
    cursor: pointer;
    img {
      width: 120px;
      &.female {
        width: 120px;
      }
      border-radius: 50%;
    }
    .name {
      font-size: 16px;
      margin-bottom: 4px;
    }
  }
  .scroll-warp {
    width: 500px;
    overflow: hidden;
    li {
      margin-right: 20px;
    }
  }
</style>