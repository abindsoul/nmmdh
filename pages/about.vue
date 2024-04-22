<!-- about -->
<template>
    <!--  -->
    <NuxtLayout>
        <template #content>
            <div
                class="about absolute left-0 top-[72px] bottom-[60px]  w-full  flex items-center justify-center animate__animated animate__fadeIn">
                <div class="card">
                    <h1 class="py-1">About</h1>
                    <p>这是一个简单的导航</p>
                    <p>方便查找文档和常用的网站</p>
                    <p>主要是写代码时用所以没有移动端</p>
                    <p>缩放模糊暂时无解,如果你有好的建议欢迎留言</p>
                    <button class=" card-button">
                        <a href="https://github.com/abindsoul">前往github</a>
                    </button>
                </div>
            </div>
        </template>
    </NuxtLayout>
</template>
<script setup>
</script>
<style scoped lang="scss">
.card {
    box-sizing: border-box;
    width: 500px;
    height: 254px;
    // background: rgba(217, 217, 217, 0.58);
    background: transparent;
    border: 1px solid white;
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(6px);
    border-radius: 17px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-weight: bolder;
    color: black;
    padding: 1rem;

    p {
        @apply py-1;
    }

    .card-button {
        transform: translate(-50%, 125%);
        width: 60%;
        border-radius: 1rem;
        border: none;
        background-color: #767b7d;
        color: #fff;
        font-size: 1rem;
        padding: .5rem 1rem;
        position: absolute;
        left: 50%;
        bottom: 0;
        opacity: 0;
        transition: 0.3s ease-out;
    }

    &:hover {
        border: 1px solid black;
    }

    &:hover .card-button {
        transform: translate(-50%, 50%);
        opacity: 1;
    }

    &:active {
        transform-origin: left top;
        transform: scale(0.95) rotateZ(1.7deg);
    }

}
</style>