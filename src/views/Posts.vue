<template>
  <article v-if="post">
    <h2>Post</h2>
    <h1>{{ smartypants(post.title, 'qDew') }}</h1>
    <div>
      <small>{{ fmtDate(post.createdAt) }}</small>
    </div>
    <div v-html="marked(post.body, { smartypants: true })"></div>
  </article>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import marked from 'marked'
import smartypants from 'smartypants'
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '../store'

const fmtDate = (date: string) => dayjs(date).format('MMM D, YYYY @ h:mma')

export default defineComponent({
  name: 'Post',
  setup() {
    const route = useRoute()
    const store = useStore()

    const slug = route.params.slug
    const post = computed(() => store.state.content.post)

    if (!post.value) {
      store.dispatch('getPost', slug)
    }

    return { post, marked, fmtDate, smartypants }
  }
})
</script>
