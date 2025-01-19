// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'about-me',
      label: 'AboutMe！',
    },
    {
      type: 'doc',
      id: 'hobbies',
      label: '爱好笔记本',
    },
    {
      type: 'doc',
      id: 'books',
      label: '书籍记录',
    },
    {
      type: 'doc',
      id: 'movies',
      label: '影视剧记录',
    },
    {
      type: 'doc',
      id: 'thoughts',
      label: '碎碎念TT',
    },
  ],
};

module.exports = sidebars;
