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


    <div class="plan-card">

        <div class="plan-card-title">

            <strong>Gold</strong>
        </div>

        <div class="plan-card-descr">

            <div class="plan-card-price">


                <p>{{price}}</p>
                <p>per month</p>

            </div>

            <p class="plan-card-data">
                <p>{{storage + ' File Storage'}} </p>



            </p>



        </div>



    </div>






</template>