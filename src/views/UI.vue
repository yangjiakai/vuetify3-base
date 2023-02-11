<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
import CustomizationMenu from "@/components/CustomizationMenu.vue";
import ChangeLanguage from "@/components/ChangeLanguage.vue";

import { useLocale } from "vuetify";
const { t, current } = useLocale();

const drawer1 = ref(true);
const drawer2 = ref(false);
const msg = ref("Hello World!");
const temp = ref(false);
</script>

<template>
  <CustomizationMenu />

  <v-navigation-drawer theme="dark" rail>
    <v-list>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        value="dashboard"
        @click="temp = !temp"
      >
        <v-tooltip
          activator="parent"
          location="bottom"
          class=""
          text="Sub-Navigation"
        ></v-tooltip>
      </v-list-item>
      <v-list-item prepend-icon="mdi-forum" value="messages"></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-navigation-drawer temporary v-model="temp">
    <template v-slot:prepend>
      <v-card height="60" class="d-flex align-center">
        <v-card-title class="text-primary">
          {{ t("$vuetify.common.subNav") }}</v-card-title
        >
      </v-card>
    </template>
    <perfect-scrollbar class="scrollnav">
      <v-list nav>
        <v-list-item
          v-for="i in 30"
          prepend-icon="mdi-view-dashboard"
          title="Nav Item"
          to="/"
          color="primary"
        ></v-list-item>
      </v-list>
    </perfect-scrollbar>
  </v-navigation-drawer>

  <v-app-bar :title="t('$vuetify.common.applicationBar')" elevation="1">
    <ChangeLanguage />
  </v-app-bar>

  <v-main>
    <v-sheet height="110vh">
      <RouterView />
    </v-sheet>
  </v-main>
</template>

<style scoped lang="scss">
.ui-page {
  height: 100%;

  background: #141e30; /* fallback for old browsers */
  background: #2193b0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #6dd5ed,
    #2193b0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #6dd5ed,
    #2193b0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.main {
  height: calc(100vh - 64px);
  overflow: scroll;
}

.scrollnav {
  height: calc(100vh - 60px);
}
</style>
