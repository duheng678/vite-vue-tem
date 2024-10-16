<template>
  <div class="App">
    <router-view />
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <div class="i-custom:car h20px w20px"></div>
    <div class="i-el:alarm-clock"></div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from './store'
import request from '@/api'
const counterStore = useCounterStore()
console.log(counterStore.counter)
</script>

<style scoped lang="less">
.App {
  height: 100vh;
}
</style>
