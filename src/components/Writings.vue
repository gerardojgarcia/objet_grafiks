<script>

import WritingsCard from './WritingsCard.vue'






export default {
    name: "Writings",
    components: { 
        WritingsCard 
        },

    props: { 
        title: String,
        subtitle: String


    },

    data(){
        return {
                card1: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/pexels-eberhard-grossgasteiger-1670187.jpg)',
                card2: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/pexels-eberhard-grossgasteiger-1699030.jpg)',
                card3: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/pexels-pixabay-417173.jpg)',
                card4: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/pexels-sebastian-palomino-1955134.jpg)',
                backgroundSize: 'cover'
            } 
        
    }
}



</script>


<template>

<section class="writings flex flex-col pb-24">

    <div class="p-8">
        <h4 class="text-3xl font-bold">Our Recent Writings</h4>
    </div>

    <div class="flex self-center mx-8">
        <p class="mx-2">I always felt like I coul do anyting. That's the main thing people are conroleld by! Thoughts their perception of themselves!
            They're slowed down by their perception of themselves. If yo're taught you cant' do antying. you won't do anyting. I was taught I could do everything. 
        </p>
    </div>

    <div class="blog-cards flex flex-col w-full self-center items-center ">

        <div class="blog-card flex flex-col w-5/6  px-4">


            <WritingsCard title="Research Byte" subtitle="AI on the edge" class="  hover:scale-125  transition-all "
            
               :style="{background: card1, 'background-size': backgroundSize}"
            
            
            />

             <WritingsCard title="Data Virtualization" subtitle="Spectrum" class='card2 hover:scale-125  transition-all' :style="{background: card2, 'background-size': backgroundSize }" />


             <WritingsCard title="New Challenges" subtitle="Touch on a trend" class=' card3 hover:scale-125  transition-all' :style="{background: card3, 'background-size': backgroundSize }"/>


            <WritingsCard title="Driverless Future" subtitle="Self-Driving Cars" class='card4 hover:scale-125  transition-all' :style="{background: card4, 'background-size': backgroundSize }"/>






        </div>



    </div>





</section>





</template>


<style>

.card1 {
     background-image:linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

}

.card2 {
    background-image: url(/pexels-eberhard-grossgasteiger-1699030.jpg);
    
}

.card3 {
    background-image: url(/pexels-pixabay-417173.jpg);
    
}

.card4 {
    background-image: url(/pexels-sebastian-palomino-1955134.jpg);
    
}
   



</style>