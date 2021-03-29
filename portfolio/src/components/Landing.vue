<template v-on:scroll.native="onPageEnd">
  <div class="landing">
    <!-- <v-img
      dark
      max-height="650px"
      :src="require('../assets/starry.jpg')"
    > -->
      <!-- <div class="logo-area">
        <v-img
          class="shrink mr-2"
          contain
          transition="scale-transition"
          :src="require('../assets/logo.svg')"
        ></v-img>
      </div> there's no need for a logo at the moment--> 
<!--       <v-layout fill-height align-center>
        <v-container>
          <v-row align="center" justify="center" class="white--text text-center">
            <v-col cols="12">
              <h1
                :class="{'display-2': $vuetify.breakpoint.smAndUp, 'title font-weight-bold': $vuetify.breakpoint.smAndDown}"
                class="main-heading"
              >Hi, I'm Michelle <br>and I 
              <span class="messages"></span>
              </h1> -->
              <!-- <div
                :class="{'headline': $vuetify.breakpoint.smAndUp, 'subtitle-1': $vuetify.breakpoint.smAndDown}"
              >I make applications.</div> -->
           <!--  </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img> -->

    <!-- Fix up the scrollable one for mobile only. -->


<!--     <header>
      <div class="triangle left">
        <h2
          :class="{'display-2': $vuetify.breakpoint.smAndUp, 'title font-weight-bold': $vuetify.breakpoint.smAndDown}"
          class="main-heading">
          Hi, I'm Michelle, <br> <span class="messages"></span>, <br>
          and I am obsessed with the ocean,<br> 
          fiction, space, animals and art. <br>
        </h2>
      </div>
      <div class="triangle right">
        <h2
          :class="{'display-2': $vuetify.breakpoint.smAndUp, 'title font-weight-bold': $vuetify.breakpoint.smAndDown}"
          class="main-heading">
          Hi, I'm Michelle, <br> <span class="messages"></span>, <br>
          and I am obsessed with the ocean,<br> 
          fiction, space, animals and art. <br>
        </h2>
      </div>
      <button v-on:click="Main">Explore</button>
    </header> -->

    <div class="main-content" v:on:scroll.native="">
      <div class="roundbg big"></div>
      <nav class="about">    
      <div class="roundbg only-dktp"></div>
      <div class="roundbg small"></div>
        <h1>
          About Michelle <!-- (watch thi https://youtu.be/RIPdc88dZRI?list=WL to arrange my resume) -->
        </h1>
      </nav>
      <div class="yellow-bar">
      </div>

      <div class="titlePhoto">
          <v-img
            dark
            contain
            height= "200"
            width= "300"
            :src="require('../assets/imgs/kitty-sticker.png')"
          ></v-img>
      </div>

      <h2 class="main-heading">
        <span class="messages"></span>, <br>
        Obsessed with the ocean,fiction, space, animals and art
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
          class="giant"
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
            dark
            contain
            :src="require('../assets/imgs/book.png')"
          ></v-img>
          <h2>Works</h2>
        </div>
        <div class="scrollable">
          <div class="works" v-for="(work, i) in works"
            :key="i">
            <v-img
              class="preview-image"
              dark
              cover
              :src="work.preview"
            >
              <div class="text-area">
                <h3>{{work.name}}</h3>
                <p>{{work.description}}</p>
                <button>
                  <a :href="work.link">Go to Project</a>
                </button>
              </div>
            </v-img>
          </div>
        </div>
      </div>

      <div class="large-illustrated-banner">
        <v-img
            class="banner"
            
            contain
            :src="require('../assets/imgs/smilingtr.png')"
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
        'I co-pioneered and co-organized of forLoopUniben in the University of Benin',
        'I was recognized by Figma as one of the top 5 most consistent Figma users in Nigeria in 2018',
        'I joined a dance crew fresh out of high school and realized dancing wasn\'t for me',
        'I interviewed at Microsoft and my major reason for wanting to work there? Encarta!! Lol',
        'Also, I participated in the University of Benin 2015 Spelling Bee',
        'I participated in ALCwithGoogle and ALCwithMicrosoft, the first Frontstack Challenge, etc ...I participate a lot',
        'I was the Public Relations Officer for NACOSS in my 200level. Another social plug being that I was also in the Press Club in my high school',
        'For my final year seminar, I gave a talk on the Importance and Benefits of Gamification',
        'For my final year project, I implemented a design of a Virtual Tour of the University Campus using React360',
        'I\'m trying to get PADI certified cos I\'m definitely going to swim with whales and Orcas',
      ],
      education: [
        {
          institute: 'University of Benin, Benin, Nigeria',
          degree: 'Biochemistry',
          date: 'Started off thinking I could overcome the metabolic pathways...pfft! I learned how to carry out 5 lab tests in the hospital during my medical internship in my second year at the campus health center',
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
        'SEO',
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
        // 'TypeScript',
        'Laravel',
        'Sass',
        'Conversational Japanese',
        'Conversational German',
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
          preview: 'require(\'../assets/imgs/whistling-pine.png\')',
          name: 'Whistling Pine - Nexter',
          description: 'A play on CSS grids for a make believe real estate management company',
          link:'https://whistlingpine-nexter.netlify.app/',
        },
        {
          preview: '',
          name: 'Road Runner',
          description: 'Personal project featuring my flexbox playground in a make-believe travel company\'s website',
          link:'https://theroadrunner.netlify.app/',
        },
        {
          preview: '',
          name: 'Shalom',
          description: 'Personal project for an airbnb-ish website',
          link:'https://shalom-by-mist.netlify.app/',
        },
        {
          preview: '',
          name: 'Hotels.ng',
          description: 'I worked on numerous pages during my time there, this is a montage of some of the best I did',
          link:'hotels.ng',
        },
        {
          preview: '',
          name: 'Mist\'s playground',
          description: 'My playground and old portfolio site showing how I\'ve progressed so far',
          link:'',
        },
        {
          preview: '',
          name: 'nepa.ng',
          description: 'A product I was part of the team for in Hotels.ng',
          link:'',
        },
        {
          preview: '',
          name: 'Pangaea',
          description: 'I created this for an assessment test',
          link:'',
        },
        {
          preview: '',
          name: 'Telex',
          description: 'A project I was a part of the team for at Hotels.ng',
          link:'',
        },
        {
          preview: '',
          name: 'Movie poster',
          description: 'A work done with Adobe Stock',
          link:'',
        },
        {
          preview: '',
          name: 'Embo',
          description: 'A gaming enterprise',
          link:'',
        },
        
      ],
      messageToShow: '',
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
    },
  }
</script>
