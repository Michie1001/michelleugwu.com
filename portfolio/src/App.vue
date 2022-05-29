<template>
  <v-app>
    <v-main>
      <div id="app" class="navButtons">
        <a href="#/" class="navButtons_individual">To Home</a>
        <a href="#/projects" class="navButtons_individual float-right">To Projects</a>
      </div>
      <component :is="currentView" />
    </v-main>
  </v-app>
</template>

<style lang="scss">
  @import '@/scss/app.scss';
  @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap');

 .about, .main-heading, footer, .pages {
    font-family: 'New Tegomin', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #app{
    font-family: 'Nunito', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>

<script>
import Home from '@/components/Landing.vue';
import Projects from '@/components/Projects.vue';
import NotFound from '@/components/NotFound.vue'

const routes = {
  '/': Home,
  '/projects': Projects
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
		})
  }
}
</script>