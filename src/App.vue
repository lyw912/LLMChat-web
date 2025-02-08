<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
import { useGreyAndColorWeakness } from "@/hooks/useGreyAndColorWeakness"
import { ElNotification } from "element-plus"
import zhCn from "element-plus/es/locale/lang/zh-cn" // Element Plus 中文包

const { initTheme } = useTheme()
const { initGreyAndColorWeakness } = useGreyAndColorWeakness()

/** 初始化主题 */
initTheme()
/** 初始化灰色模式和色弱模式 */
initGreyAndColorWeakness()

/** 作者小心思 */
ElNotification({
  title: "Hello",
  type: "success",
  dangerouslyUseHTMLString: true,
  message:
    "<a style='color: teal' target='_blank' href='https://github.com/un-pany/v3-admin-vite'>基于大模型的智能问答系统毕业设计</a>",
  duration: 0,
  position: "bottom-right"
})
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>
