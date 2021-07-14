<template>
  <article class="post__content">
    <time v-if="content.createdAt" class="post-content__date" :datetime="content.createdAt">
      {{ fmtDate(content.createdAt) }}
    </time>
    <h1 class="post__content__title" v-if="content.title">{{ smartypants(content.title, 'qDew') }}</h1>
    <div class="post__content__body" v-if="content.body" v-html="marked(content.body, { smartypants: true })"></div>
  </article>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import marked from 'marked'
import smartypants from 'smartypants'
import { defineComponent, PropType } from 'vue'
import { Post } from '../main.d'

const fmtDate = (date: string) => dayjs(date).format('MMM D, YYYY @ h:mma')

export default defineComponent({
  name: 'PostContent',
  props: {
    content: {
      type: [Object] as PropType<Post>,
      required: true
    }
  },
  setup() {
    return { marked, fmtDate, smartypants }
  }
})
</script>

<style lang="scss" scoped>
.post__content {
  .post__content__title {
    @apply mb-0 text-5xl;
  }

  .post__content__date {
    @apply mb-4 italic;
  }

  .post__content__body {
    ::deep {
      @apply prose;

      p {
        @apply mb-4;
      }
    }
  }
}
</style>
