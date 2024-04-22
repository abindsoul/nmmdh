<template>
    <div class="card w-full p-8 relative">
        <div class="card-details py-4 animate__animated animate__fadeInUp ">
            <div v-for="(item, index) of contentList" :key="item.id">
                <div class=" one-card px-4 py-2 max-w-[180px]   truncate">
                    <a :href="item.url" target="_blank">
                        {{ item.title }}
                    </a>
                </div>

            </div>
            <slot />
        </div>
        <slot name="other" />
    </div>
</template>
<script setup>
const props = defineProps({
    //  
    contentList: {
        type: Array,
        default: () => {
            [
                {
                    title: '数据未初始化',
                    url: '数据未初始化'
                },
            ]
        }
    },

})
</script>
<style scoped lang="scss">
.card {
    min-height: 35vw;
    max-height: 38vw;
    border-radius: 20px;
    position: relative;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: hidden;

    @media (max-width: 1000px) {
        min-height: 70vw;
    }

    .card-details {
        color: black;
        width: 100%;
        max-height: 35vw;
        overflow-x: hidden;
        overflow-y: auto;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 30px;



        @media (max-width: 1000px) {
            grid-template-columns: repeat(3, 1fr);
            max-height: 70vw;

        }




        .one-card {
            border: 2px solid #17C3B2;
            position: relative;
            overflow: hidden;
            background-color: transparent;
            text-align: center;
            text-transform: uppercase;
            font-size: 16px;
            transition: .3s;
            z-index: 1;
            font-family: inherit;
            color: #17C3B2;
            white-space: nowrap;
            text-overflow: ellipsis;


            &::before {
                content: '';
                width: 0;
                height: 450%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(45deg);
                background: #17C3B2;
                transition: .5s ease;
                display: block;
                z-index: -1;
            }

            &:hover::before {
                width: 105%;
            }

            &:hover {
                color: #111;
                cursor: pointer;
            }
        }
    }

    &:hover {
        border-color: #008bf8;
        box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
    }


}
</style>