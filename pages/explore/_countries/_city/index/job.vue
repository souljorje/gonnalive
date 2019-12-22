<template>
  <v-container>
    <div class="headline my-2">
      Where to find job in {{ city }}?
    </div>
    <v-divider class="my-4" />
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.name"
        lg="3"
        md="4"
        sm="6"
        xs="12"
      >
        <ServiceCard
          link
          :href="item.link"
          :name="item.name"
          :description="item.description"
          :img="item.logo"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getCountryCode } from '@/utils/country';
import { appendHttp } from '@/utils';
import explore from '@/mixins/explore';

import ServiceCard from '@/components/ServiceCard';

const splitByTo = (str) => str.split('-to-');
const getFrom = (str) => splitByTo(str)[0];
const getTo = (str) => splitByTo(str)[1];

const NAME = 'job';

export default {
  components: {
    ServiceCard,
  },
  mixins: [explore],
  async asyncData({ app, params }) {
    const to = getTo(params.countries);
    const toCountryCode = getCountryCode(to);
    const from = getFrom(params.countries);
    const fromCountryCode = getCountryCode(from);
    const url = `${process.env.BACKEND_URL}/${fromCountryCode}/${toCountryCode}/${NAME}`;
    try {
      const response = await app.$axios.$get(url);
      const items = response.map((item) => ({
        ...item,
        link: appendHttp(item.link),
      }));
      return {
        items,
      };
    } catch (error) {
      return {};
    }
  },
  data: () => ({
    items: [],
  }),
};
</script>
