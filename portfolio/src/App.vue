<template>
  <v-app>
    <!-- <div class="starry-bg">
      <v-img
        :src="require('/assets/starry.jpg')"
        class="my-3"
        cover
        alt="Background photo of a starry night"
      />
      <span>starry Photo by <a href="https://unsplash.com/@jeremyperkins?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jeremy Perkins</a> on <a href="https://unsplash.com/s/photos/stars?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
      <span>starry1 Photo by <a href="https://unsplash.com/@sonance?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Viktor Forgacs</a> on <a href="https://unsplash.com/s/photos/stars?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
      <span>starry2 Photo by <a href="https://unsplash.com/@sonance?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Viktor Forgacs</a> on <a href="https://unsplash.com/s/photos/stars?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    </div> -->

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
