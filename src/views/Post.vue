<template>
  <post-content :content="post" v-if="post"></post-content>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '../store'
import PostContent from '../components/PostContent.vue'

export default defineComponent({
  name: 'PostView',
  components: {
    PostContent
  },
  setup() {
    const route = useRoute()
    const store = useStore()

    const slug = route.params.slug
    const post = computed(() => store.state.content.post)

    if (!post.value) {
      store.dispatch('getPost', slug)
    }

    return { post }
  }
})
</script>
