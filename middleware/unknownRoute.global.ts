
// 路由重定向
export default defineNuxtRouteMiddleware((to, from) => {
    if (!to.matched.length || to.path === '/') {
        return navigateTo('/tools')
    }
});


