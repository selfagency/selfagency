import { GithubBlog } from '@rena.to/github-blog'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { AppState, GetPostsResult, Post } from '../main.d'

const blog = new GithubBlog({
  repo: 'selfagency/selfagency',
  token: process.env.VUE_APP_GH_TOKEN
})

const key: InjectionKey<Store<AppState>> = Symbol()

const store: Store<AppState> = createStore<AppState>({
  state: {
    cache: [],
    content: {
      post: null,
      posts: [],
      offset: 0
    }
  },
  mutations: {
    ADD_TO_CACHE(state, payload: Post) {
      state.cache.push(payload)
    },
    SET_OFFSET(state, payload: number) {
      state.content.offset = payload
    },
    SET_POSTS(state, payload: GetPostsResult) {
      console.log(payload)
      payload.edges.forEach(edge => {
        state.content.posts.push(edge.post)
      })
    },
    SET_POST(state, payload: Post) {
      state.content.post = payload
    }
  },
  actions: {
    async setOffset({ commit }, offset: number) {
      commit('SET_OFFSET', offset)
    },
    async getPosts({ commit }, offset: number) {
      try {
        const posts = await blog.getPosts({
          query: { type: 'post', state: 'published' },
          pager: { limit: 10, offset }
        })

        commit('SET_POSTS', posts)
      } catch (error) {
        console.error(error)
      }
    },
    async getPost({ commit, state }, slug) {
      try {
        const cached = state.cache.filter(p => p.labels.slug === slug)[0]

        if (cached) {
          commit('SET_POST', cached)
        } else {
          const post = await blog.getPost({
            query: { slug }
          })

          commit('ADD_TO_CACHE', post.post)
          commit('SET_POST', post.post)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
})

function useStore(): Store<AppState> {
  return baseUseStore(key)
}

export { store, key, useStore }
