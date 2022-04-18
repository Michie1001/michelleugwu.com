<template>
  <v-app>
    <v-main>
      <Landing/>
    </v-main>
  </v-app>
</template>

<script>
import Landing from './components/Landing';

export default {
  name: 'App',

  components: {
    Landing,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import '@/scss/app.scss';
  @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap');

  .works-section {
    font-family: 'New Tegomin', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #app{
    font-family: 'Nunito', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>