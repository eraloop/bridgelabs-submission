<template>
  <div class="navbar ">
   <div class="container d-flex  justify-content-between align-items-center ">
    <section>
     <p>BridgeLabs Onboarding Task - Frontend</p>
   </section>

   <div>
        <ul>
          <li><a href="/create">Create Category</a></li>
          <!-- <li><a href="/create">Create Category</a></li> -->
        </ul>
    </div>

   <section>
      <div v-if="!loggedIn" >  
        <a href="/" class="px-3"><button class="filled px-4">Register</button></a>
        <a href="/login"><button class="outline px-4">Login</button></a>
      </div>

      <div v-else>
        <span>romanricakam@gmail.com</span>
        <button @click.prevent="logoutUser" class="filled px-4">Logout</button>
      </div>
   </section>
   </div>

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
  logoutUser(){
    this.$store.dispatch("logoutUser")
  }
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

ul li{
  list-style: none;
  text-decoration: none;
  color: white;
}

ul li:hover{
  color: #3d75f7;
  padding: 5px;
  border-radius: 5px;
}
ul li a{
  text-decoration: none;
  color: white;
}


</style>