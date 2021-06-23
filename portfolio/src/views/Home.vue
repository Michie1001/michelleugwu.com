<template>
  <div class="home">
    <Landing msg="Hi, I'm Michelle and I ---"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from '@/components/Landing.vue'

export default {
  name: 'Home',
  components: {
    Landing
  }
}
</script>
