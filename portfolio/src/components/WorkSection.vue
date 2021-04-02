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
</template>

<script>
  export default{
    data: () => ({
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
        }),
  }
</script>