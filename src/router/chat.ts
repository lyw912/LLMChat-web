import { type RouteRecordRaw } from "vue-router"
import { Coin, ChatLineRound } from "@element-plus/icons-vue"

const Layouts = () => import("@/layouts/index.vue")

/**
 * chat业务路由
 * 页面必须设置 Name 属性
 */
export const chatRoutes: RouteRecordRaw[] = [
  // AI Chat
  {
    path: "/",
    component: Layouts,
    redirect: "/chat",
    children: [
      {
        path: "/chat",
        component: () => import("@/views/chat/index.vue"),
        name: "对话",
        props: {
          icon: ChatLineRound
        }
      },
      {
        path: "/chat1",
        component: () => import("@/views/chat1/index.vue"),
        name: "对话1",
        props: {
          icon: ChatLineRound
        }
      },
      {
        path: "/knowledge",
        component: () => import("@/views/knowledge/index.vue"),
        name: "知识库",
        props: {
          icon: Coin
        }
      }
    ]
  }
]

export default chatRoutes
