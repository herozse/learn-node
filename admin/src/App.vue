<template>
  <router-view></router-view>
</template>

<script setup lang='ts'>
import { useUserStore } from '@/store/modules/user'

const useUser = useUserStore()

</script>

<style lang='less' scoped>

</style>