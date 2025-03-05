import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/autoSidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  /* base: "/vitepress_Yxchen/", */
  ignoreDeadLinks: true,
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "Yxchen",
  description: "一个存放笔记的知识库",
  themeConfig: {
    outlineTitle: "文章目录",
    outline:[2,6],
    sidebar: false,
    logo: '/logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", items: [
        { text: "主页", link: "/" },
        { text: "项目", link: "/markdown-examples" },
        { text: "自动生成1", link: "/javaProject/sky/Nginx.html"},
        { text: "自动生成2", link: "/nginix/web部署/Nginx.html" },
        { text: "讲义", link: "/讲义/day01/苍穹外卖-day01.html" },
      ] },
      { text: "项目", link: "/markdown-examples" },
      { text: "自动生成1", link: "/javaProject/sky/Nginx.html"},
      { text: "自动生成2", link: "/nginix/web部署/Nginx.html" },
      { text: "讲义", items: [
        { text: "day01", link: "/讲义/day01/苍穹外卖-day01.html" },
        { text: "day02", link: "/讲义/day02/苍穹外卖-day01.html" },
        { text: "day03", link: "/讲义/day03/苍穹外卖-day03.html" },
        { text: "day04", link: "/讲义/day05/苍穹外卖-day05.html" },
        
        

      ] },
    ],
    sidebar: 
    { 
      "/javaProject/sky": set_sidebar("/javaProject/sky"),
      "/nginix/web部署": set_sidebar("nginix/web部署"),
      "讲义": set_sidebar("讲义")
     },
     sidebar: false, // 关闭侧边栏
     aside: "left", // 设置右侧侧边栏在左侧显示
 /*    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '演示',
        items: [
          { text: '111111', link: '/markdown-examples' },
          { text: '222222', link: '/api-examples' }
        ]
      }
    ], */

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      copyright: 'Copyright © 2025-present Yxchen'
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
  
})
