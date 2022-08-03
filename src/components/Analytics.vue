<script>
    import AnalyticsCard from './AnalyticsCard.vue'

export default {
    name: 'Analytics',

    props: {

        items: Array,


    },

    components: {
        AnalyticsCard,
    }


}


</script>

<template>
<section class="analytics md:pb-24">
    
    <div class="flex flex-col justify-center my-16">
            <p class="bg-blue-200 w-1/6 self-center rounded-xl mt-16  mb-8">insight</p>
        <strong class="text-4xl w-4/5 self-center my-8 md:text-5xl">Full-Funnel <span class="text-blue-400">Social Analytics</span> </strong>
        
        <p class=" text-gray-400 mt-8 mb-4 w-4/5 self-center text-xl "> The time is now for it to be okay to be freat. For being a bright color. For standing out.</p>
        
        
        </div>

    <div class="analytics_cards flex flex-col w-full md:flex-row">

        <div class="analytics_card flex flex-col  mx-2 my-2" v-for="item in items" :key="item.id">

            <AnalyticsCard :item="item"/>


        </div>




    </div>

</section>




</template>