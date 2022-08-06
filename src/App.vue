
<template>
 
<Header message="Welcome back, Gerardo!" class="fixed z-20"/>
<Hero/>
<InfoUsers :cards="cards"/>
<Analytics :items="items"/>
<Writings/>
<Plan/>
<Footer />
</template>




<script >

export default {



  components: {
  Header,
  Hero,
  HeroForm, 
  InfoUsers,
  InfoCard,
  Analytics,
  AnalyticsCard,
  Writings,
  WritingsCard,
  Plan,
  PlanCard,
  Footer
  },
  
  data() {
            return {

           cards: [],
           
           items: [],

           blogs: []
        }
        },

        created() {
          this.cards = [
              {
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

          this.items =[
            
            {
              id: 1,
              title: 'Social Conversations',
              description: 'We get insulted by others, lsoe trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.',
              src: '<i class="fa-solid fa-gear"></i>'
            
            
            
            },
            {
              id: 2,
              title: 'Analyze Performance',
              description: 'We get insulted by others, lsoe trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.',
              src: '<i class="fa-solid fa-atom"></i>'
            
            
            
            },
            {
              id: 3,
              title: 'Measure Conversions',
              description: 'We get insulted by others, lsoe trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.',
              src: '<i class="fa-solid fa-globe">'
            
            
            
            }


          ]
                

        },
  
}

import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import HeroForm from './components/HeroForm.vue'
import InfoUsers from './components/InfoUsers.vue';
import InfoCard from './components/InfoCard.vue';
import Analytics from './components/Analytics.vue';
import AnalyticsCard from './components/AnalyticsCard.vue'
import Writings from './components/Writings.vue'
import WritingsCard from './components/WritingsCard.vue'
import Plan from './components/Plan.vue'
import PlanCard from './components/PlanCard.vue'
import Footer from './components/Footer.vue'




        
</script>



<style scoped>



</style>
