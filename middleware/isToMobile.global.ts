import device from 'current-device'
export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        if (device.mobile()) {
            return abortNavigation('面向PC开发人员没有移动端适配访问请移步PC端');
        }
    }
});