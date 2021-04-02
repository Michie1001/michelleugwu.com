<template>
  <div>
    <div class="wave-effect">
      <!-- Gotten the waves code from Daniel Österman on codepen, great stuff -->
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="#e0e0e0" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.8)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="#f1e2e1" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#cdd2e3" />
      </g>
      </svg>
    </div>
    <footer>
      <div class="contacts-section">
        <div class="contacts"
          v-for="reach in contact"
          :key="reach.id">
            <a :href="reach.link">
              <h5>
                <i :class="reach.icon"></i>
                <br>
                <!-- {{reach.name}} -->
              </h5>
          </a>
        </div>
      </div>

      <div class="footer-logo">
        <v-img            
          dark
          class="imgg"
          alt="Michelle's logo"
          contain
          width="30px"
          height="30px"
          :src="require('../assets/imgs/profileAvatar.svg')"
        >
        </v-img>
        <small>&copy; Copyright 2021, Michelle Ugwu</small> 
      </div>
    </footer>
  </div>
</template>

<script>
  export default{
    data: () => ({
      contact: [
        {
          icon: 'fab fa-linkedin-in',
          name: 'LinkedIn',
          link: 'www.linkedin.com/in/michelle-ugwu',
        },
        {
          icon: 'fab fa-instagram',
          name: 'Instagram',
          link: 'https://www.instagram.com/michie_1001/',
        },
        {
          icon: 'fab fa-github',
          name: 'Github',
          link: 'https://github.com/Michie1001',
        },
        {
          icon: 'fab fa-stack-overflow',
          name: 'Stack Overflow',
          link: 'https://stackoverflow.com/users/story/6276301',
        },
        {
          icon: 'fab fa-twitter',
          name: 'Twitter',
          link: 'https://twitter.com/Michie1001',
        },
      ],
    }),
  }
</script>