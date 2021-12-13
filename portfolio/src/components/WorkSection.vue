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

    

    <div class="art-area">
      <div class="button-holder"> <!--- buttons to toggle the works done -->
        <div>
          <button @click="layout = 'frontend'" :class = "{active : layout === 'frontend'}">
            Frontend
          </button>
          <button @click="layout = 'sketches'" :class = "{active : layout === 'sketches'}">
            Sketches
          </button>
          <button @click="layout = 'illustrations'" :class = "{active : layout === 'illustrations'}">
            Illustrations
          </button>
        </div>
      </div>

      <div> <!--Shows work done content toggling between frontend works, sketches and illustrations-->
        <div v-if = "layout === 'frontend'">
          <Frontend />
        </div>
        <div v-if = "layout === 'sketches'">
          <Sketches />
        </div>
        <div v-if = "layout === 'illustrations'">
          <Illustrations />
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
  import Frontend from './Frontend.vue'
  import Sketches from './Sketches.vue'
  import Illustrations from './Illustrations.vue'
  
  export default{
    name: "Work",

    components:{
      Frontend,
      Sketches,
      Illustrations,
    },

    data: () => ({
      layout: "frontend",
      }),
  }
</script>