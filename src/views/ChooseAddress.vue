<template>
    <div class="address-box public-wrap">
        <div class="selector-address">
            <div class="selector-title">城市选择</div>
            <div id="selector-province" class="selector">
                <div id="selector-province-result" class="selector-result">省份</div>
                <div id="selector-province-arrow" class="selector-arrow"></div>
                <ul id="selector-province-box" class="selector-box" style="max-height: 450px;"><li class="selector-list" data-city="A">安徽</li><li class="selector-list" data-city="F">福建</li><li class="selector-list" data-city="G">广东</li><li class="selector-list" data-city="G">广西</li><li class="selector-list" data-city="G">贵州</li><li class="selector-list" data-city="G">甘肃</li><li class="selector-list" data-city="H">海南</li><li class="selector-list" data-city="H">河南</li><li class="selector-list" data-city="H">黑龙江</li><li class="selector-list" data-city="H">湖北</li><li class="selector-list" data-city="H">湖南</li><li class="selector-list" data-city="H">河北</li><li class="selector-list" data-city="J">江苏</li><li class="selector-list" data-city="J">江西</li><li class="selector-list" data-city="J">吉林</li><li class="selector-list" data-city="L">辽宁</li><li class="selector-list" data-city="N">宁夏</li><li class="selector-list" data-city="N">内蒙古</li><li class="selector-list" data-city="Q">青海</li><li class="selector-list" data-city="S">山东</li><li class="selector-list" data-city="S">山西</li><li class="selector-list" data-city="S">陕西</li><li class="selector-list" data-city="S">四川</li><li class="selector-list" data-city="X">新疆</li><li class="selector-list" data-city="X">西藏</li><li class="selector-list" data-city="Y">云南</li><li class="selector-list" data-city="Z">浙江</li><li class="selector-list" data-city=" ">其他</li><li class="selector-list" data-city=" ">海外</li></ul>
            </div>
        </div>
    </div>

</template>

<script>
    import { provice } from '../assets/js/address'
    export default {
        name: "ChooseAddress",
        mounted() {
            console.log(22222222222)
            console.log(provice)
        }
    }
</script>

<style scoped lang="less">
    .selector-address{
        width: 100%;
        margin: 27px auto 0;
        height: 30px;
        text-align: left;
    }
</style>
