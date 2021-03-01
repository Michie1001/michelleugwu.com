<template>
  <div class="landing">
    <v-img
      dark
      max-height="500px"
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

    <v-container>
      <v-row>
        <h2 class="about">
          About
        </h2>
        <div class="grid-area">
          <div class="portrait">
            <v-img
              :src="require('../assets/logo.png')"
              class="my-3"
              contain
              height="200"
              alt="Portrait photo of Michelle"
            />
            <v-divider
              inset
              vertical
            ></v-divider>
          </div>
          <div class="">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="contact"><b>2340184858967</b></div>
        </div>
      </v-row>

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
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      messageToShow: '',
      messages: [
        'make things beautiful',
        'engineer frontend code',
        'animate',
        'draw',
        'write'
      ],
      portrait: 'require("../assets/logo.png")',
      about:'yi',
      contact: 'yo',
      show: 'false'
    }),
  }
</script>
