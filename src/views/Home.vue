<template>
  <div id="home">
    <div class="home__blurb">
      <span>Notes from the desk of a terminally-online developer</span>
      <span class="home__blurb__line"></span>
    </div>
    <ul v-if="posts" class="posts__index">
      <post-listing :content="post" v-for="(post, key) in posts" :key="key"></post-listing>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '../store'
import PostListing from '../components/PostListing.vue'

export default defineComponent({
  name: 'PostView',
  components: {
    PostListing
  },
  setup() {
    const store = useStore()
    const posts = computed(() => store.state.content.posts)

    if (!posts.value.length) store.dispatch('getPosts')

    return { posts }
  }
})
</script>

<style lang="scss" scoped>
.home__blurb {
  @apply mt-32 text-4xl;

  .home__blurb__line {
    @apply block w-32 my-8 border-b border-gray-300 border-solid;
  }
}
</style>
