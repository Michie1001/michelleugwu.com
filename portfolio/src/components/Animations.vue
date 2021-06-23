<template>
  <div>
     <!-- I'll fix later -->
    <div class="art">
      <div v-for="anim in animation"
        class="image"
        :key="anim.id">
        <video>
          <source :src="anim.src" :type="anim.type"/>
        </video>
        <p>{{anim.name}}</p>
      </div>
    </div>
      
  </div>
</template>

<script>
  export default{
    name: "animations",

    // data: () => ({
    //   animation:[
    //     {
    //       id: 1,
    //       src: require("../assets/artworks/animated/1.mp4"),
    //       type: 'video/mp4',
    //       name: 'Long Jump'
    //     },
    //     {
    //       id: 2,
    //       src: require("../assets/artworks/animated/balls.m4v"),
    //       type: 'video/m4v',
    //       name: 'Balls'
    //     },
    //     {
    //       id: 3,
    //       src: require("../assets/artworks/animated/bouncy.m4v"),
    //       type: 'video/m4v',
    //       name: 'Bouncy Fella'
    //     },
    //     {
    //       id: 4,
    //       src: require("../assets/artworks/animated/doublebounce.m4v"),
    //       type: 'video/m4v',
    //       name: 'Double Bounce'
    //     },
    //     {
    //       id: 5,
    //       src: require("../assets/artworks/animated/firstTake.mp4"),
    //       type: 'video/mp4',
    //       name: 'Balls Falling'
    //     },
    //     {
    //       id: 6,
    //       src: require("../assets/artworks/animated/jump.m4v"),
    //       type: 'video/m4v',
    //       name: 'Jump'
    //     },
    //     {
    //       id: 7,
    //       src: require("../assets/artworks/animated/run.m4v"),
    //       type: 'video/m4v',
    //       name: 'Run'
    //     },
    //     {
    //       id: 8,
    //       src: require("../assets/artworks/animated/walk.m4v"),
    //       type: 'video/m4v',
    //       name: 'Walk'
    //     },
        
    //   ],
    // })
  }
</script>