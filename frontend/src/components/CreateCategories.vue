<template>
  <div class="d-flex justify-content-center align-items-center mx-auto">
    <div class="form-region shadow-lg my-4 d-flex justify-content-center align-items-center  px-4">

            <div class="reg-form-section d-flex-column align-items-center justify-content-center mx-auto">
                <section v-if="(categoryCreated && control)" class="bg-success m-2 text-center text-white">
                    <p class="py-3">Category created successfully</p>
                </section>
                <section class="action-btn d-flex align-items-center justify-content-center text-center mb-3 pt-3 pb-2">
                    <h5>Add a new category</h5>
                </section>

                <form action="POST" enctype="multipart/form-data">
                    <div class="mb-3">
                        <label for="name">Name</label><br/>
                        <input v-model="catform.name" class="" type="text" name="name"  placeholder="John" >
                    </div>
                    <div class="mb-3">
                        <label for="profilepicture">Profile Picture</label><br/>
                        <input  type="file" @change="handleSelects" accept="image/*" name="images" class=" mulitple">
                    </div>
                    <div class="mb-3">
                        <label for="password">Description</label><br/>
                        <textarea v-model="catform.description" type="text" placeholder="Say something about the category" name="desciption" cols="47" rows="3"></textarea>
                    </div>

                    <div class="mb-3">
                       <button @click.prevent="createCategory"  class="submit-btn col-12" type="submit" > Create</button>
                    </div>
                </form>
            </div>
        </div>
  </div>
</template>

<script>
export default {

    data(){
        return{

            catform:{
               name:"",
               image: "",
               description: "",
            },
            control: true
        }
    },

    computed:{
        categoryCreated(){
            return this.$store.getters.returnCategoryCreated
        }
    },

    mounted(){

    },

    methods:{

         handleSelects(e) {
            const fileList = Array.prototype.slice.call(e.target.files);
            fileList.forEach(f => {

                if (!f.type.match("image.*")) {
                    return;
                }

                const reader = new FileReader();
                const self = this;
                reader.onload = function (e) {
                
                self.catform.image = e.target.result;
                }
                reader.readAsDataURL(f);
            });

        },

        createCategory(){
            this.catform.created_at = new Date().toISOString();
            this.$store.dispatch("create", this.catform)
            this.catform = {}
        },
        
    }
}
</script>

<style>

textarea{
    border: 1px solid #04126e;
    border-radius: 5px;
}
</style>
