<template>
  <v-autocomplete
    v-model="model"
    label="Where you going?"
    :loading="loading"
    :items="items"
    :search-input.sync="searchValue"
    hide-no-data
    clearable
    return-object
  />
</template>

<script>
import { debounce } from '@/utils';
import countries from '@/utils/countries.json';

const fuckCors = 'https://cors-anywhere.herokuapp.com/';
const citiesApi = `https://maps.googleapis.com/maps/api/place/autocomplete/json?types=(cities)&language=en&key=${process.env.GOOGLE_MAPS_API_KEY}`;
const generateUrl = (value = '') => `${fuckCors}${citiesApi}&input=${value}`;

export default {
  name: 'InputCities',
  props: {
    value: {
      type: [String, Object],
      default: () => undefined,
    },
  },
  data: () => ({
    entries: [],
    selectedItem: '',
    searchValue: '',
    loading: false,
  }),
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        const country = countries.find(
          (item) => item.name.toLowerCase() === value.country.toLowerCase(),
        );
        const newValue = {
          ...value,
          country,
        };
        this.selectedItem = newValue;
        this.$emit('input', newValue);
      },
    },
    items() {
      return this.entries.reduce((acc, item) => {
        const text = item.description;
        const name = item.terms[0].value;
        const country = item.terms[item.terms.length - 1].value;
        const newItem = {
          text,
          value: text,
          name,
          country,
        };
        acc.push(newItem);
        return acc;
      }, []);
    },
  },
  watch: {
    searchValue: {
      immediate: false,
      handler: 'debouncedSearchCity',
    },
  },
  methods: {
    // eslint-disable-next-line
    debouncedSearchCity: debounce(function(value) {
      if (!value || this.loading) return;
      this.loading = true;
      this.searchCity(value);
    }, 300),
    async searchCity(value) {
      try {
        const url = generateUrl(value);
        const response = await this.$axios.$get(url);
        const entries = response.predictions;
        this.entries = entries;
      } catch (error) {
        // console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
