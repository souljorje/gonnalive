<template>
  <VApp dark>
    <AppSidebarMenu
      :items="items"
      class="hidden-sm-an-up"
    />
    <AppHeader
      :title="title"
      :items="items"
    />
    <VOverlay :value="false">
      <VProgressCircular
        indeterminate
        size="64"
      />
    </VOverlay>
    <VContent>
      <Nuxt />
    </VContent>
    <VFooter>
      <span>&copy; 2019</span>
    </VFooter>
  </VApp>
</template>

<script>
import AppSidebarMenu from '@/components/layout/AppSidebarMenu';
import AppHeader from '@/components/layout/AppHeader';
import menuItems from '@/components/layout/menuItems';

export default {
  components: {
    AppSidebarMenu,
    AppHeader,
  },
  data() {
    return {
      items: menuItems,
      title: 'gonna.live',
    };
  },
};
</script>
