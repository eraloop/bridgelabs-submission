<template>
  <div class="d-flex-column justify-content-center align-items-center">
    <NavbarComponent loggedIn="loggedInUser"/>
    <WelcomePageComponent loggedIn="loggedInUser"/>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import WelcomePageComponent from '../components/WelcomePageComponent.vue';
export default {
    components: { NavbarComponent, WelcomePageComponent },


    computed:{
        loggedInUser(){
            return this.$store.getters.returnUser
        }
    },

    mounted(){
        this.loggedInUser,
        this.$store.dispatch("read")
        
        
    },
    methods:{
     
    }
}
</script>

<style>

</style>