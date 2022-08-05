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

          <div class="plan-header ">
              <h5 class="text-4xl text-left mx-4 my-8">Choose a plan for you next project</h5>
                <div class="plan-buttons flex flex-row ml-4 mb-12">
                    <button class="cheaper bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Cheaper</button>
                    <button class="expensive bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Expensive</button>
                </div>
          </div>

          <div class="plan-description text-blue-400 mx-4 text-left text-lg">



            <p>You have free Unlimited Updated and Premium Support on each package. You also have 20 days to reques a refund. </p>
          </div>

            <div class="plan-cards flex flex-col w-full justify-center items-center">


                <div class="plan-card-container flex flex-col justify-center items-center w-4/5">
                    
                    
                    <PlanCard name="Gold" price="100" storage="200GB" limit="Unlimited" tracking="Premium"/>
                    
                    
                    
                    </div>



            </div>




        </div>




    </section>





</template>