<template>
  
  <div class="works-section">
    <div class="fixed-banner">
      <v-img
        class="overlapImage"
        alt="Illustrated waves on an open book"
        dark
        contain
        :src="require('../assets/imgs/book.png')"
      ></v-img>
      <h2>Works</h2>
    </div>

    <div class="art-area">
      <ul>
        <router-link to="/frontend">
          <li>
            Frontend
          </li>
        </router-link>
        <router-link to="/artworks">
          <li>
            Artworks
          </li>
        </router-link>
        <router-link to="/illustrations">
          <li>
            Illustrations
          </li>
        </router-link>
        <!-- <router-link to="/animations">
          <li>
            Animations
          </li>
        </router-link> -->
      </ul>
      
      <router-view/>
    </div>
  
  </div>
</template>

<script>
  export default{
    name: "Work Section",

    data: () => ({
      }),
    methods: {
      frontend() {
        this.tab = "frontendTab";
      },
      sketches() {
        this.tab = "sketchesTab";
      },
      illustrations() {
        this.tab = 'illustrationsTab';
      },
      animations() {
        this.tab = 'animationsTab';
      },
    }
  }
</script>