import colors from 'vuetify/es5/util/colors';
import dotenv from 'dotenv';
import formatter from 'eslint/lib/cli-engine/formatters/stylish';
// import strapiAuthStrategy from './auth/strapi.strategy';

dotenv.config();

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    // titleTemplate: `%s - ${process.env.npm_package_name}`,`
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: colors.purple.lighten3 },
  /*
   ** Global CSS
   */
  css: [{ src: '~assets/styles/index.scss', lang: 'scss' }],
  /*
   ** Default page transition
   */
  pageTransition: 'fade-transition',
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/axios' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // 'cookie-universal-nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/auth',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // '@nuxtjs/apollo',
    '@nuxtjs/style-resources',
    // '@nuxtjs/markdownit',
    [
      'nuxt-imagemin',
      {
        svgo: {
          removeViewBox: false,
        },
      },
    ],
  ],

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  // markdownit: {
  //   preset: 'default',
  //   breaks: true,
  //   injected: true,
  // },

  styleResources: {
    // scss: ['@/assets/styles/variables.scss'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    credentials: true,
    baseUrl: process.env.BACKEND_URL,
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    defaultAssets: {
      font: {
        family: 'Roboto',
      },
      icons: 'mdi',
    },
    customVariables: ['~/assets/styles/variables.scss'],
    theme: {
      customProperties: true,
      dark: false,
      themes: {
        light: {
          primary: colors.purple.lighten1,
          accent: colors.grey.lighten3,
          secondary: colors.teal.lighten3,
          info: colors.blue.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent4,
        },
      },
    },
  },

  // apollo: {
  //   clientConfigs: {
  //     default: {
  //       httpEndpoint: `${process.env.STRAPI_URL || 'http://localhost:1337'}/graphql`,
  //     },
  //   },
  //   httpLinkOptions: {
  //     credentials: 'same-origin',
  //   },
  // },

  // auth: {
  //   localStorage: false,
  //   redirect: {
  //     callback: '/callback',
  //     home: '/',
  //     login: '/login',
  //   },
  //   strategies: {
  //     local: false,
  //     strapi: strapiAuthStrategy({
  //       strapiUrl: process.env.STRAPI_URL,
  //     }),
  //   },
  // },

  /*
   ** Build configuration
   */
  build: {
    // transpile: ['vee-validate/dist/rules'],

    babel: {
      /**
       * optional chaining foo?.bar?.baz;
       * loose means it won't chain null:
       * const foo = { bar: null };
       * const baz = foo?.bar // undefined
       */
      plugins: [['@babel/plugin-proposal-optional-chaining', { loose: true }]],
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      // eslint on runtime
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            formatter,
            emitWarning: true,
          },
        });
      }

      if (isDev) {
        config.devtool = isClient ? 'source-map' : 'inline-source-map';
      }
      // if (isDev) {
      //   config.devtool = isClient ? 'eval-source-map' : 'inline-source-map';
      // } else {
      //   config.devtool = false;
      // }

      /**
       * inline svg
       * import icon from '@/assets/img/icon.svg?inline';
       * components: { icon }
       * <icon />
       */
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'));
      svgRule.test = /\.(png|jpe?g|gif|webp)$/;
      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            loader: 'vue-svg-loader',
            options: {
              svgo: {
                plugins: [
                  {
                    removeViewBox: false,
                  },
                  {
                    cleanupIDs: false,
                  },
                ],
              },
            },
          },
          // defaults
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: 'img/[name].[hash:7].[ext]',
            },
          },
          {
            loader: 'file-loader',
            query: {
              name: 'assets/[name].[hash:8].[ext]',
            },
          },
        ],
      });
    },
  },
};
