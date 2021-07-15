<template>
  <li class="posts__listing" v-if="content">
    <h1 class="posts__listing__title" v-if="content.title">
      <router-link :to="`/${content.labels.slug[0]}`">
        {{ smartypants(content.title, 'qDew') }}
      </router-link>
    </h1>
    <time class="posts__listing__date" v-if="content.createdAt" :datetime="content.createdAt">
      {{ fmtDate(content.createdAt) }}
    </time>
  </li>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import smartypants from 'smartypants'
import { defineComponent, PropType } from 'vue'
import { Post } from '../main.d'

const fmtDate = (date: string) => dayjs(date).format('MMM D, YYYY @ h:mma')

export default defineComponent({
  name: 'PostListing',
  props: {
    content: {
      type: [Object] as PropType<Post>,
      required: true
    }
  },
  setup() {
    return { fmtDate, smartypants }
  }
})
</script>

<style lang="scss" scoped>
.posts__listing {
  @apply flex flex-col mb-8;

  .posts__listing__title {
    @apply inline-block text-xl font-bold;

    a:hover {
      text-decoration: underline;
    }
  }
}
</style>
