<template>
  <div id="app">
    <div class="main-top-bar">
      <div class="main-top-bar-center public-wrap">
<!--        左边-->
        <div class="main-top-bar-left">
          <span class="item item-add" >福州</span>
          <div class="item item-city">[ <a>切换城市</a> ]</div>
          <div class="item">
            <a class="home-link">租房网首页</a>
          </div>
        </div>
<!--        右边-->
        <div class="main-top-bar-right">
          <div class="item">
            <a @click="login">登录</a> /
            <a>注册</a>
          </div>
          <div class="item" @mouseover="enterBar(1)">
            <a class="down-up" v-if="!showPersonalList">个人中心</a>
            <div class="item-list" v-else  @mouseleave="outBar(1)">
              <span class="item-list-top">个人中心</span>
              <a>我的账户</a>
              <a>我的浏览</a>
              <a>举报中心</a>
            </div>
          </div>
          <div class="item" @mouseover="enterBar(2)" >
            <a class="down-up" v-if="!showBusinessList">商家中心</a>
            <div class="item-list" v-else @mouseleave="outBar(2)">
              <span class="item-list-top">商家中心</span>
              <a>我的发布</a>
              <a>我的资料</a>
              <a>我的资金</a>
            </div>
          </div>
          <div class="item" @mouseover="enterBar(3)">
            <a class="down-up" v-if="!showHelpList">帮助中心</a>
            <div class="item-list" v-else @mouseleave="outBar(3)">
              <span class="item-list-top">帮助中心</span>
              <a>客户帮助</a>
              <a>商户帮助</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--logo/搜索框-->
    <div class="header-wrap public-wrap">
        <!--logo-->
        <div class="logo"><span>马上租</span><span style="color: crimson">GO</span></div>
        <!--搜索框-->
        <div class="search-section">
          <img src="./assets/image/search.png" alt="">
          <input type="text">
          <button class="btn">
            搜房源
          </button>
        </div>
    </div>
    <router-view/>
      <div class="main-bottom">
        <div class="upWrap">
            <a>常见问题</a>
            <a>意见中心</a>
            <a>问题反馈</a>
            <a>了解马上租</a>
            <a>加入马上租</a>
        </div>
          <div class="downWrap">
              <a>2005-2028 58.com版权所有</a>
              <a>违法信息举报：4008135858 jubao@58ganji.com</a>
              <a>员工舞弊举报：wb@58.com</a>
              <a>联系我们</a>
          </div>
      </div>
  </div>
</template>
<script>
  export default {
      data(){
          return{
              showPersonalList:false,
              showBusinessList:false,
              showHelpList:false
          }
      },
      methods:{
          login(){
              this.$router.push({path:'/login'})
          },
          enterBar(type){
              if(type==1){
                  this.showPersonalList=true;
              }else if(type==2){
                  this.showBusinessList=true;
              }else{
                  this.showHelpList=true;
              }
          },
          outBar(type){
              console.log(1313)
              if(type==1){
                  this.showPersonalList=false;
              }else if(type==2){
                  this.showBusinessList=false;
              }else{
                  this.showHelpList=false;
              }
          }
      },
      mounted() {
          console.log(this.$route.path)
      }
  }
</script>

<style lang="less">
  @import "~@/assets/styles/public.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-top-bar{
  min-width: 1190px;
  width: 100%;
  height: 35px;
  line-height: 35px;
  background: #fff;
  color: #555;
  border-bottom: 1px solid @borderColor;
  .main-top-bar-center{
    display: flex;
    justify-content: space-between;
    .main-top-bar-left{
      display: flex;
      .item-add{
        color: @selectColor;
        margin-right: 10px;
      }
      .item-city{
        margin-right: 10px;
        a{
          margin: 0px 1px;
        }
      }
      .home-link{
        padding: 0 10px 0 25px;
        display: flex;
        align-items: center;
        &:before{
          content: '';
          display: inline-block;
          width: 15px;
          height: 15px;
          background-image: url('assets/image/home.png');
          background-size: 15px 15px;
          margin-right: 2px;
        }
        &:hover:before{
          content: '';
          display: inline-block;
          width: 15px;
          height: 15px;
          background-image: url('assets/image/select-home.png');
          background-size: 15px 15px;
          margin-right: 2px;
        }
      }
    }
    .main-top-bar-right{
      .item{
        width: 100px;
        padding: 0 10px;
        height: 35px;
        line-height: 35px;
        float: left;
        position: relative;
        .down-up{
          display: flex;
          align-items: center;
          &:after{
            content: '';
            display: inline-block;
            width: 15px;
            height: 15px;
            background-image: url('assets/image/down.png');
            background-size: 15px 15px;
            margin-left: 2px;
          }
        }
        .item-list{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #fff;
          border: 1px solid @borderColor;
          display: flex;
          flex-direction: column;
          .item-list-top{
            color: @selectColor;
            &:after{
              content: '';
              display: inline-block;
              width: 15px;
              height: 15px;
              background-image: url('assets/image/up.png');
              background-size: 15px 15px;
              margin-left: 2px;
            }
          }
        }
      }
    }
  }
}
.header-wrap{
  margin: 30px auto 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo{
    font-size: 50px;
    color: @selectColor;
    font-weight: bolder;
  }
  .search-section{
    width: 584px;
    height: 42px;
    border: 2px solid @selectColor;
    margin-right: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }
    .btn{
      height: 42px;
      line-height: 42px;
      width: 80px;
      color: #fff;
      font-size: 16px;
      background-color: @selectColor;
    }
    input{
      flex: 1;
      height: 38px;
      line-height: 42px;
      border: 0;  // 去除未选中状态边框
      outline: none; // 去除选中状态边框
      background-color: rgba(0, 0, 0, 0);// 透明背景
      padding: 0 10px;
    }
  }
}
.main-bottom{
    background-color: #000;
    color: #fff;
    padding: 40px 0;
    font-size: 12px;
    line-height: 16px;
    .upWrap{
        text-align: center;
        margin-bottom: 20px;
        a{
            padding: 0 10px;
            border-right: 1px solid #eee;
            &:last-child{
                border-right: none;
            }
        }
    }
    .downWrap{
        color: #999;
        a{
            padding: 0 10px;
            border-right: 1px solid #eee;
            &:last-child{
                border-right: none;
            }
        }
    }

}
</style>
