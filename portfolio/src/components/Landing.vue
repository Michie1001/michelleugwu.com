<template v-on:scroll.native="onPageEnd">
  <div class="landing">

    <div class="main-content" v:on:scroll.native="">
      <div class="roundbg big"></div>
      <nav class="about">    
        <div class="roundbg only-dktp"></div>
        <div class="roundbg small"></div>
        <h1>
          About Michelle <!-- (watch thi https://youtu.be/RIPdc88dZRI?list=WL to arrange my resume) -->
        </h1>
      </nav>
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
        <div class="scrollable">
          <div class="works" v-for="(work, index) in works"
            :key="index">
            <div class="preview-image">
              <img alt="work.alt" :src="work.preview"
                />
              <div class="text-area">
                <h3>{{work.name}}</h3>
                <p>{{work.description}}</p>
                <button>
                  <a :href="work.link">Go to Project</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="large-illustrated-banner">
        <v-img
            class="banner"
            alt="illustrated smiling girl with large hoop earrings containing the words - Stay Free"
            contain
            :src="require('../assets/imgs/banner.png')"
          ></v-img>
      </div>

      <div class="postscript">
        <h2>By Michelle</h2>
        <p>All illustrations by Michelle</p>
        <div class="contactMe">
          <p>Send me an email, let's work together.<br/>
          <b>michieugwu@gmail.com</b></p>
        </div>
      </div>

      <div class="wave-effect">
        <!-- Gotten the waves code from Daniel Österman on codepen, great stuff -->
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="#e0e0e0" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.8)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="#f1e2e1" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#cdd2e3" />
        </g>
        </svg>
      </div>

      <footer>
        <div class="contacts-section">
          <div class="contacts"
            v-for="reach in contact"
            :key="reach.id">
              <a :href="reach.link">
                <h5>
                  <i :class="reach.icon"></i>
                  <br>
                  <!-- {{reach.name}} -->
                </h5>
            </a>
          </div>
        </div>

        <div class="footer-logo">
          <v-img            
            dark
            class="imgg"
            alt="Michelle's logo"
            contain
            width="30px"
            height="30px"
            :src="require('../assets/imgs/profileAvatar.svg')"
          >
          </v-img>
          <small>&copy; Copyright 2021, Michelle Ugwu</small> 
        </div>
      </footer>

      <v-btn
        v-on:click="toTop"
        class="toTop"
        elevation="2"
        fab
        icon
        raised
      >
        <i class="fas fa-fighter-jet"></i>
      </v-btn>
      <button  v-on:click="toTop">
      </button>

    </div>

    
     
  </div>
</template>

<script>
  import gridArea from './GridArea.vue';
  import * as ext from '../assets/extras.js'

  export default {
    name: 'Landing',

    props: {

    },

    components: {
      gridArea,
    },


    data: () => ({
      contact: [
        {
          icon: 'fab fa-linkedin-in',
          name: 'LinkedIn',
          link: 'www.linkedin.com/in/michelle-ugwu',
        },
        {
          icon: 'fab fa-instagram',
          name: 'Instagram',
          link: 'https://www.instagram.com/michie_1001/',
        },
        {
          icon: 'fab fa-github',
          name: 'Github',
          link: 'https://github.com/Michie1001',
        },
        {
          icon: 'fab fa-stack-overflow',
          name: 'Stack Overflow',
          link: 'https://stackoverflow.com/users/story/6276301',
        },
        {
          icon: 'fab fa-twitter',
          name: 'Twitter',
          link: 'https://twitter.com/Michie1001',
        },
      ],
      works:[
        {
          id:'1',
          preview: '../assets/imgs/whistling-pine.jpg',
          alt: 'Whistling Pine image',
          name: 'Whistling Pine - Nexter',
          description: 'A play on CSS grids for a make believe real estate management company',
          link:'https://whistlingpine-nexter.netlify.app/',
        },
        {
          id:'2',
          preview: '',
          alt: 'Road Runner image',
          name: 'Road Runner',
          description: 'Personal project featuring my flexbox playground in a make-believe travel company\'s website',
          link:'https://theroadrunner.netlify.app/',
        },
        {
          id:'3',
          preview: '',
          alt: 'Shalom image',
          name: 'Shalom',
          description: 'Personal project for an airbnb-ish website',
          link:'https://shalom-by-mist.netlify.app/',
        },
        {
          id:'4',
          preview: '',
          alt: 'Hotels.ng image',
          name: 'Hotels.ng',
          description: 'I worked on numerous pages during my time there',
          link:'hotels.ng',
        },
        {
          id:'5',
          preview: '',
          alt: 'Hotels.ng Places',
          name: 'Places | Hotels.ng',
          description: 'Places of attraction, Hotels.ng',
          link:'hotels.ng/places',
        },
        {
          id:'6',
          preview: '',
          alt: 'Nepa image',
          name: 'nepa.ng',
          description: 'A product I was part of the team for in Hotels.ng',
          link:'',
        },
        {
          id:'7',
          preview: '',
          alt: 'Pangaea image',
          name: 'Pangaea',
          description: 'I created this for an assessment test',
          link:'',
        },
        {
          id:'8',
          preview: '',
          alt: 'Telex image',
          name: 'Telex',
          description: 'A project I was a part of the team for at Hotels.ng',
          link:'',
        },
        {
          id:'9',
          preview: '',
          alt: 'Movie poster image',
          name: 'Movie poster',
          description: 'A work done with Adobe Stock',
          link:'',
        },
        {
          id:'10',
          preview: '',
          alt: 'Embo image',
          name: 'Embo',
          description: 'A gaming enterprise',
          link:'',
        },
        
      ],
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

    // created() {
    //   window.addEventListener('scroll', this.onPageEnd);
    // },
    // destroyed() {
    //   window.addEventListener('scroll', this.onPageEnd);
    // },

    methods: {
      // onPageEnd: function(){
      //   let toTop = document.querySelector('.toTop');
      //   if( document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      //     toTop.style.display = "block";
      //   }
      //   else {
      //     toTop.style.display = "none";
      //   }
      // },
      // toTop: function() {
      //   document.body.scrollTop = 0; //for safari
      //   document.documentElement.scrollTop = 0; //for chrome
      // },
      // arc: function() {
      //   var arc = new CircleType(document.getElementById('arc'));
      //   window.addEventListener('resize', function updateRadius() {
      //     arc.radius(arc.element.offsetWidth / 2);
      //   });
      //   updateRadius();
      // },
    },
  }
</script>
