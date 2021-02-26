<template>
  <div class="landing">
    <v-img
      dark
      max-height="500px"
      :src="require('../assets/starry2.jpg')"
    >
      <div style="height: 80px; width: 60px; position: absolute; margin: 20px">
        <v-img
          class="shrink mr-2"
          contain
          transition="scale-transition"
          :src="require('../assets/logo.png')"
        ></v-img>
      </div>
      <v-layout fill-height align-center>
        <v-container>
          <v-row align="center" justify="center" class="white--text text-center">
            <v-col cols="12">
              <h1
                :class="{'display-2': $vuetify.breakpoint.smAndUp, 'title font-weight-bold': $vuetify.breakpoint.smAndDown}"
              >Hi, I'm Michelle. <br> Frontend Engineer and Animator <br> and I <b><u>make things beautiful</u></b></h1>
              <!-- <div
                :class="{'headline': $vuetify.breakpoint.smAndUp, 'subtitle-1': $vuetify.breakpoint.smAndDown}"
              >I make applications.</div> -->
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img>

    <v-container>
      
      <v-container fluid>
        <v-row no-gutters>
          <v-col
            v-for="(eco, n) in ecosystem"
            :key="n"
            :md="6"
            :sm="6"
            :xs="12"
          >
            <div>
              {{eco.text}}
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-row>
        <v-col
          class="mb-5"
          cols="6"
        >
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
        </v-col>

        <v-col
          class="mb-5"
          cols="6"
        >

          <v-row>
            <h2 class="headline font-weight-bold mb-3">
              About
            </h2>

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
        </v-col>

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
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
      portrait: 'require("../assets/logo.png")',
      about:'yi',
      contact: 'yo',
    }),
  }
</script>
