<script setup lang="ts">
import AppBar from "@/components/AppBar.vue";
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
import CustomizationMenu from "@/components/CustomizationMenu.vue";
const customizeTheme = useCustomizeThemeStore();
</script>

<template>
  <v-app id="app" :theme="customizeTheme.darkTheme ? 'dark' : 'light'">
    <AppBar />
    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
    <CustomizationMenu />
  </v-app>
</template>

<style scoped></style>
