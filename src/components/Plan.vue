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
        },

         methods: {
            cheaper(){
                const cheapPlanEl = document.getElementById('cheaper-plan')
                const expensivePlanEl = document.getElementById('expensive-plan')
                const cheaperEl = document.querySelector('.cheaper')
                const expensiveEl = document.querySelector('.expensive')


                cheapPlanEl.classList.toggle('hidden')
                expensivePlanEl.classList.toggle('hidden') 

                cheaperEl.classList.toggle('selected')
                expensiveEl.classList.toggle('selected')

                console.log("i'm cheaper")
            },


            expensive(){
                 const cheapPlanEl = document.getElementById('cheaper-plan')
                const expensivePlanEl = document.getElementById('expensive-plan')
                const cheaperEl = document.querySelector('.cheaper')
                const expensiveEl = document.querySelector('.expensive')


                cheapPlanEl.classList.toggle('hidden')
                expensivePlanEl.classList.toggle('hidden') 

                cheaperEl.classList.toggle('selected')
                expensiveEl.classList.toggle('selected')

                console.log("i'm expensive")

            }

         }


    }




</script>


<template>
    <section class="plan">

        <div class="plan-container">

          <div class="plan-header ">
              <h5 class="text-4xl text-left mx-4 my-8">Choose a plan for you next project</h5>
                <div class="plan-buttons flex flex-row ml-4 mb-12">
                    <button class="cheaper bg-white text-blue-500 border-blue-500  hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mr-2" @click="cheaper()"> Cheaper</button>
                    <button class="expensive selected bg-white text-blue-500 hover:bg-blue-700 border-blue-500 text-white font-bold py-2 px-4 rounded" @click="expensive()">Expensive</button>
                </div>
          </div>

          <div class="plan-description text-blue-400 mx-4 text-left text-lg">



            <p>You have free Unlimited Updated and Premium Support on each package. You also have 20 days to reques a refund. </p>
          </div>

            <div class="plan-cards flex flex-col w-full justify-center items-center">


                <div id="expensive-plan" class="  plan-card-container flex flex-col justify-center items-center w-4/5">
                    
                    
                    <PlanCard name="Gold" price="100" storage="200GB" limit="Unlimited" tracking="Premium"/>
                    
                    <PlanCard name="Platinum" price="135" storage="500GB" limit="Unlimited" tracking="No Time" />
                    
                    </div>

                    <div id="cheaper-plan" class=" hidden plan-card-container flex flex-col justify-center items-center w-4/5 ">

                        <PlanCard name="Standard" price="25" storage="20GB" limit="15" tracking="No"/>
                    
                    <PlanCard name="Premium" price="59" storage="50GB" limit="100" tracking="Premiium" />





                    </div>



            </div>




        </div>




    </section>





</template>



<style scoped>

.selected {
    background-color: #646cff;
    color: white; 
    border: none;
}




</style>