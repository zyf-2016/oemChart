<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: url(assets/bg.jpg) no-repeat left top / cover;
    overflow: hidden;
    width: 1920px;
    height: 1080px;
    color: #fedda8;
    font-size: 22px;
    font-family: '微软雅黑';
  }
  li {
    list-style: none;
  }
  .abs {
    position: absolute;
  }
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .flex-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .flex-around {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .flex-start {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .flex-end {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .flex-start-col {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .clearfix {
    position: relative;
    &:after {
      content: ".";
      display: block;
      clear: both;
      visibility: hidden;
      height: 0;
    }
  }
  .theme {
    color: #ffc001;
  }
  .num {
    font-size: 32px;
    font-weight: bold;
    line-height: 1;
  }
  .unit {
    font-size: 16px;
  }
  .notview {
    visibility: hidden;
  }
</style>
