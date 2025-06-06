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
    outline:[1,6],
    sidebar: false,
    logo: '/logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", items: [
        { text: "主页", link: "/" },
      ] },
      { text: "yupi", items: [
        { text: "day01", link: "/javaProject/后端模板/后端模板.md" },
        { text: "day02", link: "/javaProject/后端模板/java8安装配置.md" },
        { text: "day03", link: "/javaProject/后端模板/Maven安装.md" },
        { text: "用户模块", link: "/javaProject/xin-picture-backed/用户模块.md" }] },
      { text: "spring", link: "/spring/spring常用注解.html" },
      { text: "mybatis", link: "/javaProject/sky/Nginx.html" },
      { text: "学习笔记", items: [
        { text: "JAVA基础", link: "/java学习笔记/java基础.html" },
        { text: "2", link: "/讲义/day02/苍穹外卖-day02.html" },
        { text: "3", link: "/讲义/day03/苍穹外卖-day03.html" },
        { text: "4", link: "/讲义/day05/苍穹外卖-day05.html" },
      ] },
      {text: "其它", items:[
        { text: "git", link: "/其它/git.html" },] }

    ],
    sidebar: 
    { 
      "/javaProject/sky": set_sidebar("/javaProject/sky"),
      "/nginix/web部署": set_sidebar("nginix/web部署"),
      "java学习笔记": set_sidebar("java学习笔记"),
      "/javaProject/后端模板": set_sidebar("/javaProject/后端模板"),
      "/javaProject/xin-picture-backed": set_sidebar("/javaProject/xin-picture-backed"),
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
      { icon: 'github', link: 'https://github.com/Yxchen24' }
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
