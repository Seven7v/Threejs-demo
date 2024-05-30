import { RouteRecordRaw } from 'vue-router'
const Layout = () => import('../layout/index.vue')
const Home = () => import('../pages/home.vue')
const First = () => import('../pages/demo/firstDemo.vue')
const Second = () => import('../pages/demo/secondDemo.vue')
const Third = () => import('../pages/demo/thirdDemo.vue')
const Fourth = () => import('../pages/demo/fourthDemo.vue')

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/three/home'
    },
    {
        path: '/three',
        component: Layout,
        name: 'Threejs笔记',
        meta: {
            icon: 'Menu',
            isNav: true
        },
        children: [
            {
                path: '/three/home',
                component: Home,
                name: 'Threejs笔记',
                meta: {
                    isNav: true
                }
            }
        ]
    },
    {
        path: '/demo',
        component: Layout,
        name: 'Threejs示例',
        meta: {
            isNav: true
        },
        children: [
            {
                path: '/demo/first',
                component: First,
                name: '坐标辅助器与轨道控制器',
                meta: {
                    isNav: true
                }
            },
            {
                path: '/demo/second',
                component: Second,
                name: '物体位移与父子元素',
                meta: {
                    isNav: true
                }
            },
            {
                path: '/demo/third',
                component: Third,
                name: 'Gui调试开发3d效果',
                meta: {
                    isNav: true
                }
            },
            {
                path: '/demo/fourth',
                component: Fourth,
                name: '几何体的订单，索引，以及面',
                meta: {
                    isNav: true
                }
            }
        ]
    }
]
export default routes
