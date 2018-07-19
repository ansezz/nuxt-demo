
import { news } from '@/services'


export const state = () => ({
  latest_news: [],
  current_post: {}
})

export const mutations = {
  //Set the latest news to state
  SET_NEWS_LATEST: (state, { list }) => {
    state.latest_news = list
  },

  SET_POST_CURRENT: (state, { list }) => {
    state.current_post = list
  },
}

export const actions = {
  //Get the latest news
  async LOAD_NEWS_LATEST ({ commit }) {
    await news.latest().then(({data}) => {
      commit('SET_NEWS_LATEST', { list: data })
    })
  },

  async LOAD_POST_CURRENT ({ commit }, { slug }) {
    await news.singular(slug).then(({data}) => {
      commit('SET_POST_CURRENT', { list: data })
    })
  },
}
