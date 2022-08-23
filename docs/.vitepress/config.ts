import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Vitepress',
  description: 'Vitepress 学习笔记',
  lastUpdated: true,
  themeConfig: {
    nav: [
      {
        text: '数据结构',
        link: '/data-structure/linked-list',
        activeMatch: '^/data-structure/',
      },
      {
        text: '算法',
        link: '/algorithms/getting-start',
        activeMatch: '^/algorithms/',
      },
    ],
    sidebar: {
      '/data-structure/': getDataStructureSidebar(),
      '/algorithms/': getAlgorithmsSidebar(),
    },
  },
  markdown: {
    lineNumbers: false,
  },
});

function getDataStructureSidebar() {
  return [
    {
      text: '数据结构',
      items: [{ text: '快速开始', link: '/data-structure/getting-start' }],
    },
  ];
}

function getAlgorithmsSidebar() {
  return [
    {
      text: '数据结构',
      items: [{ text: '快速开始', link: '/algorithms/getting-start' }],
    },
  ];
}
