<template>
  <VCard
    :class="['mx-auto', $style.wrapper]"
    hover
    v-bind="$attrs"
  >
    <img
      :src="img"
      height="150px"
      :class="$style.image"
    >
    <div class="wrapper-content">
      <VCardTitle :class="$style.title">
        {{ name }}
      </VCardTitle>
      <VCardSubtitle>
        {{ description }}
      </VCardSubtitle>
    </div>
  </VCard>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" module>
.wrapper {
  height: 260px;
  text-overflow: ellipsis;
  overflow: hidden;
  &:hover .title {
    text-decoration: underline;
  }
}
.image {
  max-width: 100%;
}
</style>
