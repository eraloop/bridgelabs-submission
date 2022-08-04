<template>
  <div class="d-flex justify-content-center align-items-center mx-auto">
    <div class="form-region shadow-lg my-4 d-flex justify-content-center align-items-center  px-4">

            <div class="reg-form-section d-flex-column align-items-center justify-content-center mx-auto">

                <section class="action-btn d-flex align-items-center justify-content-center text-center pt-3 pb-2">
                    <h5>Add a new category</h5>
                </section>

                <form action="">
                    <div class="py-1">
                        <label for="name">Name</label><br/>
                        <input v-model="catform.name" class="" type="text" name="name"  placeholder="John" >
                    </div>
                    <div class="py-1">
                        <label for="profilepicture">Profile Picture</label><br/>
                        <input  type="file" @change="handleSelects" accept="image/*" name="images" class=" mulitple">
                    </div>
                    <div class="py-1">
                        <label for="password">Description</label><br/>
                        <textarea v-model="catform.desciption" type="text" placeholder="Say something about the category" name="desciption" cols="47" rows="3"></textarea>
                    </div>

                    <div class="py-1">
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
            //    created_at: new DateTime.now()
            },
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
            this.catform.created_at = new Date('YYYY-MM-DDTHH:mm:ss.sssZ');
            console.log(this.catform.created_at)
            console.log(this.catform)
            // this.$store.dispatch("createCategory", this.catform)
            // this.regform = {}
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
