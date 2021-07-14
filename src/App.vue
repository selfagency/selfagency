<template>
  <div class="container">
    <site-header></site-header>
    <main>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" :duration="{ enter: 500, leave: 800 }" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SiteHeader from './components/SiteHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    SiteHeader
  }
})
</script>

<style lang="scss" scoped>
.container {
  @apply max-w-7xl sm:px-6 lg:px-8 px-4 mx-auto leading-loose;

  main {
    @apply max-w-3xl mx-auto;
  }
}
</style>
