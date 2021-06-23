<template>
  <div>
     
    <div class="art">
      <div v-for="digi in digital"
        class="image"
        :key="digi.id">
        <v-img
          :src="digi.src"
          alt="digi.alt"
          contain
          eager
          >
        <span class="art-description">{{digi.name}}</span>
        </v-img>
      </div>
    </div>
      
  </div>
</template>

<script>
  export default{
    name: "illustrations",

    data: () => ({
      digital:[
        {
          id: 1,
          src: require("../assets/artworks/digital/Neo.jpg"),
          alt: 'A portrait of Neo Ighodaro',
          name: 'Neo'
        },
        {
          id: 2,
          src: require("../assets/artworks/digital/diver.jpg"),
          alt: 'Diving sequence',
          name: 'Dive'
        },
        {
          id: 3,
          src: require("../assets/artworks/digital/spookyn.jpg"),
          alt: 'Soulless Neo',
          name: 'Soulless'
        },
        {
          id: 4,
          src: require("../assets/artworks/digital/dancedance.jpg"),
          alt: 'Dance sequence',
          name: 'Dance Dance'
        },
        {
          id: 5,
          src: require("../assets/artworks/digital/giant.jpg"),
          alt: 'A giant stomping',
          name: 'Angry giant'
        },
        {
          id: 6,
          src: require("../assets/artworks/digital/juice.jpg"),
          alt: 'Juice brand styleframe',
          name: 'Decision'
        },
        {
          id: 7,
          src: require("../assets/artworks/digital/drunkGranny.jpg"),
          alt: 'A drunk grandma',
          name: 'Drunk Granny'
        },
        {
          id: 8,
          src: require("../assets/artworks/digital/landscape.jpg"),
          alt: 'A landscape at sunset',
          name: 'Landscape'
        },
        {
          id: 9,
          src: require("../assets/artworks/digital/NEEo.jpg"),
          alt: 'Neo',
          name: 'Neo'
        },
        {
          id: 10,
          src: require("../assets/artworks/digital/skull.jpg"),
          alt: 'An alien skull',
          name: 'Beep'
        },
        {
          id: 11,
          src: require("../assets/artworks/digital/panda.jpg"),
          alt: 'Panda sitting cute',
          name: 'Panda'
        },
        {
          id: 12,
          src: require("../assets/artworks/digital/singleDiver.png"),
          alt: 'Lady diving into water',
          name: 'Diver'
        },
        {
          id: 13,
          src: require("../assets/artworks/digital/run.jpg"),
          alt: 'Girl running from creatures',
          name: 'Run'
        },
        {
          id: 14,
          src: require("../assets/artworks/digital/swordneo.jpg"),
          alt: 'A portrait of Neo with a sword',
          name: 'CTO'
        },
        {
          id: 15,
          src: require("../assets/artworks/digital/spook.jpg"),
          alt: 'A gory scene',
          name: 'Gore'
        },
        {
          id: 16,
          src: require("../assets/artworks/digital/drunkLady.jpg"),
          alt: 'Drunk lady',
          name: 'Drunk Lady'
        },
        {
          id: 17,
          src: require("../assets/artworks/digital/museum.jpg"),
          alt: 'Lady admiring a museum painting',
          name: 'Museum'
        },
        {
          id: 18,
          src: require("../assets/artworks/digital/S_teph.png"),
          alt: 'A portrait of Amen',
          name: 'Steph'
        },
        {
          id: 19,
          src: require("../assets/artworks/digital/tako.jpg"),
          alt: 'A sketch of an octopus',
          name: 'Tako'
        },
        {
          id: 20,
          src: require("../assets/artworks/digital/sneeze.jpg"),
          alt: 'A sneeze sequence',
          name: 'Ah Choo'
        },
        
      ],
    })
  }
</script>