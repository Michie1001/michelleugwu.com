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
    .about{
      width: 100%;
      margin-top: 2rem;
      text-align: center;
    }
    .grid-area{
      margin: 2rem;
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: repeat(4, 1fr);
      align-items: center;
      .experience-section{
        text-align: right;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        h3{
          margin: 0 3rem 2rem 2rem;
        }
        span{
          color: #0c107c;
        }
        p{
          color: #777;
          margin-bottom: 1rem;
        }
      }
      .education-section{
        grid-column: 2 / -1;
        grid-row: 2 / 3;
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