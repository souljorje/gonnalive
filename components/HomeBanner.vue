<template>
  <div :class="$style.wrapper">
    <VContainer :class="['d-flex flex-column', $style.container]">
      <v-row align="center">
        <v-col md="6">
          <v-card class="pa-3">
            <div class="headline font-weight-thin">
              Planning to immigrate?
            </div>
            <div class="display-2 font-weight-bold mb-2">
              Explore all you need!
            </div>
            <InputCountries v-model="country" />
            <InputCities v-model="city" />
            <VBtn
              nuxt
              block
              color="primary"
              :disabled="Boolean(!generatedUrl)"
              :to="generatedUrl"
            >
              <VIcon left>
                mdi-airplane-takeoff
              </VIcon>
              Explore
            </VBtn>
          </v-card>
        </v-col>
      </v-row>
    </VContainer>
  </div>
</template>

<script>
import InputCities from '@/components/InputCities';
import InputCountries from '@/components/InputCountries';

export default {
  name: 'HomeBanner',
  components: {
    InputCities,
    InputCountries,
  },
  data: () => ({
    city: undefined,
    country: undefined,
    buttons: [
      {
        text: 'Explore',
        icon: 'mdi-airplane-takeoff',
        url: '/',
        color: 'primary',
      },
    ],
  }),
  computed: {
    generatedUrl() {
      const from = this?.country?.name.toLowerCase();
      const toCountry = this?.city?.country?.name.toLowerCase();
      const toCity = this?.city?.name.toLowerCase();
      return from && toCountry && toCity
        ? `/explore/${from}-to-${toCountry}/${toCity}/visa`
        : undefined;
    },
  },
};
</script>

<style lang="scss" module>
.wrapper {
  background-image: url("~@/assets/img/banner.jpg");
  background-position: center;
  background-size: cover;
}
.container {
  height: calc(100vh - 64px);
  /* max-height: 500px; */
}
</style>
