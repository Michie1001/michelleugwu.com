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
  
</style>