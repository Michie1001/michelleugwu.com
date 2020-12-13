<template>
  <div id="app">
    <Landing msg="Michelle"/>
  </div>
</template>

<script>
import Landing from './components/Landing.vue'

export default {
  name: 'App',
  components: {
    Landing
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'special_eliteregular';
  src: url('./assets/specialelite-regular-webfont.woff2') format('woff2'),
       url('./assets/specialelite-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.landingGrid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 20vh 50vh 1fr;
  align-items: center;

  .name{
    grid-column: 2 / -1;
    grid-row: 2 / 3;
    font-family: 'special_eliteregular';
    font-weight: 400;
  }
  .caricature{
    grid-row: 3 / 4;
  }
  .aboutMe{
    grid-row: 3 / 4;
  }
  .contactLinks{
    grid-row: 4 / -1;
  }
}
</style>
