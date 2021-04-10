<template>
  <div class="postscript">
    <p>All illustrations by Michelle Ugwu</p>
    <div class="contactMe">
      <p>Send me an email, let's work together.<br/>
      <b>{{email}}</b></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Postscript",

    data: () => ({
      email: "michieugwu@gmail.com",
    }),
  }
</script>