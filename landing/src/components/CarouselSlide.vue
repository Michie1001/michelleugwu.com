<template>
  <div>
    <div v:show="visibleSlide === index" class="carousel-slide">
      <slot></slot>
    </div>
  </div>
</template>