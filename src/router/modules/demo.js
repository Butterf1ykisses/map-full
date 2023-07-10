/*
 * @Author: likaijie 847094299@qq.com
 * @Date: 2023-07-04 09:27:18
 * @LastEditors: likaijie 847094299@qq.com
 * @LastEditTime: 2023-07-10 17:16:22
 * @Description:
 */
export default [
  {
    path: '/',
    // 重定向
    redirect: '/overview',
  },
  {
    path: '/overview',
    name: 'Overview',
    component: () => import('@/views/OverviewView.vue'),
  },
  {
    path: '/pinia',
    name: 'pinia',
    component: () => import('@/views/PiniaView.vue'),
  },
  {
    path: '/fullScreen',
    name: 'fullScreen',
    component: () => import('@/views/FullScreen.vue'),
  },
];
