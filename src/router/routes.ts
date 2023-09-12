export const constantRoute = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
    meta: {
      title: '系统菜单',
      hidden: true,
      icon: 'Avatar',
    },
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/layout/index.vue'),
    meta: {
      title: '菜单管理',
      hidden: true,
    },
    // children: [
    //   {
    //     path: '/home',
    //     component: () => import('@/views/home/index.vue'),
    //     meta: {
    //       title: '首页',
    //       hidden: true,
    //       icon: 'Avatar',
    //     },
    //     children: [
    //       {
    //         path: '/home',
    //         component: () => import('@/views/home/index.vue'),
    //         meta: {
    //           title: '首页',
    //           hidden: true,
    //           icon: 'Avatar',
    //         },
    //       },
    //       {
    //         path: '/ceshi',
    //         component: () => import('@/views/home/index.vue'),
    //         meta: {
    //           title: '测试',
    //           hidden: true,
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     path: '/ceshi',
    //     component: () => import('@/views/home/index.vue'),
    //     meta: {
    //       title: '测试',
    //       hidden: true,
    //     },
    //   },
    // ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Attrs/attrsListen.vue'),
    meta: {
      title: '组织机构管理',
      hidden: true,
    },
  },
  {
    path: '/ref-parent',
    name: 'ref',
    component: () => import('../views/ref-childre/refChildren.vue'),
    meta: {
      title: '角色管理',
      hidden: true,
    },
  },
  {
    path: '/svg-demo',
    name: 'svg',
    component: () => import('../views/SvgDemo/svgIndex.vue'),
    meta: {
      title: '用户管理',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '404',
      hidden: false,
    },
  },
]
