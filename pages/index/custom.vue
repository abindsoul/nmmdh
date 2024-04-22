<template>
    <div class="tools reactive">
        <Card :content-list="data.contents">
            <div class="one-card px-4 py-2" @click="open">
                +
            </div>
            <template #other>
                <div v-show="showDraw"
                    class="form-draw  absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-green-100 animate__animated "
                    :class="showDrawAnimation ? 'animate__fadeInUp' : 'animate__fadeOutDown'">
                    <div class="flex flex-col ">
                        <div class="preference px-4 py-2">
                            <label class="label" for="title">title</label>
                            <input v-model.trim="form.title" class="input" name="title" type="text"
                                placeholder="请输入链接标题" maxlength="10">
                        </div>
                        <div class="preference px-4 py-2">
                            <label class="label" for="url">url</label>
                            <input v-model.trim="form.url" class="input" name="url" type="text" placeholder="请输入链接">
                        </div>
                        <div class="preference px-4 py-2">
                            <button @click="throttleHandleSubmit" class="btn px-4">添加</button>
                        </div>
                        <div class="preference px-4 py-2">
                            <button @click="throttleHandleChange" class="btn px-4">修改</button>
                        </div>

                        <div class="preference px-4 py-2">
                            <button @click="throttlehandleDelet" class="btn px-4">删除</button>
                        </div>
                        <div class="preference px-4 py-2">
                            <button @click="close" class="btn px-4">返回</button>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { messageAlert } from '~/utils/alert';
const showDraw = ref(false);
const showDrawAnimation = ref(false);
let data = reactive({
    contents: [],

});

const form = ref({
    title: '',
    url: ''
});

function open() {
    showDraw.value = true;
    showDrawAnimation.value = true;
};
function close() {
    showDrawAnimation.value = false;
};
// 初始化数据
function ininContent() {
    if (localStorage.getItem('contents')) {
        data.contents = JSON.parse(localStorage.getItem('contents') as string);
    }
};
function inintForm() {
    form.value = {
        title: '',
        url: ''
    }
};
function setContent() {
    localStorage.setItem('contents', JSON.stringify(data.contents));
};
onMounted(() => {
    ininContent();

});
// 操作
function handleSubmit() {
    if (data.contents.findIndex((a) => a.title == form.value.title) != -1 || form.value.title == '' || form.value.url == '') {
        messageAlert('error', '☹ title已重复不然就是你空着某项没填!');
    } else {
        data.contents.push(form.value);
        messageAlert('success', '☺ 添加成功了!!!');
        setContent();
        inintForm();
        close();
    }
};

function handleChange() {

    if (form.value.title == '' || form.value.url == '') {
        messageAlert('error', '☹ 把参数填上!快把参数填上!');
    }
    else if (data.contents.findIndex((a) => a.title == form.value.title) == -1) {
        messageAlert('error', '☹ 这个title并不存在');
    } else {
        let index = data.contents.findIndex((a) => a.title == form.value.title);
        data.contents[index] = form.value;
        messageAlert('success', '☺ 改好了!!!,但是title不支持修改昂');
        setContent();
        inintForm();
        close();
    }
};
function handleDelet() {
    if (form.value.title == '') {
        messageAlert('error', '☹ 虚空索敌是吧');
        return
    }
    else if (data.contents.length > 0 && data.contents.findIndex((a) => a.title == form.value.title) != -1) {
        data.contents.splice(data.contents.findIndex((a) => a.title == form.value.title), 1);
        setContent();
        messageAlert('success', '☺ 做掉了,给了它一个无法拒绝的理由');
        inintForm();
        close();
    } else {
        messageAlert('error', '☹ 抱歉这title并不存在');
    }
};
function throttle(func: Function, delay: number): Function {
    let lastCalled = 0;

    return function (...args: any[]) {
        const now = Date.now();
        if (now - lastCalled >= delay) {
            func.apply(this, args);
            lastCalled = now;
        }
    };
}
const throttleHandleSubmit = throttle(handleSubmit, 1000);
const throttleHandleChange = throttle(handleChange, 1000);
const throttlehandleDelet = throttle(handleDelet, 1000);
</script>

<style scoped lang="scss">
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

.label {
    display: block;
    margin-bottom: .3rem;
    font-size: .9rem;
    font-weight: bold;
    color: #05060f99;
    transition: color .3s cubic-bezier(.25, .01, .25, 1) 0s;
}

.input {
    max-width: 190px;
    height: 44px;
    background-color: #05060f0a;
    border-radius: .5rem;
    padding: 0 1rem;
    border: 2px solid transparent;
    font-size: 1rem;
    transition: border-color .3s cubic-bezier(.25, .01, .25, 1) 0s, color .3s cubic-bezier(.25, .01, .25, 1) 0s, background .2s cubic-bezier(.25, .01, .25, 1) 0s;
}

.btn {


    width: 100%;
    height: 44px;
    background-color: #05060f0a;
    border-radius: .5rem;
    padding: 0 1rem;
    border: 2px solid transparent;
    font-size: 1rem;


    &:hover {
        box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    }
}
</style>
