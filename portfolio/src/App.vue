<template>
  <v-app>
    <v-main>
      <Landing/>
    </v-main>
    <v-bottom-navigation>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import Landing from './components/Landing';

export default {
  name: 'App',

  components: {
    Landing,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  ul{
    margin: 0;
    padding: 0;
    li{
      margin: inherit;
      padding: inherit;
      list-style-type: none;
    }
  }
  .landing{
    background-color:#f1f1f1;
    .logo-area{
      height: 80px;
      width: 60px;
      position: absolute;
      margin: 20px;
    }
    .main-heading{
      line-height: 1.3;
      white-space: nowrap;
      overflow: hidden;
      .messages::before{
        font-weight: bold;
        content: ' ';
        animation: openclose 5s ease infinite;
      }
    }
    @keyframes openclose {
      0% {
        content: 'make things beautiful';
      }
      20% {
        content: 'engineer frontend code';
      }
      40% {
        content: 'animate';
      }
      60% {
        content: 'draw';
      }
      80% {
        content: 'write';
      }
      100% {
        content: '...';
      }
    }
  }
</style>