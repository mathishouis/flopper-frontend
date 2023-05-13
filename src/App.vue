<template>
  <div class="app">
    <nav-bar />
    <div class="app__page">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  components: {
    NavBar,
  },
});
</script>

<style lang="scss">
@use "@styles/style.scss";

.app {
  display: flex;
  flex-direction: row;
  height: 100%;

  &__page {
    max-width: 990px;
    min-width: 990px;
  }
}
</style>
