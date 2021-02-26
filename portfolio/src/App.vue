<template>
  <v-app>
    <!-- <div class="starry-bg">
      <v-img
        :src="require('/assets/starry.jpg')"
        class="my-3"
        cover
        alt="Background photo of a starry night"
      />
      <span>Photo by <a href="https://unsplash.com/@jeremyperkins?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jeremy Perkins</a> on <a href="https://unsplash.com/s/photos/stars?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    </div> -->
    <v-app-bar
      app
      color="transparent"
      dark
      flat
    >
      <div class="d-flex align-center">
        <v-img
          alt="Michelle's Personal Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

      </div>

      <v-spacer></v-spacer>
      <!-- 
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <Landing/>
    </v-main>
    <v-bottom-navigation>
    </v-bottom-navigation>
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
