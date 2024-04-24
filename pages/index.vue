<!--  -->
<template>
    <!--  -->
    <NuxtLayout>
        <template #content>
            <div class="content w-3/4  m-auto ">
                <NavList :classList="list" />
                <div class="animate__animated animate__fadeInDown card-content py-5 ">
                    <NuxtPage :data="content" />
                </div>
            </div>
        </template>
    </NuxtLayout>

</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();
nuxtApp.hook('app:mounted', async () => {
    window.addEventListener("blur", () => {
        useHead({
            title: "（￣﹏￣）遭了导太快了",
        })
    });
    window.addEventListener("focus", () => {
        useHead({
            title: "你慢慢导哈",
        })
    });
});
const { data: list } = await useFetch('/api/allList');
const { data: content } = await useFetch('/api/content');

</script>