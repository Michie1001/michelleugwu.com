<template>
  
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
    
    <!-- <div
      v-for="item in items"
      :key="item.id"
      class="d-flex child-flex"
      cols="4"
      >
      <v-img
        :src="item.src"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </div> -->

    <div class="scrollable">
      <div class="works" v-for="work in works"
        :key="work.id">
        <v-img
          class="preview-image"
          :src="work.src"
          alt="work.alt"
          position="top left"
          height="450px"
          max-width="600px"
          min-width="300px"
          >
          <div class="overlay">
            <div class="text-area">
              <h3>{{work.name}}</h3>
              <!-- <p>{{work.description}}</p> -->
              <!-- <button>
                <a :href="work.link">Go to Project</a>
              </button> -->
            </div>
          </div>
        </v-img>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: "Work Section",

    data: () => ({
      works:[
        {
          id: 1,
          src: require("../assets/imgs/hotelsng.jpg"),
          alt: 'Hotelsng preview',
          name: 'Hotelsng - Places',
          link:'https://hotelsng/'
        },
        {
          id: 2,
          src: require("../assets/imgs/roadrunner.jpg"),
          alt: 'Road Runner preview',
          name: 'Road Runner',
          link:''
        },
        {
          id: 3,
          src: require("../assets/imgs/telex.jpg"),
          alt: 'Telex preview',
          name: 'Telex',
          link:''
        },
        {
          id: 4,
          src: require("../assets/imgs/pangaea.jpg"),
          alt: 'Pangaea preview',
          name: 'Pangaea',
          link:''
        },
        {
          id: 5,
          src: require("../assets/imgs/apartments.jpg"),
          alt: 'Apartments preview',
          name: 'Apartments',
          link:''
        },
        {
          id: 6,
          src: require("../assets/imgs/embo.jpg"),
          alt: 'Embo preview',
          name: 'Embo',
          link:''
        },
        {
          id: 7,
          src: require("../assets/imgs/hotels.jpg"),
          alt: 'Hotels preview',
          name: 'Hotels',
          link:''
        },
        {
          id: 8,
          src: require("../assets/imgs/nepa.jpg"),
          alt: 'Nepa preview',
          name: 'Nepa',
          link:''
        },
        {
          id: 9,
          src: require("../assets/imgs/shalom.jpg"),
          alt: 'Shalom preview',
          name: 'Shalom',
          link:''
        },
        {
          id: 10,
          src: require("../assets/imgs/stock-poster.jpg"),
          alt: 'stock poster preview',
          name: 'Non-existent Movie',
          link:''
        },
        {
          id: 11,
          src: require("../assets/imgs/whistling-pine.jpg"),
          alt: 'Whistling Pine preview',
          name: 'Whistling Pine',
          link:''
        }
      ],
      // works:[
      //   {
      //     preview:
      //       {
      //         id: 1,
      //         src: require("../assets/imgs/telex.jpg"),
      //       },
      //     alt: 'Whistling Pine image',
      //     name: 'Whistling Pine - Nexter',
      //     description: 'A play on CSS grids for a make believe real estate management company',
      //     link:'https://whistlingpine-nexter.netlify.app/',
      //   },
      //   {
      //     id:'2',
      //     preview: '',
      //     alt: 'Road Runner image',
      //     name: 'Road Runner',
      //     description: 'Personal project featuring my flexbox playground in a make-believe travel company\'s website',
      //     link:'https://theroadrunner.netlify.app/',
      //   },
      //   {
      //     id:'3',
      //     preview: '',
      //     alt: 'Shalom image',
      //     name: 'Shalom',
      //     description: 'Personal project for an airbnb-ish website',
      //     link:'https://shalom-by-mist.netlify.app/',
      //   },
      //   {
      //     id:'4',
      //     preview: '',
      //     alt: 'Hotels.ng image',
      //     name: 'Hotels.ng',
      //     description: 'I worked on numerous pages during my time there',
      //     link:'hotels.ng',
      //   },
      //   {
      //     id:'5',
      //     preview: '',
      //     alt: 'Hotels.ng Places',
      //     name: 'Places | Hotels.ng',
      //     description: 'Places of attraction, Hotels.ng',
      //     link:'hotels.ng/places',
      //   },
      //   {
      //     id:'6',
      //     preview: '',
      //     alt: 'Nepa image',
      //     name: 'nepa.ng',
      //     description: 'A product I was part of the team for in Hotels.ng',
      //     link:'',
      //   },
      //   {
      //     id:'7',
      //     preview: '',
      //     alt: 'Pangaea image',
      //     name: 'Pangaea',
      //     description: 'I created this for an assessment test',
      //     link:'',
      //   },
      //   {
      //     id:'8',
      //     preview: '',
      //     alt: 'Telex image',
      //     name: 'Telex',
      //     description: 'A project I was a part of the team for at Hotels.ng',
      //     link:'',
      //   },
      //   {
      //     id:'9',
      //     preview: '',
      //     alt: 'Movie poster image',
      //     name: 'Movie poster',
      //     description: 'A work done with Adobe Stock',
      //     link:'',
      //   },
      //   {
      //     id:'10',
      //     preview: '',
      //     alt: 'Embo image',
      //     name: 'Embo',
      //     description: 'A gaming enterprise',
      //     link:'',
      //   },
      // ],
    }),
  }
</script>