<script>

    export default {


        name: 'PlanCard',



        props: {
            name: String,
            price: String,
            storage: String,
            limit: String,
            tracking: String,
        },
    }
    



</script>


<template>


    <div class="plan-card shadow-md w-full  flex flex-col justify-center items-center my-4">

        <div class="plan-card-title text-xl py-8 ">

            <strong class="text-blue-500 border-b border-black">{{name}}</strong>
        </div>

        <div class="plan-card-descr text-blue-400">

            <div class="plan-card-price flex flex-col py-8 text-center items-center justify-center text-center">


                <p class="text-5xl font-bold text-blue-600"> {{'$' + price}}</p>
                <p>per month</p>

            </div>

            <div class="plan-card-info ">
                <p class="py-2"><span class="font-bold text-blue-600">{{storage + ' '}}</span>File Storage </p>

                             
                <p class="py-2"> <span class="font-bold text-blue-600">{{limit + " "}} </span>Users</p>

                <p class="py-2"> <span class="font-bold text-blue-600"> {{tracking + " "}}</span>  Support</p>

            </div>



        </div>

<div class="my-8 text-blue-400">
    <button class="demo bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Request a Demo</button>
</div>

    </div>






</template>


<style scoped>



</style>