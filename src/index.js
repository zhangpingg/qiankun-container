import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start } from 'qiankun';
import RouterConfig from './router'

ReactDOM.render(
  <React.StrictMode>
    <RouterConfig />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

registerMicroApps(
  [
    {
      name: 'child_react',                // 必选，微应用的名称，微应用之间必须确保唯一
      entry: '//localhost:3001',          // 必选，入口
      container: '#container',            // 子应用挂载在父级的盒子id
      activeRule: '/childReact',          // 必选，激活路由
      loader: () => {                     // 可选
        // console.log('跳转到childReact, 执行的方法')
      },
      props: {                            // 可选，传给子应用的数据
        str: '父级数据'
      }
    },
    {
      name: 'child_vue',
      entry: '//localhost:8080',
      container: '#container',
      activeRule: '/childVue',
    },
  ],
  // 可选，全局的微应用生命周期钩子
  // {
  //   beforeLoad: (app) => console.log('before load', app.name),
  //   beforeMount: [(app) => console.log('before mount', app.name)],
  // },
);

// 启动 qiankun
start();
