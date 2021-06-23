<template>
  <div>
    <div class="art">
      <div v-for="artwork in artworks"
        class="image"
        :key="artwork.id">
        <v-img
          :src="artwork.src"
          alt="artwork.alt"
          contain
          eager
          >
        <span class="art-description">{{artwork.name}}</span>
        </v-img>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default{
    name: "artworks",

    data: () => ({
      artworks:[
        {
          id: 1,
          src: require("../assets/artworks/drawn/african.jpg"),
          alt: 'African woman',
          name: 'The bold African woman'
        },
        {
          id: 2,
          src: require("../assets/artworks/drawn/elf.jpg"),
          alt: 'The Elvin Woman',
          name: 'The Elvin Woman'
        },
        {
          id: 3,
          src: require("../assets/artworks/drawn/strong.jpg"),
          alt: 'Strong woman',
          name: 'The Strong woman'
        },
        {
          id: 4,
          src: require("../assets/artworks/drawn/happy.jpg"),
          alt: 'Smiling woman',
          name: 'Oh Happiness'
        },
        {
          id: 5,
          src: require("../assets/artworks/drawn/violin.jpg"),
          alt: 'Woman playing the violin',
          name: 'Woman playing the violin'
        },
        {
          id: 6,
          src: require("../assets/artworks/drawn/panda.jpg"),
          alt: 'Panda head',
          name: 'Panda'
        },
        {
          id: 7,
          src: require("../assets/artworks/drawn/gorrilaz.jpg"),
          alt: 'Gorrilaz',
          name: 'Gorrilaz'
        },
        {
          id: 8,
          src: require("../assets/artworks/drawn/arietty.jpg"),
          alt: 'The Secret World of Arietty',
          name: 'The Secret World of Arietty'
        },
        {
          id: 9,
          src: require("../assets/artworks/drawn/horror.jpg"),
          alt: 'Eyeless face of a woman',
          name: 'Soulless'
        },
        {
          id: 10,
          src: require("../assets/artworks/drawn/donald.jpg"),
          alt: 'Zombie Donald Duck',
          name: 'Zombie Donald Duck'
        },
        {
          id: 11,
          src: require("../assets/artworks/drawn/smile.jpg"),
          alt: 'Smiling woman',
          name: 'Your Smile'
        },
        {
          id: 12,
          src: require("../assets/artworks/drawn/king.jpg"),
          alt: 'Lion Head',
          name: 'The King of the Jungle'
        },
        {
          id: 13,
          src: require("../assets/artworks/drawn/fantasy.jpg"),
          alt: 'Fantasy Hero Lady',
          name: 'Fantasy'
        },
        {
          id: 14,
          src: require("../assets/artworks/drawn/cheshire.jpg"),
          alt: 'The cheshire cat on a branch',
          name: '"Darling, we\'re all mad here"'
        },
        {
          id: 15,
          src: require("../assets/artworks/drawn/eyes.jpg"),
          alt: 'Eyes Open',
          name: 'The more you see'
        },
        {
          id: 16,
          src: require("../assets/artworks/drawn/miserable.jpg"),
          alt: 'Crying girls eating ice-cream',
          name: 'Misery loves chocolate'
        },
        {
          id: 17,
          src: require("../assets/artworks/drawn/eye.jpg"),
          alt: 'Tear drop',
          name: 'Tear drop'
        },
        {
          id: 18,
          src: require("../assets/artworks/drawn/canyon.jpg"),
          alt: 'A 3d drawing of a canyon',
          name: '3D Attempt'
        },
        {
          id: 19,
          src: require("../assets/artworks/drawn/vemor.jpg"),
          alt: 'Fanart of Vemor',
          name: 'Fanart'
        },
        {
          id: 20,
          src: require("../assets/artworks/drawn/board.jpg"),
          alt: 'Marker drawings on a white board',
          name: 'White Board'
        },
        {
          id: 21,
          src: require("../assets/artworks/drawn/genos.jpg"),
          alt: 'Genos from One Punch Man',
          name: 'Genos'
        },
        {
          id: 22,
          src: require("../assets/artworks/drawn/ani.jpg"),
          alt: 'Lady\'s portrait',
          name: 'A portrait'
        },
        {
          id: 23,
          src: require("../assets/artworks/drawn/misfit.jpg"),
          alt: 'The Misfit',
          name: 'The Misfit'
        },
        {
          id: 24,
          src: require("../assets/artworks/drawn/smoke.jpg"),
          alt: 'A naked smoker squatting',
          name: 'Flow'
        },
        {
          id: 25,
          src: require("../assets/artworks/drawn/kakashi.jpg"),
          alt: 'Kakashi from Naruto',
          name: 'Kakashi'
        },
        {
          id: 26,
          src: require("../assets/artworks/drawn/nokia.jpg"),
          alt: 'The Indestructible Nokia',
          name: 'The Indestructible Nokia'
        },
        {
          id: 27,
          src: require("../assets/artworks/drawn/gent.jpg"),
          alt: 'Classic Man',
          name: 'Classic Man?'
        },
        
      ],
    })
  }
</script>