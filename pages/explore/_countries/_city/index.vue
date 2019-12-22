<template>
  <div>
    <div
      :class="['purple', $style.hero]"
      :style="heroStyles"
    >
      <v-container :class="[$style.container, 'd-flex flex-column']">
        <v-row align="center">
          <v-col md="6">
            <v-card class="pa-3">
              <div class="display-1">
                👋 Welcome to {{ city }}, {{ toCountryName }}!
                <br>
                Explore local's essentials 👇
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-toolbar>
        <!-- <div :class="['container', $style.toolbarContainer]"> -->
        <v-toolbar-items>
          <!-- <v-container> -->
          <v-btn
            v-for="item in children"
            :key="item.name"
            text
            nuxt
            :to="item.link"
          >
            {{ item.name }}
          </v-btn>
          <!-- </v-container> -->
        </v-toolbar-items>
        <!-- </div> -->
      </v-toolbar>
      <div>
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
import explore from '@/mixins/explore';

export default {
  // eslint-disable-next-line
  validate({ redirect, params }) {
    if (!params.city) {
      redirect('/');
    } else {
      return true;
    }
  },
  mixins: [explore],
  data: () => ({
    children: [
      {
        name: 'Visa',
        link: 'visa',
      },
      {
        name: 'Accomodation',
        link: 'accomodation',
      },
      {
        name: 'Job',
        link: 'job',
      },
      {
        name: 'Transport',
      },
      {
        name: 'Insurance',
      },
      {
        name: 'Cellular networks',
      },
      {
        name: 'Bank account',
      },
      {
        name: 'Useful apps',
      },
      {
        name: 'Learn language',
      },
      {
        name: 'Find community',
      },
    ],
  }),
  computed: {
    background() {
      let image;
      try {
        // eslint-disable-next-line
        image = require(`@/assets/img/${this.city.toLowerCase()}.jpg`);
      } catch (error) {
        console.log('no image');
      }
      // eslint-disable-next-line
      return image || require("@/assets/img/city.png");
    },
    heroStyles() {
      return {
        backgroundImage: `url(${this.background})`,
      };
    },
  },
};
</script>

<style lang="scss" module>
.hero {
  background-size: cover;
  background-position: center;
}
.container {
  height: calc(100vh - 64px - 64px);
  max-height: 400px;
}
.toolbarContainer {
  padding: 0;
  height: 100%;
}
</style>
