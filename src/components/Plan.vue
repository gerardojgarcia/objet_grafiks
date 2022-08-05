<script>

import PlanCard from './PlanCard.vue'




    export default {
        name: 'Plan',

        props: {
            name: String,
            price: String,
            storage: String,
            limit: String,
            tracking: String,
        },

        components: {
            PlanCard,
        }


    }




</script>


<template>
    <section class="plan">

        <div class="plan-container">

          <div class="plan-header">
              <h5>Choose a plan for you next project</h5>
                <button class="cheaper"> Cheaper</button>
                <button class="expensive">Expensive</button>
          </div>

          <div class="plan-description">



            <p>You have free Unlimited Updated and Premium Support on each package. You also have 20 days to reques a refund. </p>
          </div>

            <div class="plan-cards">


                <div class="plan-card-container">
                    
                    
                    <PlanCard/>
                    
                    
                    
                    </div>



            </div>




        </div>




    </section>





</template>