<template>
  <a-layout>
    <a-layout-header class="header" style="background: #fff; padding: 0">
      <div class="header-fold">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="chanegCollapse" />
        <menu-fold-outlined v-else class="trigger" @click="chanegCollapse" />
      </div>
      <div class="header-info">
        用户：admin
      </div>
    </a-layout-header>
    <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang='ts'>
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
const props = defineProps({
  collapsed: Boolean
})

const emit = defineEmits(['chanegCollapse'])

const chanegCollapse = () => {
  emit("chanegCollapse")
}
</script>

<style lang='less' scoped>
.header {
  display: flex;

  &-fold {
    width: 64px;
  }

  &-info {
    text-align: right;
    flex: 1;
    padding-right: 60px;
  }
}
</style>