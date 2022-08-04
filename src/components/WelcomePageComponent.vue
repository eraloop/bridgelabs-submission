<template>
    <div class="welcome-page container justify-content-center align-items-center  mx-auto my-5 py-5  shadow-lg ">

       <div class="container justify-content-center align-items-center text-center my-auto py-auto">
            <!-- <h2>welcome {{loggedIn.name}}</h2>
            <h6>Email: {{loggedIn.email}}</h6> -->

            <section class="my-3">
                <button class="submit-btn col-3" @click.prevent="logoutUser" >Loggout</button>
            </section>
       </div>

    </div>
</template>

<script>

export default {

// computed:{
//     loggedInUser(){
//         return this.$store.getters.returnUser
//     }
// },
// mounted(){
//     this.loggedInUser
// },
    // props:{
    //     loggedIn
    // },

    methods: {
        
    }

}
</script>

<style>

.welcome-page{
    width: 70vh;
    height: 60vh;
    border-radius: 20px;
}

button.submit-btn{
    background: #04126e;
    border-radius: 5px;
    padding: 7px;
    color: #fff;
}

</style>