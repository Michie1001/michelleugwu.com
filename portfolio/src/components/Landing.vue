<template>
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
      <button v-on:click="revealMain">View my personal site</button>
    </header>

    <div class="main-content">
      <nav class="about">
        <!-- <div class="anatomy">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink">
            <rect width="100%" height="100%" fill="#E7E7E8"/>
            <image xmlns:xlink= "http://www.w3.org/1999/xlink" xlink:href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/a.svg" width="100%" height="100%" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink">
            <defs>
              <clipPath id="mask">
                <circle id="mask-circle" cx="50%" cy="50%" r="8%" style="fill: #ffffff"/>
              </clipPath>
            </defs>
            <g clip-path="url(#mask)">
              <rect width="100%" height="100%" fill="#272730"/>
              <image xmlns:xlink= "http://www.w3.org/1999/xlink" xlink:href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/b.svg" width="100%" height="100%" />
            </g>
            <circle id="circle-shadow" cx="50%" cy="50%" r="8%" style="stroke: #fff; fill: transparent; stroke-width: 5;" />
          </svg>
        </div> -->
        
        <h2>
          About Michelle
        </h2>
      </nav>
      <div class="grid-area">
        <div class="experience-section">
          <div class="experience"
          v-for="exp in experience"
          :key="exp.id">
            <h4><span>{{exp.role}}</span> at {{exp.company}}</h4>
            <p>{{exp.date}}</p>
          </div>
        </div>
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
            <span>{{ach}}</span>
          </div>
        </div>
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
        <div class="contacts-section">
          <h3>Reach me here: </h3>
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
      </div>

      <v-container>
        <v-row justify="center" class="text-center">
        </v-row>
      </v-container>
    </div>

    <v-container>
      <v-row justify="center" class="text-center">
        <h2>Projects</h2>
        
        <div class="works_cards" style="display: block">
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>

            <v-card-title>
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                Explore
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>
      </v-row>

      <v-row>
        <!-- <a
          v-for="(eco, i) in ecosystem"
          :key="i"
          :href="eco.href"
          class="subheading mx-3"
          target="_blank"
        >
          {{ eco.text }}
        </a> -->
      </v-row>

    </v-container>
    <!-- <v-bottom-navigation class="footer">
      <div class="bubbles"
        v-for="i < 128;"
        :key="i">
        <div class="bubble" style="`--size:${2+Math.random()*4}rem; --distance:${6+Math.random()*4}rem; --position:${-5+Math.random()*110}%; --time:${2+Math.random()*2}s; --delay:${-1*(2+Math.random()*2)}s;`">{{i}}</div>
      </div>
      <div class="content">
        <div>
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
          role: 'Frontend Engineer',
          company: 'Hotels.ng',
          date: 'January 2020 - June 2020',
        },
        {
          role: 'Frontend Developer Intern',
          company: 'Hotels.ng',
          date: 'June 2017 - November 2017',
        },
        {
          role: 'Growth and Marketing Intern',
          company: 'Hotels.ng',
          date: 'May 2017 - June 2017',
        },
        {
          role: 'Volunteer Code Instructor',
          company: 'Child Can Code',
          date: 'August 2016 - September 2016',
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
        'TypeScript',
        'Sketch Art',
        'Creative writing',
        'Fluent English',
        'Conversational Japanese',
        'Conversational German',
      ],
      contact: [
        {
          icon: 'fab fa-linkedin-in',
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/michelle-ugwu-51996711b/',
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
      project:[
        {
          preview: '',
          name: 'Whistling Pine - Nexter',
          description: '',
          link:'https://whistlingpine-nexter.netlify.app/',
        },
        {
          preview: '',
          name: 'Road Runner',
          description: '',
          link:'https://theroadrunner.netlify.app/',
        },
        {
          preview: '',
          name: 'Shalom',
          description: '',
          link:'https://shalom-by-mist.netlify.app/',
        },
        {
          preview: '',
          name: '',
          description: '',
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

    methods: {
      revealMain: function(){
        let revealMain = document.querySelector('header');
        revealMain.classList.add('open');
      }
    },
  }
</script>
