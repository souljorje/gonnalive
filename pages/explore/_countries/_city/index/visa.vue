<template>
  <v-container>
    <div class="headline my-2">
      Visa conditions for {{ fromCountryName }} citizens in {{ toCountryName }}
    </div>
    <v-divider class="my-4" />
    <template v-if="visaRequired">
      <v-alert
        prominent
        type="warning"
      >
        Visa is required
      </v-alert>
    </template>
    <template v-else>
      <v-alert
        prominent
        type="success"
      >
        You don't need visa, welcome! 🤗
      </v-alert>
    </template>
    <v-alert
      dense
      type="info"
    >
      See conditions on official government website
      <v-btn
        link
        text
      >
        open
        <v-icon right>
          mdi-open-in-new
        </v-icon>
      </v-btn>
    </v-alert>
  </v-container>
</template>

<script>
import { getCountryCode } from '@/utils/country';

import explore from '@/mixins/explore';

const splitByTo = (str) => str.split('-to-');
const getFrom = (str) => splitByTo(str)[0];
const getTo = (str) => splitByTo(str)[1];

const NAME = 'visa';

export default {
  mixins: [explore],
  async asyncData({ app, params }) {
    const to = getTo(params.countries);
    const toCountryCode = getCountryCode(to);
    const from = getFrom(params.countries);
    const fromCountryCode = getCountryCode(from);
    const url = `${process.env.BACKEND_URL}/${fromCountryCode}/${toCountryCode}/${NAME}`;
    try {
      const response = await app.$axios.$get(url);
      return response;
    } catch (error) {
      return {};
    }
  },
  data: () => ({
    visaRequired: false,
    link: '',
  }),
};
</script>
