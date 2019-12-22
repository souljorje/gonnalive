import { getCountryByName } from '@/utils/country';
import { capitalize } from '@/utils';

const splitByTo = (str) => str.split('-to-');
const getFrom = (str) => splitByTo(str)[0];
const getTo = (str) => splitByTo(str)[1];

export default {
  computed: {
    toCountry() {
      const to = getTo(this.$route.params.countries);
      return getCountryByName(to);
    },
    fromCountry() {
      const from = getFrom(this.$route.params.countries);
      return getCountryByName(from);
    },
    toCountryName() {
      return this.toCountry?.name;
    },
    fromCountryName() {
      return this.fromCountry?.name;
    },
    toCountryCode() {
      return this.toCountry?.code;
    },
    fromCountryCode() {
      return this.fromCountry?.code;
    },

    city() {
      return capitalize(this.$route.params.city);
    },
  },
};
