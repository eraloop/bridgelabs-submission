<template>
    <div class="welcome-page container justify-content-center align-items-center  mx-auto my-5 py-5  shadow-lg ">

       <div class="container justify-content-center align-items-center text-center my-auto py-auto">
            <!-- <h2>welcome {{loggedIn.name}}</h2>
            <h6>Email: {{loggedIn.email}}</h6> -->

       </div>

       <div class="container d-flex-column text-center align-items-center juustify-content-center ">
        <section>
            <h4>View and Manage Categories</h4>
        </section>

        <section>

            <vuetable ref="vuetable"
                api-url="table"
                :fields="['name', 'description', 'actions']"
                data-path=""
                pagination-path=""
                :api-mode="false"
                :data="table"
            ></vuetable>

        </section>
       </div>

    </div>
</template>

<script>
import Vuetable from 'vuetable-2'

export default {

    components: {
        Vuetable
    },

    data(){
        return{
            // table:[
               
            // ]
        }
    },

    computed:{
        // loggedInUser(){
        //     return this.$store.getters.returnUser
        // },
        table(){
            return this.$store.getters.returnCategoryValues
        }
    },
    mounted(){
        // this.loggedInUser,
        // this.table()
    },

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