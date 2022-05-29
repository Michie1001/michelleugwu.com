<template>
  <div class="grid-area">

    <div class="experience-section">
      <h3>What I've Been</h3>
      <div class="experience"
      v-for="exp in experience"
      :key="exp.id">
        <h4><span>{{exp.role}}</span> at {{exp.company}}</h4>
        <p>{{exp.date}}</p>
      </div>
    </div>

    <v-img
      class="babe"
      alt="Illustrated face of a girl with a tree behind her"
      dark
      contain
      :src="require('../assets/imgs/babe.png')"
    ></v-img>


    <v-img
      class="collage"
      alt="Collage showcasing my recent certifications and assessment proficiencies"
      dark
      contain
      :src="require('../assets/imgs/assessments-collage.png')"
    ></v-img>

    <div class="skills-section">
      <span>Skills </span>
      <div class="specific__skills">
        <div class="skills"
          v-for="skill in skills"
          :key="skill.id">
            <p>{{skill}}</p>
        </div>
      </div>
      <v-divider></v-divider>
      <br>
      <span>Tools </span>
      <div class="specific__tools">
        <div class="tools"
          v-for="tool in tools"
          :key="tool.id">
            <p>{{tool}}</p>
        </div>
      </div>
    </div>
    
    <div class="achievements-section">
      <h3>What I've Spent Time On</h3>
      <div class="achievements"
      v-for="ach in achievements"
      :key="ach.id">
        <p>{{ach}}</p>
      </div>
    </div>

    <div class="education-section">
      <h3>What I've Studied</h3>
      <div class="education"
      v-for="edu in education"
      :key="edu.id">
        <h4><span>{{edu.degree}}</span> at {{edu.institute}}</h4>
        <p>{{edu.date}}</p>
      </div>
    </div>

    

  </div>
</template>

<script>
  export default{
    name: "Grid area",

    props: {messageToShow: String},
    data: () => ({
      experience: [
        {
          role: 'Mobile Engineer (Flutter)',
          company: 'Dukka Inc.',
          date: '2nd rotation in my graduate internship from late 2021 to early 2022',
        },
        {
          role: 'Frontend Engineer (ReactJS)',
          company: 'Dukka Inc.',
          date: '1st rotation in my graduate internship from mid to late 2021',
        },
        {
          role: 'Frontend Engineer (VueJS)',
          company: 'Hotels.ng',
          date: 'For my NYSC in 2020',
        },
        {
          role: 'Freelance Artist',
          date: 'The period between school and NYSC. 2019',
        },
        {
          role: 'Frontend Developer Intern (Laravel Blade)',
          company: 'Hotels.ng',
          date: 'Swapped to the developers\' corner till the end of my SIWES internship in 2017',
        },
        {
          role: 'Growth and Marketing Intern',
          company: 'Hotels.ng',
          date: 'Marketing experience at the start of my SIWES internship in 2017',
        },
        {
          role: 'Volunteer Code Instructor',
          company: 'Child Can Code',
          date: 'Taught primary school kids basic programming in 2016',
        },
      ],
      achievements: [
        'I co-pioneered and co-organized forLoopUniben in the University of Benin',
        'I was recognized by Figma as one of the top 5 most consistent Figma users in Nigeria in 2018',
        'I joined a dance crew fresh out of high school and realized dancing wasn\'t for me',
        'I interviewed at Microsoft and my major reason for wanting to work there? Encarta!! Lol',
        'Also, I participated in the University of Benin 2015 Spelling Bee',
        'I participated in ALCwithGoogle and ALCwithMicrosoft, the first Frontstack Challenge, etc ...I participate a lot',
        'I was the Public Relations Officer for NACOSS in my 200level. Another social plug being that I was also in the Press Club in my high school',
        'For my final year seminar, I gave a talk on the Importance and Benefits of Gamification',
        'For my final year project, I implemented a design of a Virtual Tour of the University Campus using React360',
        'I\'m trying to get PADI certified cos I\'m definitely going to swim with whales and Orcas',
        'Conversational Japanese and German',
        'Advocating for VueJS'
      ],
      education: [
        {
          institute: 'University of Benin, Benin, Nigeria',
          degree: 'Biochemistry',
          date: 'Started off thinking I could overcome the metabolic pathways...pfft! What I did was learn how to carry out 5 lab tests in the hospital during my medical internship at the campus health center, in my second year',
        },
        {
          institute: 'University of Benin, Benin, Nigeria',
          degree: 'B.Sc, Computer Science',
          date: 'Graduated November 2019',
        },
        {
          institute: 'Carbon Animation, Lagos, Nigeria',
          degree: 'Animation Basics',
          date: '2021, I\'d have my animation reel up here',
        },
      ],
      tools: [
        'Google Analytics',
        'Figma',
        'Postman',
        'Adobe AfterEffects',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Adobe Lightroom',
        'Adobe Spark',
        'Adobe XD',
        'Actions on Google',
        'Mailchimp',
        'Email on Acid',
        'Canva',

      ],
      skills: [
        'VueJS',
        'ReactJS',
        'Flutter',
        'Digital Design',
        'GraphQL',
        'Linux',
        'Fluent English',
        'Bootstrap',
        'Vuetify',
        'Laravel',
        'Sass',
      ],
    }),
  }
</script>