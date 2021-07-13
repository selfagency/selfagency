import { GithubBlog } from '@rena.to/github-blog'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { Post, State } from '../main.d'

const blog = new GithubBlog({
  repo: 'selfagency/selfagency',
  token: process.env.GH_TOKEN
})

const key: InjectionKey<Store<State>> = Symbol()

const store: Store<State> = createStore<State>({
  state: {
    cache: [],
    content: {
      post: null,
      posts: [],
      offset: 0
    }
  },
  mutations: {
    addToCache(state, payload: Post) {
      state.cache.push(payload)
    },
    setOffset(state, payload: number) {
      state.content.offset = payload
    },
    setPosts(state, payload: Array<Post>) {
      state.content.posts.push(...payload)
    },
    setPost(state, payload: Post) {
      state.content.post = payload
    }
  },
  actions: {
    async getPosts({ commit }, offset = 0) {
      const posts = await blog.getPosts({
        query: { type: 'post', state: 'published' },
        pager: { limit: 10, offset }
      })

      commit('addPosts', posts)
    },
    async getPost({ commit, state }, slug) {
      try {
        const cached = state.cache.filter(p => p.labels.slug === slug)[0]

        if (cached) {
          commit('setPost', cached)
        } else {
          const post = await blog.getPost({
            query: { slug }
          })

          commit('addToCache', post.post)
          commit('setPost', post.post)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
})

function useStore(): Store<State> {
  return baseUseStore(key)
}

export { store, key, useStore }
