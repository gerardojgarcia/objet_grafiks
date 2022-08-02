<script>
import InfoCard from './InfoCard.vue'
import App from '../App.vue'

export default {
    name: 'InfoUsers',


    components: {
        InfoCard,
    },
    props: {
        cards: Array
    }


}



</script>

<!--TEMPLATE------------------------------------------------------------------------>



<template>
    <section class="users_section flex flex-col w-full pb-8">

        <div class="users_container w-full bg-white w-5/6 md:w-3/5 self-center rounded shadow-md mt-8 isolate mb-2">

            
            <!--<strong v-for="names in names.length" :key="names" :index="index" :names-array="names.map(a => a.name)"> For {{names}}</strong>-->


            <div class="users_container-items w-full flex flex-col md:flex-row md:justify-between">




                <div class="user-items flex flex-col self-center md:w-1/2 my-16">

                    <div class="info_card flex flex-col rounded bg-white  md:w-1/2 md:ml-24">

                       


                        <div class="info_card-text flex flex-col py-8 " v-for="card in cards" :key="card.id">
                           
                           
                           <InfoCard  :card="card"/>






                        </div>


                    </div>





                </div>
                <div class="user-image  transform -translate-x-36 -translate-y-28 h-full w-full md:-translate-x-20  md:h-2/3 md:w-2/3 md:flex  md:m-8">
                    <img src="/drawkit-grape-pack-illustration-12.svg" class="self-center" alt="">
                </div>
            </div>
        </div>






    </section>


</template>

<!--STYLE---------------------------------------------------------------------------->



<style scoped>
.users_section {
    background: linear-gradient(150deg, #7795f8 15%, #6772e5 70%, #555abf 94%);

}

.user-image {
    
    background-repeat: no-repeat;
    background-position: center;
    
    margin-left: 5rem;
}



img {
   transform: translateX(135px) translateY(100px); 
    transition: all 500ms;
}

img:hover {
    transform: translateX(-75px) translateY(-145px);
}

.info_card {
width: 100%;
min-height: 300px;



    
}








</style>