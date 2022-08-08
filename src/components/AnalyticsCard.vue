<script>


export  default {
    name: 'AnalyticsCard',


    props: {
        item: Object,
    }




}




</script>


<template> 



    <div class="item flex flex-col  text-black  items-center w-full  rounded md:w-3/4 ">
         <div  class="icon-bg my-2  self-start flex justify-center  shadow-lg text-white items-center md:px-4" v-html="item.src"></div>
        <div class="item-text  md:w-3/4 text-left md:ml-8">
            <h3 class="text-xl py-4 font-bold uppercase text-blue-300 lg:text-lg">{{ item.title }}<div class="span bg-blue-400 md:hidden bg-black ml-32 my-1"></div></h3>
            <p class=" mb-2 md:mb-4 md:m-0">{{ item.description }}</p>

            <button class="item-btn bg-transparent text-blue-400  hover:scale-105 hover:font-bold my-4 py-2 px-4   hover:border-transparent rounded">Learn More <i class="fa-solid fa-arrow-right  text-blue-400 text-xl"></i></button>
        </div>
    </div>











</template>


<style scoped>

.item {
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 250ms;

}



.icon-bg {
    background-color: #7795f8;
    width: 65px;
    height: 65px;
    border-radius: 100rem;


}

.item-btn {
    transition: all 100ms;
}



.span {
    
    width: 150px;
    height: 2px;
}



</style>