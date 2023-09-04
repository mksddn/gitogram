// import * as api from '@/api'

// export const trendings = {
//   namespaced: true,
//   state: {
//     trendings: {
//       data: {},
//       loading: false,
//       error: ""
//     }
//   },
//   getters: {
//   },
//   mutations: {
//     SET_TRENDINGS_DATA(state, payload) {
//       state.trendings.data = payload;
//     },
//     SET_TRENDINGS_LOADING(state, payload) {
//       state.trendings.loading = payload;
//     },
//     SET_TRENDINGS_ERROR(state, payload) {
//       state.trendings.error = payload;
//     }
//   },
//   actions: {
//     async fetchTrendings({ commit }) {
//       commit('SET_TRENDINGS_LOADING', true);
//       try {
//         const { data } = await api.trendings.getTrendings()
//         commit('SET_TRENDINGS_DATA', data.items);
//       } catch (error) {
//         commit('SET_TRENDINGS_ERROR', 'Не удалось получить список репозиториев');
//       } finally {
//         commit('SET_TRENDINGS_LOADING', false);
//       }
//     }
//   }
// }


import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_TRENDINGS (state, trendings) {
      state.data = trendings
    },

    SET_README: (state, payload) => {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.readme
        }
        return repo
      })
    }

  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.data.find((item) => item.id === id)
    }
  },
  actions: {
    async fetchTrendings ({ state, commit, rootState }) {
      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_TRENDINGS', data.items)
      } catch (error) {
        console.log(error)
        throw error
      }
    },
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, readme: data })
      } catch (error) {
        console.log('Ошибка ' + error)
        throw error
      }
    }
  }
}
