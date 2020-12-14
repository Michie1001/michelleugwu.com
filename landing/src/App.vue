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
body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border-top: 7px solid #AB63E6;
}
a,
a:link,
a:visited,
a:focus,
a:active{
  color: #AB63E6;
  text-decoration: none;
  font-weight: bold;
}
li {
  display: inline-block;
  margin-right: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #625C67;
}
.landingGrid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 30vh 50vh 10vh;
  align-items: center;
  margin: 0 10vw;

  .name{
    font-family: 'special_eliteregular';
    font-weight: 400;
    font-size: 100px;
    letter-spacing: 10px;
    color: #4B2C5C;
  }
  .avatarBox{
    .caricature{
      border: 1px solid #ccc;
      border-radius: 50%;
      width: 40%;
      height: 30vh;
      transform: translateY(50px);
      z-index: 10;
      margin-left: auto;
      background: #fff;
    }
  }
  .worksDone{
    // background-color: #eee;
    height: 100%;
    grid-column: 2;
    grid-row: 2 / -1;
  }
  .aboutMe{
    .skills{
      margin: 30px 0;
      color: #4B2C5C;
      label{
        float: left;
        font-weight: bold;
        color: #333;
        margin-right: 5px;
      }
      blockquote{
        margin: 10px 0;
        line-height: 1.3;
      }
    }
    .hobbies{
      li::after{
        content:"\2022";
        margin-left: 10px;
      }
    }
  }
  .contactLinks{
    margin-top: 5vh;
    width: 70%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
