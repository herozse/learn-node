<template>
  <a-layout class="layout">
    <SlideBar :collapsed="collapsed"></SlideBar>
    <Content :collapsed="collapsed" @chanegCollapse="chanegCollapse"></Content>
  </a-layout>
</template>

<script lang="ts" setup>
import SlideBar from './SlideBar.vue';
import Content from './Content.vue';
import { defineComponent, ref } from 'vue';

const collapsed = ref<boolean>(false)
const chanegCollapse = () => {
  collapsed.value = !collapsed.value
}

</script>


<style lang="less" scoped>
.layout {
  height: 100%;
}
</style>
