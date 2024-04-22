<!-- 顶部导航 -->
<template>
    <!--  -->
    <div class="top-nav bg-transparent p-5 ">
        <div class="container mx-auto  flex items-center justify-between">
            <!--  -->
            <div class="logo">
                <a href="/">
                    <img src="../public/images/logo.png" alt="">
                </a>
            </div>

            <!--  -->
            <div class="menu">
                <ul class="flex items-center justify-end gap-8">
                    <li>
                        <div class="line">
                            <nuxt-link to="/tools">首页</nuxt-link>

                        </div>
                    </li>
                    <li>
                        <div class="line">
                            <nuxt-link to="/about">关于</nuxt-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style scoped lang="scss">
.top-nav {
    z-index: 999;
}
</style>