<template>
  <div class="home">
      <!-- 轮播图 -->
      <div class="bannerWrap" style="width:100%;">
          <!-- Swiper -->
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide" style="width: 100%;">
                      <img src="../assets/image/home/lunbo1.jpg" alt="">
                  </div>
                  <div class="swiper-slide">
                      <img src="../assets/image/home/lunbo2.jpg" alt="">
                  </div>
              </div>
              <!-- 分页 -->
              <div class="swiper-pagination page" slot="pagination"></div>
              <!-- 左右切换 -->
              <div class="swiper-button-next swiper-button-white"></div>
              <div class="swiper-button-prev swiper-button-white"></div>

          </div>
      </div>
<!--      类型选择-->
      <div class="category-box public-wrap">
        <div class="category-item" v-for="(item,index) in houseType">
            <div class="category-item-head">
<!--                <img src="../assets/image/home/top.jpg" alt="">-->
                <img :src="item.imgUrl" alt="">
                <div class="category-item-title">
                    <span class="category-item-title-text">{{item.title}}</span>
                    <div class="category-item-select-all">
                        查看全部
                    </div>
                </div>
            </div>

            <div class="category-item-content">
                <div class="category-item-content-item" v-for="value in item.arr">
                    {{value}}
                </div>

            </div>
        </div>
      </div>
      <div class="content public-wrap">
          <div class="operating-box">
          <div class="title">
              我们的服务
          </div>
          <div class="operating public-wrap">
                <div class="operating-item" v-for="value in threeType">
                    <img :src="value.imgUrl" alt="">
                    <div class="operating-item-text">
                        <div class="operating-item-title">{{value.title}}</div>
                        <div class="operating-item-dec">{{value.title}}</div>
                        <div class="operating-item-btn">
                            点击进入
                        </div>
                    </div>
                </div>
          </div>
          </div>
          <div class="fluid-content">
              <div class="title">
                  我们的服务
              </div>
              <div class="fluid-content-center">
                  <div class="fluid-content-item" v-for="value in serveData">
                      <div class="img-box">
                          <img :src="value.imgUrl" alt="">
                      </div>
                       <div class="fluid-content-item-title">
                            {{value.title}}
                       </div>
                      <div class="fluid-content-item-dec">
                          {{value.dec}}
                      </div>
                  </div>

              </div>
          </div>
          <div class="apart-box">
              <div class="title">
                  公寓推荐
              </div>
              <div class="apart-content">
                <div class="apart-content-item" v-for="value in apartData">
                    <img :src="value.imgUrl" alt="">
                    <div class="apart-content-item-dec">{{value.dec}}</div>
                </div>
              </div>
          </div>

      </div>
  </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'Home',
    data(){
        return {
            // 模拟数据
            houseType:[
                {
                    title:'租房类型',
                    arr:['整租','合租','民宿短租','一室','两室一厅'],
                    imgUrl:require('../assets/image/home/select-type1.png')
                },
                {
                    title:'房屋类型',
                    arr:['南北通透','环境优美','周边安静 ','带电梯','有阳台','独立卫生间'],
                    imgUrl:require('../assets/image/home/select-type2.png')
                },
                {
                    title:'房屋地带',
                    arr:['商圈附近','医院附近','地铁旁边','学校附近','车站附近'],
                    imgUrl:require('../assets/image/home/select-type3.png')
                },
                {
                    title:'商业租房',
                    arr:['商铺出租','写字楼出租','厂房出租','仓库出租'],
                    imgUrl:require('../assets/image/home/select-type4.png')
                }
            ],
            threeType:[
                {
                    title:'房东直租',
                    dec:'房东直租省掉中介费',
                    imgUrl:require('../assets/image/home/three-type1.png')
                },
                {
                    title:'安选验真',
                    dec:'保真保看，真实在售',
                    imgUrl:require('../assets/image/home/three-type2.png')
                },
                {
                    title:'海量房源',
                    dec:'海量房源任你挑',
                    imgUrl:require('../assets/image/home/three-type3.png')
                }
            ],
            serveData:[
                {
                    title:'价格优惠',
                    imgUrl:require('../assets/image/home/serve1.png'),
                    dec:'价格实惠，对比多家源，高性价比',
                },
                {
                    title:'商家投诉',
                    imgUrl:require('../assets/image/home/serve2.png'),
                    dec:'可对商家进行投诉，我们将会给您满意答复',
                },
                {
                    title:'平台监管',
                    imgUrl:require('../assets/image/home/serve3.png'),
                    dec:'由平台监管商家，杜绝出现虚假诈骗信息',
                },
                {
                    title:'海量房源',
                    imgUrl:require('../assets/image/home/serve4.png'),
                    dec:'拥有海量房源，遍布各个省份',
                }

            ],
            apartData:[
                {
                    dec:'两室一厅',
                    imgUrl:require('../assets/image/home/apart1.jpg')
                },
                {
                    dec:'一室带阳台',
                    imgUrl:require('../assets/image/home/apart2.jpg')
                },
                {
                    dec:'一室有独立卫生间',
                    imgUrl:require('../assets/image/home/apart3.jpg')
                },
                {
                    dec:'一室一厅有小厨房',
                    imgUrl:require('../assets/image/home/apart4.jpg')
                },
                {
                    dec:'单身公寓',
                    imgUrl:require('../assets/image/home/apart5.jpg')
                },
                {
                    dec:'海量房源任你挑',
                    imgUrl:require('../assets/image/home/apart6.jpg')
                }
            ]
        }
    },
    mounted() {
      // var  mySwiper=new Swiper('.swiper-container',{})
        var swiper = new Swiper('.swiper-container', {
            loop: true,
            notNextTick: true,
            autoplay: 5000,
            loop:true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            nextButton:'.swiper-button-next',
            prevButton:'.swiper-button-prev',

        });
    }
}
</script>
<style scoped lang="less">
    @import "~@/assets/styles/public.less";
    .swiper-slide{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .title{
        padding: 50px 0 40px;
        font-size: 34px;
        text-align: center;
    }
    .content{
        margin-top: 45px;
       .operating{
           display: flex;
           justify-content: space-between;
            .operating-item{
                width: 363px;
                height: 200px;
                position: relative;
                .operating-item-text{
                    position: absolute;
                    top: 55px;
                    left: 44px;
                    .operating-item-title{
                        font-size: 24px;
                        color: #333;
                        margin-bottom: 10px;
                    }
                    .operating-item-dec{
                        font-size: 12px;
                        color: #999;
                        text-align: left;
                    }
                    .operating-item-btn{
                        width: 103px;
                        height: 28px;
                        line-height: 28px;
                        margin-top: 24px;
                        font-size: 14px;
                        border: 1px solid #aaa;
                        border-radius: 100px;
                        text-align: center;
                        &:hover{
                            color: #fff;
                            background-color: @selectColor;
                        }
                    }
                }
            }

       }
        .fluid-content{
            .fluid-content-center{
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                .fluid-content-item{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .img-box{
                        border: 5px solid @selectColor;
                        width: 128px;
                        height: 128px;
                        border-radius: 50%;
                        overflow: hidden;
                        image{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .fluid-content-item-title{
                        margin-top: 16px;
                        font-size: 22px;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .fluid-content-item-dec{
                        width: 160px;
                        text-align: center;
                        font-size: 16px;
                        color: #666;
                    }
                }
            }
        }
        .apart-box{
            .apart-content{
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                .apart-content-item{
                    margin-bottom: 10px;
                    width: 383px;
                    img{
                        width: 383px;
                        height: 300px;
                    }
                    .apart-content-item-dec{
                        color: #777776;
                        font-size: 14px;
                        text-align: left;
                        margin-bottom: 20px;
                    }
                }
            }

        }
    }
    .category-box{
        position: absolute;
        left: 50%;
        top: 500px;
        margin-left: -624px;
        padding: 30px 25px;
        z-index: 99;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #fff;
        .category-item{
            width: 268px;
            .category-item-head{
                position: relative;
                border: 1px solid #ececec;
                overflow: hidden;
                height: 105px;
                img{
                    width: 267px;
                    height: 105px;
                }
                .category-item-title{
                    position: absolute;
                    top: 24px;
                    /*left: 40px;*/
                    left: 156px;
                    text-align: left;
                    display: flex;
                    /*flex-direction: row;*/
                    flex-direction: column;
                    .category-item-title-text{
                        font-size: 24px;
                        color: #000;
                        /*margin-right: 20px;*/
                    }
                    .category-item-select-all{
                        width: 76px;
                        height: 20px;
                        font-size: 12px;
                        line-height: 20px;
                        margin-top: 7px;
                        border: 1px solid #aaa;
                        border-radius: 100px;
                        text-align: center;
                        color: #4a4a4a;
                        &:hover{
                            background-color: @selectColor;
                            color: #fff;
                            border: 1px solid @selectColor;
                        }
                    }
                }
            }
            .category-item-content{
                border: 1px solid #ececec;
                border-top: none;
                overflow: hidden;
                display: flex;
                flex-wrap: wrap;

                padding-top: 16px;
                padding-left: 16px;
                .category-item-content-item{
                    width: 72px;
                    height: 38px;
                    text-align: center;
                    line-height: 42px;
                    font-size: 14px;
                    margin-right: 10px;
                    margin-bottom: 11px;
                    color: #4a4a4a;
                    background: #f3f6f9;
                    &:hover{
                        background-color: @selectColor;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>
