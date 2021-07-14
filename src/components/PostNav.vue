<template>
  <div id="post-nav">
    <div v-if="page === 1 && count < 10" class="post-nav__notice">
      <span>No more posts to display.</span>
    </div>
    <div v-else class="post-nav__links">
      <span v-show="page > 1"><span @click="$emit('prev')">&laquo; Prev</span> | </span>
      <span v-show="count === 10" @click="$emit('next')">Next &raquo;</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PostNav',
  props: {
    offset: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  },
  computed: {
    page(): number {
      return this.offset / 10 + 1
    }
  }
})
</script>

<style lang="scss" scoped>
#post-nav {
  @apply absolute left-0 w-screen py-8 my-16 text-center text-gray-600 bg-gray-100 border-t border-b border-gray-200 border-solid;

  .post-nav__links {
    span {
      @apply cursor-pointer;

      &:hover {
        @apply text-gray-900;
      }
    }
  }
}
</style>
