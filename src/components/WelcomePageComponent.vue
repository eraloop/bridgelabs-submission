<template>

<main>
    <div class="container greeting justify-content-center align-items-center text-center mt-2 py-auto shadow-lg">
        <h4> Hello!! {{loggedInUser.name}} - Welcome</h4>
    </div>
    <div class="welcome-page container justify-content-center align-items-center  mx-auto my-5 py-5  shadow-lg ">

       <div class="container d-flex-column  text-center  align-items-center justify-content-center ">
        <section class="text-center mb-4">
            <h4>View and Manage Categories</h4>
        </section>

        <section class="px-4">
            <vuetable ref="vuetable"
                :fields="['image','name', 'description', 'actions']"
                data-path=""
                pagination-path=""
                :api-mode="false"
                :data="tableData.data"
            >
                <template slot="image" scope="props">
                    <div class="table-button-container">
                       <img :src="props.rowData.image" alt="" height="50px" width="50px" >
                    </div>
                </template>
                <template slot="actions" scope="props">
                    <div class="table-button-container">
                        <button class="btn btn-default" @click.prevent="updateItem(props.rowData)"><img src="../../static/images/pen-to-square-regular.svg" height="15px" width="15px"></button>&nbsp;&nbsp;
                        <button class="btn btn-danger" @click.prevent="onDeleteItem(props.rowData)"><img src="../../static/images/trash-can-regular.svg" height="15px" width="15px"></button>&nbsp;&nbsp;
                    </div>
                </template>

            </vuetable>
        </section>

        <section v-if="showModal" class=" modal text-center d-flex align-items-center justify-content-center mx-auto">

            <transition name="modal bg-secondary " >
                <div class="modal-mask shadow-lg p-5">
                <div class="modal-wrapper">
                    <div class="modal-container">

                    <div class="modal-header d-flex justify-content-between align-items-center ">
                        <slot name="header">
                            Edit item
                        </slot>

                        <button class=" modal-default-button outline bg-danger" @click.prevent="showModal = false">
                            <img src="../../static/images/close.svg" alt="" height="15px" width="15px">
                        </button>
                    </div>

                    <div class="modal-body ">
                        <slot name="body">
                            <form action="">
                                <div class="py-1">
                                    <label for="name">Name</label><br/>
                                    <input v-model="update.name" class="col-12" type="text" name="name"  :placeholder="update.name" >
                                </div>
                                <div class="py-1">
                                    <label for="profilepicture">Profile Picture</label><br/>
                                    <input  type="file" @change="handleSelects" accept="image/*" name="images" class=" mulitple col-12">
                                </div>
                                <div class="py-1">
                                    <label for="password">Description</label><br/>
                                    <textarea v-model="update.description" class="col-12" type="text" :placeholder="update.description" name="desciption" cols="47" rows="3"></textarea>
                                </div>

                                <div class="py-1">
                                    <button class="modal-default-button filled col-12" @click.prevent="onEditItem">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </slot>
                    </div>
                    </div>
                </div>
                </div>
            </transition>
            
        </section>
       </div>
    </div>
</main>
</template>

<script>
import Vuetable from 'vuetable-2'

export default {

    components: {
        Vuetable
    },

    data(){
        return{
            showModal: false,
            update:{
                name: '',
                description: '',
                image: ''
            }
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

        updateItem(item){
            this.showModal = true
            this.update.name = item.name,
            this.update.description = item.description,
            this.image = item.image
        }, 

        onEditItem(){
                console.log(this.update)
                // this.$store.dispatch("update", this.update)
                // this.showModal = false
        },

        onDeleteItem(item){
            console.log(item)
            // this.$store.dispatch("delete", item.id)
        },

        handleSelects(e) {
            const fileList = Array.prototype.slice.call(e.target.files);
            fileList.forEach(f => {

                if (!f.type.match("image.*")) {
                    return;
                }

                const reader = new FileReader();
                const self = this;
                reader.onload = function (e) {
                
                self.update.image = e.target.result;
                }
                reader.readAsDataURL(f);
            });

        },

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
.modal{
    height: 100vh;
    width: 100%;
}
.modal-mask {
    width: 60%;
    z-index:  999;
    border-radius: 20px;
    background: #eee;
}
.greeting{
    height: 5vh;
    width: 100%;
    border-radius: 20px;
}
</style>