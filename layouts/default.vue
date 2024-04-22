<!--  -->
<template>
    <!--  -->
    <div>
        <header>
            <TopNav />
        </header>
        <main>
            <slot name="content" />
        </main>
        <footer>
            <Foot />
        </footer>
    </div>
</template>
<script lang="ts" setup>

</script>


<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(#FFEEEE, #DDEFBB);
    background-size: 200% 200%;
    animation: gradient 8s ease infinite;

}



@keyframes gradient {
    0% {
        background-position: 0 12%;
    }

    50% {
        background-position: 100% 100%;
    }

    100% {
        background-position: 0 12%;
    }
}



.line {
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: #d36767;
        transition: all 0.3s;
    }

    &:hover {
        &::after {
            width: 100%;
        }
    }
}

// 滚伦样式
// 限制宽高
::-webkit-scrollbar {
    width: 4px;
    height: 6px;
}

// 边角
::-webkit-scrollbar-corner {
    display: block;
}

//小方块 
::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: rgb(0, 0, 0, .9);
}

// 轨道
::-webkit-scrollbar-thumb,
::-webkit-scrollbar-track {
    // 左右边框颜色
    border-right-color: transparent;
    border-left-color: transparent;
    background-color: rgb(0, 0, 0, .1);

}
</style>