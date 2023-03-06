<script setup lang="ts">
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>

<template>
  <div class="flex items-center home">
    <div class="font-bold pr-4px">{{ appStore.motto }}</div>
    <div class="i-icon-park-outline-like text-red-500"></div>
  </div>
</template>
