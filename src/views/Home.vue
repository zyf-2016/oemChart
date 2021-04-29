<template>
  <div class="content">
    <area1 />
    <area2 @click="handleClick" />
    <area3 />
    <area4 />
    <area5 />
    <area6 />
    <area7 />
    <area8 />
    <layer ref="layer" v-if="showLayer" :index="currentIndex" :name="name" :avatar="avatar" />
    <div class="btn" v-if="show" @click="closeWindow"></div>
  </div>
</template>

<script>
import area1 from '../components/area1'
import area2 from '../components/area2'
import area3 from '../components/area3'
import area4 from '../components/area4'
import area5 from '../components/area5'
import area6 from '../components/area6'
import area7 from '../components/area7'
import area8 from '../components/area8'
import layer from '../components/layer'

export default {
  data() {
   return {
     sex: 1,
     currentIndex: 0,
     name: '',
     avatar: '',
     showLayer: false,
     timer: null,
     show: false
   }
  },
  components: {
    area1,
    area2,
    area3,
    area4,
    area5,
    area6,
    area7,
    area8,
    layer,
  },
  methods: {
    handleClick(data) {
      this.currentIndex = data.index
      this.name = data.name
      this.avatar = data.avatar
      this.showLayer = true
      this.debounce()
    },
    debounce() {
      if (this.timer !== null) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.showLayer = false
      }, 5000)
    },
    fullScreen() {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen()
      } else if (document.documentElement.body.msRequestFullscreen) {
        document.documentElement.body.msRequestFullscreen()
      }
    },
    closeWindow() {
      self.close()
    }
  },
  mounted() {
    if (this.$route.query.channel === 'u3d') {
      this.show = true
    }
  }
}
</script>

<style lang="less" scoped>
  .content {
    height: 1080px;
    width: 1920px;
    overflow: hidden;
    position: relative;
  }
  .btn {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 20px;
    left: 54px;
    cursor: pointer;
    background: url(../assets/home.png) no-repeat center;
    background-size: cover;
  }
  // .area1 {
  //   padding-top: 125px;
  //   padding-left: 85px;
  // }
  // .area2 {
  //   padding-top: 123px;
  //   padding-right: 85px;
  // }
  // .title1 {
  //   position: relative;
  //   top: 33px;
  // }
  // .title2 {
  //   position: absolute;
  //   left: 867px;
  //   top: 762px;
  // }
  // .title3 {
  //   position: absolute;
  //   left:767px;
  //   top: 762px;
  // }
  // .title4 {
  //   position: absolute;
  //   left:85px;
  //   top: 825px;
  // }
  // .count {
  //   font-size: 70px;
  //   color: #ffc000;
  //   position: absolute;
  //   top: 538px;
  //   left: 846px;
  //   text-align: center;
  //   font-weight: 600;
  //   line-height: 1;
  //   text-align: center;
  //   div {
  //     color: #fedda8;
  //     font-size: 36px;
  //     margin-bottom: 20px;
  //   }
  //   span {
  //     font-size: 40px;
  //     line-height: 1;
  //   }
  // }
</style>