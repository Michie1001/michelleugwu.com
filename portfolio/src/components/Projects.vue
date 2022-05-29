<template v-on:scroll.native="onPageEnd">
  <div class="projects">
    <div class="main-content">

    <div class="fixed-banner">
      <v-img
        class="overlapImage"
        alt="Illustrated waves on an open book"
        dark
        contain
        :src="require('../assets/imgs/book.png')"
      ></v-img>

        <div id="tabs" class="tabs" sticky>
          <span @click="goto('web')">Frontend Web</span> |
          <span @click="goto('sketches')">Sketches</span> |
          <span @click="goto('mobile')">Mobile</span> |
          <span @click="goto('illustrations')">Illustrations</span> |
          <span @click="goto('animation')">Animation</span>
        </div>
    </div>

    <div class="portfolioBlock">
      <div>
        <h2 ref="web">Web</h2>
        <Web />
      </div>

      <div>
        <h2 ref="sketches">Sketches</h2>
        <Sketches />
      </div>

      <div>
        <h2 ref="mobile">Mobile</h2>
        <div class="center">
          <p>Soon to be uploaded</p>
        </div>
      </div>

      <div>
        <h2 ref="illustrations">Illustrations</h2>
        <Illustrations />
      </div>

      <div>
        <h2 ref="animation">Animation</h2>
        <div class="center">
          <b>Check out my short clips 
           <a href="https://bit.ly/39ZJLAJ" target="_blank"> here</a>
          </b>
        </div>
      </div>
    </div>

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
  import Web from './Works/Web.vue'
  import Sketches from './Works/Sketches.vue'
  import Illustrations from './Works/Illustrations.vue'
  import Footer from './Footer.vue'

  export default {
    name: 'Projects',

    components: {
      Web,
      Footer,
      Sketches,
      Illustrations,
    },

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
      goto(refName) {
        var element = this.$refs[refName];
        var top = element.offsetTop;

        window.scrollTo(0, top);
      },
      stickyNav: function(){
        let tabs = document.getElementById("tabs");

        let sticky = tabs.offsetTop;
        
        if (window.scrollY >= sticky) {
          tabs.classList.add("sticky")
        } else {
          tabs.classList.remove("sticky");
        }
      }
    },
  }
</script>