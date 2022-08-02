
<template>
 
<Header message="Welcome back, Gerardo!" class="fixed z-20"/>
<Hero/>
<InfoUsers :cards="cards"/>
<Analytics/>
</template>




<script >

export default {



  components: {
    Header,
    Hero,
  HeroForm, 
  InfoUsers,
  InfoCard,
  Analytics
  },
  data() {
            return {

           cards: []         
        }
        },

        created() {
          this.cards = [{
                    id: 1,
                    title: 'Developers',
                    description: "The time is now for it to be okay fto be great. People in this world shun poepole for that eact reason . For being a bright color. For standing Out. Bu the time is now.",
                    src: '<i class="fa-brands fa-html5 "></i>'

                },
                {
                    id: 2,
                    title: 'Designers',
                    description: "The time is now for it to be okay fto be great. People in this world shun poepole for that eact reason . For being a bright color. For standing Out. Bu the time is now.",
                    src: '<i class="fa-solid fa-box-open "></i>'

                },
                {

                    id: 3,
                    title: 'Beginners',
                    description: "Looking to experiment and get something up and running fast? You've come to right place! Fully customizable code ready for you to start exploring.",
                    src: '<i class="fa-solid fa-bell "></i>'

                }
                ]
        },
  
}

import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import HeroForm from './components/HeroForm.vue'
import InfoUsers from './components/InfoUsers.vue';
import InfoCard from './components/InfoCard.vue';
import Analytics from './components/Analytics.vue'




        
</script>



<style scoped>



</style>
