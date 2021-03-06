<template>
  <div class="landing">
    <v-img
      dark
      max-height="650px"
      :src="require('../assets/starry.jpg')"
    >
      <!-- <div class="logo-area">
        <v-img
          class="shrink mr-2"
          contain
          transition="scale-transition"
          :src="require('../assets/logo.svg')"
        ></v-img>
      </div> there's no need for a logo at the moment--> 
      <v-layout fill-height align-center>
        <v-container>
          <v-row align="center" justify="center" class="white--text text-center">
            <v-col cols="12">
              <h1
                :class="{'display-2': $vuetify.breakpoint.smAndUp, 'title font-weight-bold': $vuetify.breakpoint.smAndDown}"
                class="main-heading"
              >Hi, I'm Michelle <br>and I 
              <span class="messages"></span>
              </h1>
              <!-- <div
                :class="{'headline': $vuetify.breakpoint.smAndUp, 'subtitle-1': $vuetify.breakpoint.smAndDown}"
              >I make applications.</div> -->
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img>

      <div>
        <h2 class="about">
          About
        </h2>
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
            <span>Skills: </span>
            <div class="specific__skills">
              <div class="skills"
                v-for="skill in skills"
                :key="skill.id">
                  <p>{{skill}}</p>
              </div>
            </div>
            <v-divider></v-divider>
            <br>
            <span>Tools: </span>
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
                    <span>{{reach.icon}}</span>
                    {{reach.name}}
                  </h5>
              </a>
            </div>
          </div>
        </div>
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
        'Adobe AfterEffects',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Adobe Lightroom',
        'Adobe Spark',
        'Actions on Google',
        'Mailchimp',
        'Email on Acid',
        'Canva',
        'Linux',

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
          icon: '',
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/michelle-ugwu-51996711b/',
        },
        {
          icon: '',
          name: 'Instagram',
          link: 'https://www.instagram.com/michie_1001/',
        },
        {
          icon: '',
          name: 'Github',
          link: 'https://github.com/Michie1001',
        },
        {
          icon: '',
          name: 'Stack Overflow',
          link: 'https://stackoverflow.com/users/story/6276301',
        },
        {
          icon: '',
          name: 'Twitter',
          link: 'https://twitter.com/Michie1001',
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
      show: 'false'
    }),
  }
</script>
