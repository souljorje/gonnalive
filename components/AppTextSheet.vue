<template>
  <VSheet
    tile
    color="rgba(255, 255, 255, 0.9)"
    class="pa-2"
    style="max-width: 740px"
    v-bind="$attrs"
  >
    <slot />
  </VSheet>
</template>

<script>
export default {
  name: 'AppTextSheet',
};
</script>
