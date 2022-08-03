<template>

<section class="hero  flex " id="hero">
    <div class="hero-shape shadow-sm"></div>

    <div class="hero-info flex flex-col mt-44 md:flex-row">
        <div class="hero-text w-full md:w-1/2">
            <h1 class="text-5xl px-2 md:text-6xl my-8  md:w-1/2 md:ml-52 md:mt-72 md:text-left">Graphics designed with <span class="text-bold text-white" >brand essence</span> in mind</h1>
            <p class="subheader  text-xl px-2 md:text-2xl text-white w-full my-16 md:w-1/2 md:ml-52 md:mt-24 md:text-left ">The design system comes with everything you need to elevate your brand. Everything is tailor made to highlight your strengths and build your brand's identity</p>
        </div>
        
        
        <div class="hero-form w-1/4 self-center">
            <HeroForm class="  self-center w-full  invisible md:visible flex md:mt-42 md:mr-24"/>
        </div>
    </div>



</section>

</template>

<script>

import HeroForm from './HeroForm.vue'



export default {
    name: "Hero",
    components: { 
        HeroForm, 
        }
}



</script>

<style>

.hero-shape {
    background: linear-gradient(150deg,#7795f8 15%,#6772e5 70%,#555abf 94%);
    width: 100%;
    transform: skewY(-8deg);
-webkit-transform-origin: 0;
transform-origin: 0;
position: absolute;
top: 0;
z-index: -1;

height: 100%;
}



</style>