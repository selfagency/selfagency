<template>
  <header>
    <h1>
      <router-link to="/">{{ siteName }}</router-link>
    </h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const siteName = '@selfagency'

    return { siteName }
  }
})
</script>

<style lang="scss" scoped>
header {
  @apply max-w-3xl mx-auto my-8;

  h1 {
    @apply text-3xl;
  }
}
</style>
