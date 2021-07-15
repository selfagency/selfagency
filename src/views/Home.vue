<template>
  <div id="home">
    <div class="home__blurb">
      <span>Notes from the desk of a terminally-online developer</span>
      <span class="home__blurb__line"></span>
    </div>
    <ul v-if="posts" class="posts__index">
      <post-listing v-for="(post, key) in posts" :key="key" :content="post"></post-listing>
    </ul>
    <post-nav :offset="offset" :count="posts.length" @prev="postsPrev" @next="postsNext"></post-nav>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '../store'
import PostListing from '../components/PostListing.vue'
import PostNav from '../components/PostNav.vue'

export default defineComponent({
  name: 'PostView',
  components: {
    PostListing,
    PostNav
  },
  setup() {
    const store = useStore()
    const posts = computed(() => store.state.content.posts)
    const offset = computed(() => store.state.content.offset)

    if (!posts.value.length) store.dispatch('getPosts')

    const postsPrev = () => {
      store.dispatch('setOffset', offset.value - 10)
    }

    const postsNext = () => {
      store.dispatch('setOffset', offset.value + 10)
    }

    return { posts, offset, postsPrev, postsNext }
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
