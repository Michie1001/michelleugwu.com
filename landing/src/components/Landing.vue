<template>
  <div class="hello">
    <div class="landingGrid">
      <h1 class="name">{{ msg }}</h1>
      <div class="caricature">Colorful hair</div>
      <div class="aboutMe">

        <ul class="whoYou">
          <li>Frontend Engineer</li>
          <li>Storyboarder</li>
          <li>Cartoonist</li>
          <li>Aspiring Animator</li>
          <li>Writer</li>
          <li>Traveller</li>
          <li>Literal fish</li>
          <li>Mostly spotted gaming</li>
          <li>Also stares at the sky a lot</li>
        </ul>

      </div>
      <div class="contactLinks">
        <a href="">Github</a>
        <a href="">LinkedIn</a>
        <a href="">Drive</a>
        <a href="">Instagram</a>
        <a href="">Twitter</a>
      </div>
    </div>
      <!-- <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li> -->
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    msg: String
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
