import {
  generateState,
  generateGetters,
  generateMutations,
  generateActions,
} from '@/utils/globalsStore';

const GLOBALS = ['sidebarMenu'];

// Defining an empty state
export const state = () => ({
  ...generateState(GLOBALS),
});

export const getters = {
  ...generateGetters(GLOBALS),
};

// Create a mutation that set a user to your state and in a 'user' cookie
export const mutations = {
  ...generateMutations(GLOBALS),
};

export const actions = {
  ...generateActions(GLOBALS),
};
