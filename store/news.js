
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
  LOAD_NEWS_LATEST:function ({ commit }) {
    news.latest().then(({data}) => {
      commit('SET_NEWS_LATEST', { list: data })
    })
  },

  LOAD_POST_CURRENT:function ({ commit }, { slug }) {
    news.singular(slug).then(({data}) => {
      commit('SET_POST_CURRENT', { list: data })
    })
  },
}
