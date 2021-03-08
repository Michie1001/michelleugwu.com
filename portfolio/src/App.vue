<template>
  <v-app>
    <v-main>
      <Landing/>
    </v-main>
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
    // background: linear-gradient(to top, #18387c 0%, #e9eff4 100%);
    .logo-area{
      height: 80px;
      width: 60px;
      position: absolute;
      margin: 20px;
    }
    header{
      position:fixed;
      width:100%;
      height:100%;
      top:0;
      left:0;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      color: #fff;
      .main-heading{
        position:relative;
        z-index: 10;
        line-height: 1.3;
        white-space: nowrap;
        overflow: hidden;
        text-align: center;
        // letter-spacing: 1pt;
        // font-family: 'Montserrat', sans-serif;
        .messages::before{
          text-transform: uppercase;
          // font-weight: bold;
          content: ' ';
          animation: openclose 5s ease infinite;
        }
      }
      button{
        position:absolute;
        top: 71vh;
        z-index: 10;
        transition: all .8s cubic-bezier(0.645, 0.045, 0.355, 1),
                   transform .3s cubic-bezier(0.455, 0.03, 0.515, 0.955),
                   box-shadow .3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        overflow:hidden;
        font-weight: bold;
        background-color: #fff;
        padding: 1rem;
        border-radius: 50px;
        color: #010c22;
        box-shadow: 2px 1px 20px 0 rgba(#000, 0.5);
        &:hover{
          box-shadow:0 0 0 0 rgba(#000, 0.5);
          color: #222;
          background-color: #ccc;
        }
      }
      .triangle{
        position:absolute;
        z-index:1;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background: linear-gradient(to top, #010c22 0%, #537895 100%);
        transition: all .8s cubic-bezier(0.645, 0.045, 0.355, 1);
        display:flex;
        justify-content:center;
        align-items:center;
        pointer-events:none;
        
        &.left{
          clip-path: polygon(0 0, 0% 100%, 100% 100%);
        }
        
        &.right{
          clip-path: polygon(100% 0, 0 0, 100% 100%);
        }
      }
      &.open{
        .triangle{
              
          &.left{
            clip-path: polygon(0 0, 0 100%, 0 100%);
          }
          
          &.right{
            clip-path: polygon(100% 0, 100% 0, 100% 100%);
          }
        }
        
        button{
          display: none;
        }
      }
    }
    .about{
      width: 100%;
      padding-top: 2rem;
      text-align: center;
      // background-image: linear-gradient(#010107, #f1f1f1);
    }
    .grid-area{
      margin: 2rem 4rem;
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: repeat(5, 1fr);
      align-items: center;
      justify-content: center;
      h3{
        margin: 0 3rem 1rem 3rem;
      }
      span{
        color: #0c107c;
      }
      p{
        color: #777;
        margin-bottom: 1rem;
      }
      a{
        text-decoration: none;
        font-weight: bold;
        color: #0c107c;
      }
      .experience-section{
        text-align: right;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }
      .education-section{
        grid-column: 2 / -1;
        grid-row: 2 / 3;
      }
      .achievements-section{
        text-align: center;
        grid-column: 1 / 2;
        grid-row: 3 / 4;
        .achievements{
          padding: 0 4rem;
        }
        .achievements span{
          margin-bottom: 1rem;
          font-weight: bold;
          &::before{
            content: '• ';
            font-size: 21px;
            color: #000;
          }
        }
      }
      .skills-section{
        grid-column: 2 / -1;
        grid-row: 4 / 5;
        font-weight: bold;
        .specific__skills, .specific__tools{
          text-align: center;
          margin-left: 2rem;
          line-height: 1.5;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          align-items: center;
          justify-content: center;
        }
      }
      .contacts-section{
        grid-column: 1 / 2;
        grid-row: 5 / 6;
        justify-content: center;
        align-items: center;
        display: grid;
        grid-template-columns: 200px 200px;
        h3{
          grid-column: 1 / -1;
        }
        .contacts{
        }
      }
    }
    // .footer{
    //   z-index: 1;
    //   --footer-background:#00021a or #010c22;
    //   display:grid;
    //   position: relative;
    //   grid-area: footer;
    //   min-height:12rem;
    //   .bubbles {
    //     position: absolute;
    //     top:0;
    //     left:0;
    //     right:0;
    //     height:1rem;
    //     background:var(--footer-background);
    //     filter:url("#blob");
    //     .bubble {
    //       position: absolute;
    //       left:var(--position, 50%);
    //       background:var(--footer-background);
    //       border-radius:100%;
    //       animation:bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s),
    //       bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);
    //       transform:translate(-50%, 100%);
    //     }
    //   }
    //   .content {
    //     z-index: 2;
    //     display:grid;
    //     grid-template-columns: 1fr auto;
    //     grid-gap: 4rem;
    //     padding:2rem;
    //     background:var(--footer-background);
    //     a, p {
    //       color:#F5F7FA;
    //       text-decoration:none;
    //     }
    //     b {
    //       color:white;
    //     }
    //     p {
    //       margin:0;
    //       font-size:.75rem;
    //     }
    //     >div {
    //       display:flex;
    //       flex-direction:column;
    //       justify-content: center;
    //       >div {
    //         margin:0.25rem 0;
    //         >* {
    //         margin-right:.5rem;
    //         }
    //       }
    //       .image {
    //         align-self: center;
    //         width:4rem;
    //         height:4rem;
    //         margin:0.25rem 0;
    //         background-size: cover;
    //         background-position: center;
    //       }
    //     }
    //   }
    //   }
    // }

    @keyframes bubble-size {
      0%, 75% {
        width:var(--size, 4rem);
        height:var(--size, 4rem);
      }
      100% {
        width:0rem;
        height:0rem;
      }
    }
    @keyframes bubble-move {
      0% {
        bottom:-4rem;
      }
      100% {
        bottom:var(--distance, 10rem);
      }
    }
    @keyframes openclose {
      0% {
        content: 'creative';
      }
      35% {
        content: 'frontend engineer';
      }
      40% {
        content: 'animator';
      }
      60% {
        content: 'artist';
      }
      80% {
        content: 'writer';
      }
      100% {
        content: 'editor';
      }
    }
  }
</style>