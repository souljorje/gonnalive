import { capitalize } from '@/utils';

export const generateState = (items) => items.reduce((acc, item) => {
  acc[item] = false;
  return acc;
}, {});
export const generateGetters = (items) => items.reduce((acc, item) => {
  const getters = {
    [item](state) {
      return state[item];
    },
  };
  return { ...acc, ...getters };
}, {});
export const generateMutations = (items) => items.reduce((acc, item) => {
  const capitalizedItem = capitalize(item);
  const mutations = {
    [`toggle${capitalizedItem}`](state, value) {
      if (typeof value !== 'undefined') {
        state[item] = value;
      } else {
        state[item] = !state[item];
      }
    },
    [`activate${capitalizedItem}`](state) {
      state[item] = true;
    },
    [`deactivate${capitalizedItem}`](state) {
      state[item] = false;
    },
  };
  return { ...acc, ...mutations };
}, {});
export const generateActions = (items) => items.reduce((acc, item) => {
  const capitalizedItem = capitalize(item);
  const getters = {
    [`toggle${capitalizedItem}`]({ commit }, value) {
      commit(`toggle${capitalizedItem}`, value);
    },
    [`activate${capitalizedItem}`]({ commit }) {
      commit(`activate${capitalizedItem}`);
    },
    [`deactivate${capitalizedItem}`]({ commit }) {
      commit(`deactivate${capitalizedItem}`);
    },
  };
  return { ...acc, ...getters };
}, {});
