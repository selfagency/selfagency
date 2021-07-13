<template>
  <article>
    <h1>{{ smartypants(content.title, 'qDew') }}</h1>
    <div>
      <small>{{ fmtDate(content.createdAt) }}</small>
    </div>
    <div v-html="marked(content.body, { smartypants: true })"></div>
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
