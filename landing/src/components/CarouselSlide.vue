<template>
  <div>
    <div v:show="visibleSlide === index" class="carousel-slide">
      <slot>
        <img :src="slide" />
      </slot>
    </div>
  </div>
</template>

<script>
  export default{
    props: ['visibleSlide', 'index', 'slide'],
    data(){

    }
  }
</script>