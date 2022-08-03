<script>

    export default {


        name: 'WritingsCard',


        props: {
            title: String,
            subtitle: String,
        }



    }



</script>

<template>

    <div class="blog-card w-full flex flex-col mt-16 mb-4 isolate justify-end items-start rounded cursor-pointer shadow-md bg-blog-card1 ">



        <div class="mb-4 ml-4 text-left text-white">
            <p class="subtitle z-10 self-baseline text-md leading-none md:text-lg">{{subtitle}}</p>
            <strong class="blog-title z-10  text-xl md:text-2xl ">{{title}}</strong>
        </div>

        




    </div>




</template>


<style scoped>
.blog-card {
    background-image:linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;


}   

img {
    z-index: 1;

}




</style>