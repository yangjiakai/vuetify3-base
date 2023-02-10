<script setup lang="ts">
import AppBar from "@/components/AppBar.vue";
</script>

<template>
  <v-app id="app">
    <AppBar />
    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<style scoped></style>
