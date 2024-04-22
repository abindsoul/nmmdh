<template>
    <div class="animate__animated animate__fadeInLeft nav-list p-5 ">
        <nav>
            <ul class="flex ">
                <li class="home-nav px-5  " v-for="( item, index ) of   classList  " :key="item.id">
                    <div class="line">
                        <nuxt-link :to="item.path">
                            {{ item.text }}
                        </nuxt-link>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    classList: {
        type: Array,
        default: () => [
            {
                text: '数据未初始化',
                path: '/tools'
            },

        ]
    },

})

</script>
<style scoped lang="scss">
.router-link-active,
.router-link-exact-active {
    color: red;

}

.home-nav {
    @media (max-width: 1000px) {
        padding: 1rem;
    }
}
</style>
