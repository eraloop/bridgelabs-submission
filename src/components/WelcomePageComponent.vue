<template>
    <div class="welcome-page container justify-content-center align-items-center  mx-auto my-5 py-5  shadow-lg ">

       <div class="container justify-content-center align-items-center text-center my-auto py-auto">
            <!-- <h2>welcome {{loggedIn.name}}</h2>
            <h6>Email: {{loggedIn.email}}</h6> -->

       </div>

       <div class="container d-flex-column  text-center  align-items-center justify-content-center ">
        <section class="text-center mb-4">
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

                <template slot="actions" scope="props">
                    <div class="table-button-container">
                        <button class="btn btn-default" @click="onEditItem(props.rowData)"><img src="../../static/images/pen-to-square-regular.svg" height="15px" width="15px"></button>&nbsp;&nbsp;
                        <button class="btn btn-danger" @click="onDeleteItem(props.rowData)"><img src="../../static/images/trash-can-regular.svg" height="15px" width="15px"></button>&nbsp;&nbsp;
                    </div>
                </template>

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
        loggedInUser(){
            return this.$store.getters.returnUser
        },
        tableData(){
            return this.$store.getters.returnCategoryValues
        }
    },
    mounted(){
        this.loggedInUser,
        this.tableData
    },

    methods: {

       onEditItem(item){
        console.log(item)
       },

       onDeleteItem(item){
        console.log(item)
       }
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