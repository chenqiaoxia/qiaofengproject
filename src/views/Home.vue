<template>
  <div class="home">
      <!-- 轮播图 -->
      <div class="bannerWrap" style="width:100%;height:842px;">
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
              <div class="swiper-pagination swiper-pagination-white" id="swiper-spit"></div>
              <!-- 左右切换 -->
              <div class="swiper-button-next swiper-button-white"></div>
              <div class="swiper-button-prev swiper-button-white"></div>

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
        }
    },
    mounted() {
      // var  mySwiper=new Swiper('.swiper-container',{})
        var swiper = new Swiper('.swiper-container', {
            autoplay: 5000,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });
    }
}
</script>
<style scoped lang="less">
    .swiper-slide{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
</style>
