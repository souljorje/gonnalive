<template>
  <v-autocomplete
    v-model="model"
    label="Where you from?"
    :items="items"
    :search-input.sync="searchValue"
    item-value="code"
    item-text="name"
    clearable
    return-object
  />
</template>

<script>
import countries from '@/utils/countries.json';

export default {
  name: 'InputCountries',
  props: {
    value: {
      type: [String, Object],
      default: () => undefined,
    },
  },
  data: () => ({
    items: countries,
    searchValue: '',
  }),
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>
