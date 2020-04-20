<template>
    <div class="login">
        <img src="../assets/image/login/bgc.jpg" alt="">
        <!--登录盒子-->
        <div class="login-box">
            <div class="logo" @click="goHome"><span>马上租</span><span style="color: crimson">GO</span></div>
            <div class="login-box-title">注册</div>
            <div class="account-login">
                <div class="account-login-item">
                    <input type="text" placeholder="账户名">
                </div>
                <div class="account-login-item">
                    <input type="text" placeholder="密码">
                </div>
                <div class="link_entries">
                    <a>已有账号？去登录</a>
                </div>
                <div class="login-btn">
                    注册
                </div>
                <div class="account-login-protocol">
                    <span>登录即同意 <a>《马上租使用协议》</a> </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        methods:{
            goHome(){
                console.log(11111111111)
                this.$router.push({path:'/'})
            }
        },
        created:function () {

        }
    }
</script>

<style scoped lang="less">
    @import "~@/assets/styles/public.less";
    .login{
        width: 100%;
        position: relative;
        img{
            width: 100%;
            height: 1000px;
        }
        .login-box{
            position: absolute;
            top: 100px;
            background-color: #fff;
            margin-left: 50%;
            left: -238px;
            width: 476px;
            padding-top: 20px;
            border-radius: 2px;
            .login-box-title{
                text-align: center;
                height: 55px;
                font-size: 16px;
                line-height: 55px;
                color: @selectColor;
            }
            .account-login-item{
                width: 350px;
                font-size: 14px;
                margin: 0 auto;
                position: relative;
                padding: 13px 0;
                clear: both;
                input{
                    width: 331px;
                    padding-left: 15px;
                    border: 2px solid #EBEBEB;
                    height: 36px;
                    color: #000;
                    outline: none;
                }
            }
            .link_entries{
                width: 350px;
                text-align: right;
                margin: 0 auto;

            }
            .login-btn{
                width: 350px;
                font-size: 14px;
                height: 42px;
                line-height: 42px;
                text-align: center;
                background-color: @selectColor;
                color: #fff;
                margin: 13px auto;
            }
            .account-login-protocol{
                width: 350px;
                text-align: center;
                color: #999;
                margin: 20px auto;
                font-size: 14px;
                a{
                    color: @selectColor;
                }
            }
        }
    }
</style>
