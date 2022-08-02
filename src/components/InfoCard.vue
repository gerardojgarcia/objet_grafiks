<script>





export default {
    name: 'InfoCard',


    props: {
        card: Object
    }



}



</script>

<template>

    <div class="card flex flex-col md:flex-row items-center w-full rounded md:w-3/4 hover:shadow-md ">
         <div  class="icon-bg my-2 md:px-4 self-start flex justify-center shadow-md items-center" v-html="card.src"></div>
        <div class="card-text  md:w-3/4 text-left md:ml-8">
            <h3 class="text-3xl py-4">{{ card.title }}<div class="span  md:hidden bg-black ml-32 my-1"></div></h3>
            <p class=" mb-2 md:mb-4">{{ card.description }}</p>

            <button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white my-4 py-2 px-4 border border-black hover:border-transparent rounded">Learn More</button>
        </div>
    </div>





</template>

<style scoped>
.card {
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 250ms;

}

.card:hover  {
    background-color: rgb(199, 181, 181);
    margin: 5px;
    padding: 10px 20px;
}

.icon-bg {
    background-color: #7795f8;
    width: 50px;
    height: 50px;
    border-radius: 100rem;


}



.card:hover * {
    color: white

}

.span {
    
    width: 75px;
    height: 2px;
}
</style>