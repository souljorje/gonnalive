<template>
  <VAppBar
    app
    style="background-color: #fafafa"
  >
    <VAppBarNavIcon
      class="hidden-sm-and-up"
      @click.stop="toggleSidebarMenu()"
    />
    <NuxtLink
      to="/"
      exact
    >
      <VToolbarTitle class="black--text">
        {{ title }}
      </VToolbarTitle>
    </NuxtLink>
    <VSpacer />
    <!-- <VToolbarItems class="hidden-xs-only">
      <VBtn
        v-for="item in items"
        :key="item.title"
        text
        nuxt
        :to="item.to"
      >
        {{ item.title }}
      </VBtn>
      <VMenu
        v-if="Boolean(username)"
        offset-y
      >
        <template v-slot:activator="{ on }">
          <VBtn
            text
            v-on="on"
          >
            {{ username }}
          </VBtn>
        </template>
        <VList>
          <VListItem
            v-for="(item, index) in userItems"
            :key="index"
            @click="item.action"
          >
            <VListItemTitle>{{ item.title }}</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <VBtn
        v-else
        nuxt
        to="login"
        text
      >
        Login/Register
      </VBtn>
    </VToolbarItems> -->
    <!-- <NuxtLink to="/cart">
      <VBtn icon>
        <VBadge
          right
          class="align-self-center"
        >
          <template #badge>
            <span>{{ cartItemsAmount }}</span>
          </template>
          <VIcon>
            mdi-cart
          </VIcon>
        </VBadge>
      </VBtn>
    </NuxtLink> -->
  </VAppBar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // userItems: [
      //   {
      //     title: 'Logout',
      //     action: this.logout,
      //   },
      // ],
    };
  },
  computed: {
    ...mapGetters({
      sidebarMenu: 'globals/sidebarMenu',
    }),
    // ...mapState('auth', {
    //   user: 'user',
    //   username: (state) => state?.user?.username,
    // }),
  },
  methods: {
    ...mapActions({
      toggleSidebarMenu: 'globals/toggleSidebarMenu',
    }),
    // logout() {
    //   this.$auth.logout();
    // },
  },
};
</script>
