<template>
  <VNavigationDrawer
    v-model="sidebarMenu"
    app
  >
    <VList>
      <VListItem
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        @click.stop="sidebarMenu = false"
      >
        <VListItemAction>
          <VIcon>{{ item.icon }}</VIcon>
        </VListItemAction>
        <VListItemContent>
          <VListItemTitle v-text="item.title" />
        </VListItemContent>
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AppSidebarMenu',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    clipped: false,
  }),
  computed: {
    sidebarMenu: {
      get() {
        return this.$store.getters['globals/sidebarMenu'];
      },
      set(value) {
        this.toggleSidebarMenu(value);
      },
    },
  },
  methods: {
    ...mapActions({
      toggleSidebarMenu: 'globals/toggleSidebarMenu',
    }),
  },
};
</script>
