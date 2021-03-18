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
  html{
    scroll-behavior: smooth;
  }
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
    // background-color:#f1f1f1;
    // background: linear-gradient(to top, #010c22 0%, #537895 100%);
    background: linear-gradient(to top, #18387c 0%, #e9eff4 100%);
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
      z-index: 9;
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
        margin-top: 1rem;
        padding: .5rem 1.5rem;
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
        z-index:10;
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
        height: 1%;
        width: 1%;
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
    .main-content{
      position:relative;
    }
    .about{
      width: 100%;
      padding: 10rem 0;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      position: relative;
      // .anatomy{
      //   svg {
      //     position: absolute;
      //     top: 0;
      //     left: 0;
      //     right: 0;
      //     bottom: 0;
      //     display: block;
      //     width: 100%;
      //     height: 100%;
      //   }
      // }
      h2{
        font-size: 4rem;
        animation: pulse 2s ease infinite;
      }
    }
    .roundbg{
      background-color: #f1f1fe;
      border-radius: 50%;
      z-index: 1;
      position: absolute;
      top: 40vh;
      left: 0;
      height: 300px;
      width: 300px;
    }
    .big{
      top: -5vh;
      left: 70vw;
      transform: scale(2);
      background-color: #f1e2e1;
      z-index: 0;
    }
    .small{
      top: 2vh;
      left: 21vw;
      transform: scale(.3);
      background-color: #01c2ea;
      opacity: .3;
    }
    .yellow-bar{
      background-color: #f1f1f1;
      clip-path: ellipse(70% 100% at 50% 100%);
      // On mobile: ellipse(100% 100% at 50% 100%)
      min-height: 100vh;
      width: 100vw;
      z-index: 1;
      position: absolute;

    }
    .titlePhoto {
      position: relative;
      z-index: 2;
      margin-top: -4rem;
      width: 100vw;
      display: flex;
      justify-content: center;
    }
    .grid-area{
      background-color: #f1f1f1;
      margin-top: 20vh;
      padding: 0 4rem;
      display: grid;
      grid-template-columns: 50% 50%;
      grid-row-gap: 5rem;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 2;
      h3{
        margin: 0 3rem 1rem 3rem;
        font-size: 24px;
      }
      span{
        color: #010c22;
        font-size: 21px;
      }
      p{
        color: #777;
        margin-bottom: 1rem;
        font-size: 21px;
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
      .babe{
        grid-column: 2/-1;
        grid-row: 1/2;
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
          font-size: 14px;
          &::before{
            content: '• ';
            font-size: 21px;
            color: #000;
          }
        }
      }
      .giant{
        grid-column: 1/2;
        grid-row: 4/5;
      }
      .skills-section{
        grid-column: 2 / -1;
        grid-row: 4 / 5;
        font-weight: bold;
        text-align: center;
        .specific__skills, .specific__tools{
          text-align: center;
          margin-left: 2rem;
          line-height: 1.5;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          align-items: center;
          justify-content: center;
          p{
            font-size: 16px;
          }
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
          text-align: center;
        }
        .contacts{
          font-size: 1.3rem;
          text-align: center;
          line-height: 1;
          margin: 1rem 0;
          h5{
            color: #777;
          }
          i{
            color: #010c22;
            font-size: 2rem;
          }
          &:last-child {
            grid-column: 1/-1;
          }
        }
      }
      div[class*="section"]{
        transition: .5s;
        transform-origin: left;
        transform: scaleX(1);
      }
      div[class*="section"]:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: right;
        transition: .5s;
      }
    }
    .works-section{
      overflow-y: scroll;
      height: 600px;
      width: 100vw;
      .fixed-banner{
        position: absolute;
        width: 48vw;
        height: 600px;
        background: linear-gradient(to top, #010c22 0%, #537895 50%, #f1f1f1 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3;
        h2{
          font-size: 64px;
          font-weight: bold;
          color: #fff;
          margin: 0;
        }
      }
      .scrollable{
        position: relative;
        background-color: #f1f1f1;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: repeat(5, 600px);
        justify-items: center;
        align-items: center;
        text-align: center;

        .works{
          grid-column: 2/ -1;
        }
        .preview-image{
          filter: blur;
          color: blue;
          object-fit: cover;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          h3{
            font-size: 22px;
          }
          p{}
          button{}
        }
      }
    }
    .toTop{
      display: none;
      position: fixed;
      bottom: 20px;
      right: 30px;
      z-index: 8;
      font-size: 18px;
      border: none;
      outline: none;
      background-color: #0d172c;
      color: white;
      cursor: pointer;
      padding: 1rem;
      box-shadow: 0px 0px 5px 2px #18387c;
      border-radius: 50%;
      transform: rotate(-90deg);
      transition: all 1s ease;
      &:hover{
        transform: rotate(270deg);
        background-color: #1d273c;
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
    @keyframes pulse {
      0%{
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100%{
        transform: scale(1);
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