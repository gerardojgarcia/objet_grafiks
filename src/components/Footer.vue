<script>
    export default {
        name: "Footer",


    data() {

        return {

                twitterColor: '#1da1f2',
                facebookColor: '#3b5999',
                dribbbleColor: '#ea4c89',
                githubColor: '#222'




        }
    }




    }





</script>

<template>


<div class="footer m-0 bg-gray-200">
    <div class="footer-container flex flex-col w-full mx-4 lg:flex-row lg:px-24 lg:py-8 ">
    
        <div class="footer-text flex flex-col w-full my-4">
            <strong class="text-2xl text-left text-blue-400 my-4 lg:text-4xl">Thank you for supporting us!</strong>
            <p class="text-left text-lg lg:text-xl">Let's get in touch on any of these platforms</p>
        </div>
    
    
        <div class="social-icons flex flex-row align-left my-4 h-16 items-center lg:pr-8   ">
    
            <div class="icon-box  bg-blue-500  flex flex-col place-center items-center justify-center" :style="{background: facebookColor}">
        <i class="fa-brands fa-facebook-f"></i>
    
    
            </div>
                    <div class="icon-box  bg-blue-500  flex flex-col place-center items-center justify-center" :style="{background: twitterColor}">
        <i class="fa-brands fa-twitter"></i>
    
    
            </div>
    
                    <div class="icon-box  bg-blue-500  flex flex-col place-center items-center justify-center" :style="{background: githubColor}">
    <i class="fa-brands fa-github"></i>
    
    
            </div>
    
                    <div class="icon-box bg-blue-500  flex flex-col place-center items-center justify-center" :style="{background: dribbbleColor}">
    <i class="fa-brands fa-dribbble"></i>
    
    
            </div>
    
    
    
        </div>
    
    
    
    </div>
</div>



</template>

<style>

        .icon-box {
            margin-right: 1rem;
            height: 50px;
            width: 50px;
            border-radius: 5rem;
        }

        i {
            color: white;
        }




</style>