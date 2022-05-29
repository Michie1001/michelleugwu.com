<template>
  
  <div class="web">

    <div class="scrollable">
      <div class="works" v-for="work in works"
        :key="work.id">
        <v-img
          class="preview-image"
          :src="work.src"
          alt="work.alt"
          contain
          eager
          >
          <a :href="work.link" target="_blank">
            <div class="overlay">
              <div class="text-area">
                <h3>{{work.name}}</h3>
                <!-- <p>{{work.description}}</p> -->
              </div>
            </div>
          </a>
        </v-img>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: "Web",

    data: () => ({
      works:[
        {
          id: 1,
          src: require("@/assets/imgs/hotelsng.jpg"),
          alt: 'Hotelsng preview image',
          name: 'Hotelsng - Places',
          link:'https://hotels.ng/places'
        },
        {
          id: 2,
          src: require("@/assets/imgs/roadrunner.jpg"),
          alt: 'Road Runner preview image',
          name: 'Road Runner',
          link:'https://theroadrunner.netlify.app/'
        },
        {
          id: 3,
          src: require("@/assets/imgs/telex.jpg"),
          alt: 'Telex preview image',
          name: 'Telex',
          link:'https://telex.im'
        },
        {
          id: 4,
          src: require("@/assets/imgs/pangaea.jpg"),
          alt: 'Pangaea preview image',
          name: 'Pangaea',
        },
        {
          id: 5,
          src: require("@/assets/imgs/apartments.jpg"),
          alt: 'Apartments preview image',
          name: 'Apartments',
          link:'https://hotels.ng/apartments'
        },
        {
          id: 6,
          src: require("@/assets/imgs/embo.jpg"),
          alt: 'Embo preview image',
          name: 'Embo',
        },
        {
          id: 7,
          src: require("@/assets/imgs/hotels.jpg"),
          alt: 'Hotels preview image',
          name: 'Hotels',
          link:'https://hotels.ng/'
        },
        {
          id: 8,
          src: require("@/assets/imgs/nepa.jpg"),
          alt: 'Nepa preview image',
          name: 'Nepa',
          link:'https://nepa.ng'
        },
        {
          id: 9,
          src: require("@/assets/imgs/shalom.jpg"),
          alt: 'Shalom preview image',
          name: 'Shalom',
          link:'https://shalom-by-mist.netlify.app/'
        },
        {
          id: 10,
          src: require("@/assets/imgs/stock-poster.jpg"),
          alt: 'stock poster preview image',
          name: 'Non-existent Movie',
        },
        {
          id: 11,
          src: require("@/assets/imgs/whistling-pine.jpg"),
          alt: 'Whistling Pine preview image',
          name: 'Whistling Pine',
          link:'https://whistlingpine-nexter.netlify.app/'
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