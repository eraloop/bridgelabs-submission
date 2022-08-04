<template>
  <div class="navbar d-flex text-center justify-content-center align-items-center ">
   <section>
     <p>BridgeLabs Onboarding Task - Frontend</p>
   </section>

   <section>
      <div v-if="loggedIn"> 
        <button @click.prevent="showReg" class="register px-4">Register</button>
        <button @click.prevent="showLog" class="login px-4">Login</button>
      </div>

      <div v-else>
        


      </div>
   </section>

  </div>
</template>

<script>
export default {

data(){
    return{

    }
},

computed:{
  loggedIn(){
    return this.$store.getters.returnLoggedIn
  }
}, 
mounted(){

},

methods:{

}

}
</script>

<style>

.navbar{
    width: 100%;
    height: 10vh;
    color: white;
    background: linear-gradient(to right, #04126e , #3d75f7);
    display: flex;
    align-items: center ;
    justify-content: center;
    text-align: center;
}


</style>