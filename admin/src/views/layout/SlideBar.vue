<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <a-menu @select="selectMenu" v-model:selectedKeys="selectedKeys" theme="dark" :open-keys="openKeys" mode="inline">
      <template v-for="(item, idx) in routes" :key="idx">
        <template v-if="item.children && item.children.length > 1">
          <a-sub-menu :key="item.name">
            <template #icon>
              <tool-outlined />
            </template>
            <template #title>{{ item.meta?.title }}</template>
            <a-menu-item v-for="sub in item.children" :key="sub.name">{{ sub.meta?.title }}</a-menu-item>
          </a-sub-menu>
        </template>

        <template v-else-if="item.children && item.children.length === 1">
          <a-menu-item :key="item.children[0].name">
            <user-outlined />
            <span>{{ item.children[0].meta?.title }}</span>
          </a-menu-item>
        </template>

      </template>

    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  ToolOutlined
} from '@ant-design/icons-vue';
import { ref } from 'vue'
import { routes } from "@/router/index"
import { useRouter } from 'vue-router';

const props = defineProps({
  collapsed: Boolean,
})

const locationPath = location.pathname.split('/')
const path = locationPath.pop() || 'home'
const selectedKeys = ref<string[]>([path])
const openKeys = ref<string[]>([locationPath.pop() || ''])

const router = useRouter()
const selectMenu = (m: any) => {
  const { key } = m

  if (m.keyPath.length > 1) openKeys.value[0] = m.keyPath[0]
  else openKeys.value[0] = key

  router.push({
    name: key
  })
}

</script>

