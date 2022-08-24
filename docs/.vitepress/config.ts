import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Vitepress',
  description: 'Vitepress 学习笔记',
  lastUpdated: true,
  srcDir: '../packages',
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
    lineNumbers: true,
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
      text: 'Tree',
      items: [
        {
          text: '广度优先遍历',
          link: '/algorithms/tree/breadth-first-search/',
        },
        {
          text: '深度优先遍历',
          link: '/algorithms/tree/depth-first-search/',
        },
        {
          text: '数据格式转换',
          link: '/algorithms/tree/data-conversion/',
        },
      ],
    },
  ];
}
