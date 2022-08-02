<template>

<section>
    <nav class="flex items-center justify-between flex-wrap bg-black p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        
        <span class="font-semibold text-xl tracking-tight">ObjetGrafik</span>
      </div>
      <span class="text-white hidden md:inline lg:inline">{{message}}</span>
      <div class="block lg:hidden">
        <button @click="openMenu()" class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div id="nav-menu" class="w-full hidden block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-200 mr-4">
            Home
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-200 mr-4">
            Services
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-200">
            Shop
          </a>
        </div>

        <i class="fa fa-shopping-bag text-white hidden md:inline mr-8 cursor-pointer" aria-hidden="true"></i>
        <i class="fa fa-user text-white hidden md:inline mr-8 cursor-pointer" aria-hidden="true"></i>


        <div>
          <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-white mt-4 lg:mt-0">Contact</a>
        </div>
      </div>
    </nav>
</section>



</template>

<script>

    export default {
        name: 'Header',



        props: {
            message: String,
            
        },
        methods: {
            openMenu(){
                document.querySelector('#nav-menu').classList.toggle('hidden')
            }
        }

       




    }




</script>

<style scoped>
section {
    width: 100%;
    padding: 0;
}

</style>