<template v-on:scroll.native="onPageEnd">
  <div class="landing">

    <div class="main-content" v:on:scroll.native="">
      <jumbotron/>
      <div class="curved-bar">
      </div>

      <div class="titlePhoto">
          <v-img
            dark
            alt="Illustrated resting cat"
            lazysrc=""
            contain
            height= "200"
            width= "300"
            :src="require('../assets/imgs/kitty.png')"
          ></v-img>
      </div>

      <vue-typed-js
        :strings="['artist', 'writer', 'creative', 'designer', 'animator', 'frontend engineer']"
        :typeSpeed="80"
        :backSpeed="50"
        :backDelay="300"
        :loop="true"


        >
        <h2 class="main-heading">
          <span class="typing messages"></span><br>
          Obsessed with the ocean, fiction, space, animals and art
        </h2>
      </vue-typed-js>

      <gridArea :message="messageToShow"/>
      
      <workSection />

      <div class="large-illustrated-banner">
        <v-img
            class="banner"
            alt="illustrated smiling girl with large hoop earrings containing the words - Stay Free"
            contain
            :src="require('../assets/imgs/banner.png')"
          ></v-img>
      </div>

      <postScript />

      <Footer />

      
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-on:click="smooth"
            class="toTop"
            elevation="2"
            fab
            icon
            raised
            dark
            v-bind="attrs"
            v-on="on"
            >
            <i class="fas fa-fighter-jet"></i>
          </v-btn>
        </template>
        <span>Launch to top</span>
      </v-tooltip>

    </div>

    
     
  </div>
</template>

<script>
  import jumbotron from './Jumbotron.vue'
  import gridArea from './GridArea.vue'
  import workSection from './WorkSection.vue'
  import postScript from './PostScript.vue'
  import Footer from './Footer.vue'
  import * as ext from '../assets/extras.js'

  export default {
    name: 'Landing',

    props: {

    },

    components: {
      jumbotron,
      gridArea,
      workSection,
      postScript,
      Footer,
    },


    data: () => ({
      
      messageToShow: `Hello ${ext.message}`,
      messages: [
        'make things beautiful',
        'write code',
        'animate',
        'draw sometimes',
        'deal in fiction'
      ],
      show: 'false',
    }),

    created() {
      window.addEventListener('scroll', this.onPageEnd);
    },
    destroyed() {
      window.addEventListener('scroll', this.onPageEnd);
    },

    methods: {
      onPageEnd: function(){
        let toTop = document.querySelector('.toTop');
        if( document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
          toTop.style.display = "block";
        }
        else {
          toTop.style.display = "none";
        }
      },
      toTop: function() {
        document.body.scrollTop = 0; //for safari
        document.documentElement.scrollTop = 0; //for chrome
      },
      smooth: function(){
        document.querySelector('.about').scrollIntoView({ 
          behavior: 'smooth' 
        });
      }
    },
  }
</script>
