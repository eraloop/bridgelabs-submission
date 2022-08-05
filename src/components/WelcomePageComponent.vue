<template>
    <div class="welcome-page container justify-content-center align-items-center  mx-auto my-5 py-5  shadow-lg ">

       <div class="container justify-content-center align-items-center text-center my-auto py-auto">
            <!-- <h2>welcome {{loggedIn.name}}</h2>
            <h6>Email: {{loggedIn.email}}</h6> -->

       </div>

       <div class="container d-flex-column   align-items-center juustify-content-center ">
        <section class="text-center">
            <h4>View and Manage Categories</h4>
        </section>

        <section class="px-4">
            <vuetable ref="vuetable"
                :fields="['name', 'description', 'actions']"
                data-path=""
                pagination-path=""
                :api-mode="false"
                :data="tableData.data"
            >
            </vuetable>
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
        }
    },

    computed:{
        // loggedInUser(){
        //     return this.$store.getters.returnUser
        // },
        tableData(){
            return this.$store.getters.returnCategoryValues
        }
    },
    mounted(){
        this.loggedInUser,
        this.tableData()
        
    },

    methods: {
       
    }

}
</script>

<style>

.welcome-page{
    width: 70vh;
    border-radius: 20px;
}

button.submit-btn{
    background: #04126e;
    border-radius: 5px;
    padding: 7px;
    color: #fff;
}

</style>