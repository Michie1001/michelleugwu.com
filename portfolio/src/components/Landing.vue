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


    <header>
      <div class="triangle left">
        <h1
          :class="{'display-2': $vuetify.breakpoint.smAndUp, 'title font-weight-bold': $vuetify.breakpoint.smAndDown}"
          class="main-heading">
          Hi, I'm Michelle, <br> <span class="messages"></span>, <br>
          and I am obsessed with the ocean,<br> 
          fiction, space, animals and art. <br>
        </h1>
      </div>
      <div class="triangle right">
        <h1
          :class="{'display-2': $vuetify.breakpoint.smAndUp, 'title font-weight-bold': $vuetify.breakpoint.smAndDown}"
          class="main-heading">
          Hi, I'm Michelle, <br> <span class="messages"></span>, <br>
          and I am obsessed with the ocean,<br> 
          fiction, space, animals and art. <br>
        </h1>
      </div>
      <button v-on:click="Main">Explore</button>
    </header>

    <div class="main-content" v:on:scroll.native="">
      <div class="roundbg big"></div>
      <nav class="about">    
        <h2>
          About Michelle <!-- (watch thi https://youtu.be/RIPdc88dZRI?list=WL to arrange my resume) -->
        </h2>
      </nav>
      <div class="roundbg"></div>
      <div class="roundbg small"></div>
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

        <div class="education-section">
          <div class="education"
          v-for="edu in education"
          :key="edu.id">
            <h4><span>{{edu.degree}}</span> at {{edu.institute}}</h4>
            <p>{{edu.date}}</p>
          </div>
        </div>

        <div class="achievements-section">
          <div class="achievements"
          v-for="ach in achievements"
          :key="ach.id">
            <p>{{ach}}</p>
          </div>
        </div>

        <v-img
          class="giant"
          dark
          contain
          height= "400"
          width= "300"
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
          <h2>Works</h2>
        </div>
        <div class="scrollable">
          <div class="works" v-for="(work, i) in works"
            :key="i">
            <v-img
              class="preview-image"
              dark
              contain
              height="600px"
              :src="work.preview"
            >
              <h3>{{work.name}}</h3>
              <p>{{work.description}}</p>
              <button>
                <a :href="work.link">Go to Project</a>
              </button>
            </v-img>
          </div>
        </div>
      </div>

      <div class="large-illustrated-banner">
        <v-img></v-img>
      </div>

      <div class="reel">

        <div class="contacts-section">
          <div class="contacts"
            v-for="reach in contact"
            :key="reach.id">
              <a :href="reach.link">
                <h5>
                  <i :class="reach.icon"></i>
                  <br>
                  {{reach.name}}
                </h5>
            </a>
          </div>
        </div>
        <div>
          <p>Send me an email, let's work together.</p>
          <p>michieugwu@gmail.com</p>
        </div>
      </div>

      <button class="toTop" v-on:click="toTop">
        <i class="fas fa-fighter-jet"></i>
      </button>

    </div>

    
     <!-- <v-bottom-navigation class="footer">
      <div class="bubbles"
        v-for="i < 128;"
        :key="i">
        <div class="bubble" style="`--size:${2+Math.random()*4}rem; --distance:${6+Math.random()*4}rem; --position:${-5+Math.random()*110}%; --time:${2+Math.random()*2}s; --delay:${-1*(2+Math.random()*2)}s;`">{{i}}</div>
      </div>
      <div class="content">
        <div>
          <v-img
            class="shrink mr-2"
            contain
            transition="scale-transition"
            :src="require('../assets/imgs/profileAvatar.svg')"
          ></v-img>
          <div>
            <p>Michelle Ugwu (c) 2021</p>
          </div>
            <div><b>Eldew</b><a href="#">Secuce</a><a href="#">Drupand</a><a href="#">Oceash</a><a href="#">Ugefe</a><a href="#">Babed</a></div>

            <div><b>Spotha</b><a href="#">Miskasa</a><a href="#">Agithe</a><a href="#">Scesha</a><a href="#">Lulle</a></div>

            <div><b>Chashakib</b><a href="#">Chogauw</a><a href="#">Phachuled</a><a href="#">Tiebeft</a><a href="#">Ocid</a><a href="#">Izom</a><a href="#">Ort</a></div>

            <div><b>Athod</b><a href="#">Pamuz</a><a href="#">Vapert</a><a href="#">Neesk</a><a href="#">Omemanen</a></div>
        </div>
        <div>
          <a class="image" href="https://codepen.io/z-" target="_blank" style="background-image: url(&quot;https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg&quot;)"></a>
          <p>©2019 Not Really</p>
        </div>
      </div>
      <svg style="position:fixed; top:100vh">
        <defs>
          <filter id="blob">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
              <feComposite in="SourceGraphic" in2="blob" operator="atop"></feComposite>
          </filter>
        </defs>
      </svg>
    </v-bottom-navigation> -->
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
      education: [
        {
          institute: 'Carbon Animation, Lagos, Nigeria',
          degree: 'Animation Basics',
          date: 'January 2021 - April 2021 ',
        },
        {
          institute: 'University of Benin, Benin, Nigeria',
          degree: 'B.Sc, Computer Science',
          date: 'September 2014 - March 2019 ',
        },
      ],
      achievements: [
        'Co-pioneer/co-organizer of forLoopUniben in the University of Benin',
        'Recognized by Figma as one of the top 5 most consistent Figma users in Nigeria in 2018',
        'Participated in an essay competition on the ‘Formal Education and the Nigerian Youth’ for Sigma Club, Ibadan, Nigeria',
        'Interviewed at Microsoft',
        'Participated in the University of Benin 2015 Spelling Bee',
        'Participated in ALCwithGoogle and ALCwithMicrosoft',
        'Public Relations Officer for NACOSS in my 200level',
        'For my final year seminar, I gave a talk on the Importance and Benefits of Gamification',
        'For my final year project, I implemented a design of a Virtual Tour of the University Campus using React360',
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
        'Laravel',
        'GraphQL',
        'Linux',
        'Sass',
        'Bootstrap',
        'Vuetify',
        // 'TypeScript',
        'Digital Design',
        'Fluent English',
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
      Main: function(){
        let Main = document.querySelector('header');
        Main.classList.add('open');
      },
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
      // reveal: function() {
      //   let s = document.querySelector('.');

      //   for(var i = 0; i < s.length; i++) {
      //     let windowHeight = window.innerHeight;
      //     let Top = s[i].getBoundingClientRect().top;
      //     let Point = 150;

      //     if(Top > windowHeight - Point) {
      //       s[i].classList.add('active');
      //     }
      //     else{
      //       s[i].classList.remove('active');
      //     }
      //   }
      // },
    },
  }
</script>
