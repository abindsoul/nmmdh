// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "你慢慢导哈",
      meta: [
        { name: 'keywords', content: 'nmmd,Navigation website,你慢慢导,导航网站,前端' },
        { name: 'description', content: '一个简单的导航网站,收录常用的开发文档,支持自定义自己常用的网站' },
      ],
    },

  },
  css: ['animate.css/animate.min.css'],

})
