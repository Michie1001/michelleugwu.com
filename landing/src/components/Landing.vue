<template>
  <div class="hello">
    <div class="landingGrid">
      <h1 class="name">{{ msg }}</h1>
      <div class="avatarBox">
        <div class="caricature"></div>        
      </div>
      <div class="worksDone">
        <Carousel>
          <CarouselSlide v-for="(slide, index) in slides"
            :key="slide"
            :index="index"
            :vibileSlide="visibleSlide" />
        </Carousel>
          <!-- filter: hue-rotate(10deg); Use somewhere -->
      </div>
      <div class="aboutMe">

        <div class="atAGlance">
          <p>I am a Frontend Engineer with a knack for storytelling.</p>
          <p>I'm also an artist and illustrator.</p> 
        </div>

        <div class="skills">
          <label>Languages: </label>
          <blockquote>HTML, CSS, JavaScript, Vue, Laravel, Node, GraphQL, Python</blockquote>
          <label>Tools: </label>
          <blockquote>
            SASS, Linux, SEO, Bootstrap, Construct2, Flipbook, Adobe Spark, Figma, Actions on Google, Canva, Mailchimp, Email on Acid, Krita.
          </blockquote>
        </div>

        <ul class="hobbies">
          <li>Bookworm</li>
          <li>Storyboarder</li>
          <li>Volunteer</li>
          <li>Photographer</li>
          <li>Part-time game designer</li>
          <li>Aspiring animator</li>
          <li>Writer</li>
          <li>Avid traveller</li>
          <li>Planner</li>
          <li>Walking encyclopedia of random facts and tips</li>
          <li>Fantasy simp</li>
          <li>Mostly spotted gaming</li>
          <li>Stares at the sky a lot</li>
        </ul>

      </div>
      <div class="contactLinks">
        <a href="https://github.com/Michie1001">Github</a>
        <a href="https://www.linkedin.com/in/michelle-ugwu-51996711b/">LinkedIn</a>
        <a href="https://www.instagram.com/michie_1001/">Instagram</a>
        <a href="https://twitter.com/Michie1001">Twitter</a>
      </div>
    </div>
      <!-- <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li> -->
  </div>
</template>

<script>
import Carousel from './Carousel.vue'
import CarouselSlide from './CarouselSlide.vue'

export default {
  name: 'Landing',
  props: {
    msg: String
  },
  components: {
    Carousel,
    CarouselSlide
  },
  data(){
    return{
      slides: [
        require("./imgs/nepa.png"),
        require("./imgs/telex.png")
      ],
      visibleSlide: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
