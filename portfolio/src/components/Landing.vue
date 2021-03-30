<template v-on:scroll.native="onPageEnd">
  <div class="landing">

    <div class="main-content" v:on:scroll.native="">
      <div class="roundbg big"></div>
      <nav class="about">    
        <div class="roundbg only-dktp"></div>
        <div class="roundbg small"></div>
        <h1 id="arc">
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

      <h2 class="main-heading">
        <!-- <p>{{messageToShow}}</p> -->
        <span class="messages"></span>, <br>
        Obsessed with the ocean, fiction, space, animals and art
      </h2>

      <div class="grid-area">

        <div class="experience-section">
          <h3>What I've Been</h3>
          <div class="experience"
          v-for="exp in experience"
          :key="exp.id">
            <h4><span>{{exp.role}}</span> at {{exp.company}}</h4>
            <p>{{exp.date}}</p>
          </div>
        </div>

        <v-img
          class="babe"
          alt="Illustrated face of a girl with a tree behind her"
          dark
          contain
          height= "500"
          width= "500"
          :src="require('../assets/imgs/babe.png')"
        ></v-img>

        <div class="achievements-section">
          <h3>What I've Spent Time On</h3>
          <div class="achievements"
          v-for="ach in achievements"
          :key="ach.id">
            <p>{{ach}}</p>
          </div>
        </div>

        <div class="education-section">
          <h3>What I've Studied</h3>
          <div class="education"
          v-for="edu in education"
          :key="edu.id">
            <h4><span>{{edu.degree}}</span> at {{edu.institute}}</h4>
            <p>{{edu.date}}</p>
          </div>
        </div>

        <v-img
          class="collage"
          alt="Collage showcasing my recent certifications and assessment proficiencies"
          dark
          contain
          height= "100"
          width= "100"
          :src="require('../assets/imgs/giant.png')"
        ></v-img>

        <div class="skills-section">
          <span>Skills </span>
          <div class="specific__skills">
            <div class="skills"
              v-for="skill in skills"
              :key="skill.id">
                <p>{{skill}}</p>
            </div>
          </div>
          <v-divider></v-divider>
          <br>
          <span>Tools </span>
          <div class="specific__tools">
            <div class="tools"
              v-for="tool in tools"
              :key="tool.id">
                <p>{{tool}}</p>
            </div>
          </div>
        </div>

      </div>

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
            <div v-if ="workId == work.id">
              <div class="preview-image">
                <div v-for="(preview, imageIndex) in work" :key="imageIndex">
                  <img alt="work.alt" :src="preview"
                    />
                </div>
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

      <button class="toTop" v-on:click="toTop">
        <i class="fas fa-fighter-jet rot"></i>
      </button>

    </div>

    
     
  </div>
</template>

<script>
  import * as ext from '../assets/extras.js'

  export default {
    name: 'Landing',


    data: () => ({
      experience: [
        {
          role: 'Volunteer Code Instructor',
          company: 'Child Can Code',
          date: 'Taught primary school kids basic programming in 2016',
        },
        {
          role: 'Growth and Marketing Intern',
          company: 'Hotels.ng',
          date: 'Marketing experience at the start of my SIWES internship in 2017',
        },
        {
          role: 'Frontend Developer Intern',
          company: 'Hotels.ng',
          date: 'Swapped to the developers\' corner till the end of my SIWES internship',
        },
        {
          role: 'Frontend Engineer',
          company: 'Hotels.ng',
          date: 'For my NYSC in 2020',
        },
      ],
      achievements: [
        'I co-pioneered and co-organized forLoopUniben in the University of Benin',
        'I was recognized by Figma as one of the top 5 most consistent Figma users in Nigeria in 2018',
        'I joined a dance crew fresh out of high school and realized dancing wasn\'t for me',
        'I interviewed at Microsoft and my major reason for wanting to work there? Encarta!! Lol',
        'Also, I participated in the University of Benin 2015 Spelling Bee',
        'I participated in ALCwithGoogle and ALCwithMicrosoft, the first Frontstack Challenge, etc ...I participate a lot',
        'I was the Public Relations Officer for NACOSS in my 200level. Another social plug being that I was also in the Press Club in my high school',
        'For my final year seminar, I gave a talk on the Importance and Benefits of Gamification',
        'For my final year project, I implemented a design of a Virtual Tour of the University Campus using React360',
        'I\'m trying to get PADI certified cos I\'m definitely going to swim with whales and Orcas',
        'Advocating for VueJS'
      ],
      education: [
        {
          institute: 'University of Benin, Benin, Nigeria',
          degree: 'Biochemistry',
          date: 'Started off thinking I could overcome the metabolic pathways...pfft! What I did was learn how to carry out 5 lab tests in the hospital during my medical internship at the campus health center, in my second year',
        },
        {
          institute: 'University of Benin, Benin, Nigeria',
          degree: 'B.Sc, Computer Science',
          date: 'Graduated November 2019',
        },
        {
          institute: 'Carbon Animation, Lagos, Nigeria',
          degree: 'Animation Basics',
          date: '2021, I\'d have my animation reel up here',
        },
      ],
      tools: [
        'Google Analytics',
        'Figma',
        'Postman',
        'Adobe AfterEffects',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Adobe Lightroom',
        'Adobe Spark',
        'Actions on Google',
        'Mailchimp',
        'Email on Acid',
        'Canva',

      ],
      skills: [
        'VueJS',
        'Digital Design',
        'GraphQL',
        'Linux',
        'Fluent English',
        'Bootstrap',
        'Vuetify',
        'Laravel',
        'Sass',
        'Conversational Japanese',
        'Conversational German',
        'SEO',
      ],
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
          preview: 'require(\'../assets/imgs/whistling-pine.jpg\')',
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
