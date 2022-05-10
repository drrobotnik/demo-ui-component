import Vue from 'vue';
import Vuetify, {
} from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
  theme: {
    themes: {
      light: {
        primary: '#e71316',
        secondary: '#555759',
        accent: '#8c9eff',
        error: '#f2171c',
      },
    },
  },
});
