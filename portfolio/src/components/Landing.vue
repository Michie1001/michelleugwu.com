<template v-on:scroll.native="onPageEnd">
  <div>
    <div class="landing">

      <div class="main-content" v:on:scroll.native="">
        <jumbotron/>
        <div class="curved-bar">
        </div>

        <titlePhoto/>

        <!-- <div v-for="(message, i) in messages" :key="i">
          <vue-typed-js
            
            :stringsElement="'message'"
            >
            <h2 class="main-heading">
              <span class="typing messages"></span>, <br>
              Obsessed with the ocean, fiction, space, animals and art
            </h2>
          </vue-typed-js>
        </div> -->

        <vue-typed-js
          :strings="['artist', 'writer', 'creative', 'designer', 'animator', 'frontend engineer']"
          :typeSpeed="80"
          :backSpeed="50"
          :backDelay="300"
          :loop="true"

          >
          <h2 class="main-heading">
            <!-- <p>{{messageToShow}}</p> -->
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
    
  </div>
</template>

<script>
  import jumbotron from './Jumbotron.vue'
  import titlePhoto from './TitlePhoto.vue'
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
      titlePhoto,
      gridArea,
      workSection,
      postScript,
      Footer,
    },


    data: () => ({
      
      messageToShow: `Hello ${ext.message}`,
      // onPageEnd: `${ext}`,
      messages: [
        'make things beautiful',
        'write code',
        'animate',
        'draw sometimes',
        'deal in fiction'
      ],
      show: 'false',
    }),

    //Adding the .native up top or adding the created and destroyed
    //fix my scroll problem just fine either way
    //I chose less 

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
      },
    },
  }
</script>
