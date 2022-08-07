<template>
  <div class="d-flex justify-content-center align-items-center mx-auto">
    <div class="form-region shadow-lg my-4">
        <div class="info-section container d-flex-column align-items-center justify-content-center px-5 py-5">
            <div class="my-5">
                <h1 class="pt-5">BridgeLabs Onboarding Task</h1>
                <h5>FrontEnd - login, register, logout, file upload, google oauth</h5>
                <p>This task is to create a working registration, login aand logout flow.</p>
            </div>
        </div>

        <div class="form-section d-flex-column justify-content-center align-items-center  px-4">
            <section class="google-btn  d-flex align-items-center justify-content-center pt-4 pb-2">
                <button @click.prevent="googleOAuth" class="d-flex align-items-center outline justify-content-center text-center px-5 py-2">
                    <span><img src="../../static/images/google-brands.svg" alt=""  height="20px" width="20px"></span>
                    <span class="px-3 text-primary">Join with Google</span>
                </button>
            </section>

            <div  class="reg-form-section d-flex align-items-center justify-content-center mx-auto">
                <form action="">
                    <div class="py-1">
                        <label for="firstname">First Name</label><br/>
                        <input v-model="regform.fn" class="" type="text" name="firstname"  placeholder="John" >
                    </div>
                    <div class="py-1">
                        <label for="lastname">Last Name</label><br/>
                        <input v-model="regform.ln" type="text" name="lastname" placeholder="Doe">
                    </div>
                    <div class="py-1">
                        <label for="email">Email</label><br/>
                        <input required  v-model="regform.email" type="email" name="email" value="" placeholder="example@gmail.com">
                    </div>
                    <div class="py-1">
                        <label for="phone">Phone</label><br/>
                        <input v-model="regform.phone" type="number" name="phone" placeholder="673-473-533">
                    </div>
                    <div class="py-1">
                        <label for="profilepicture">Profile Picture</label><br/>
                        <input  required type="file" @change="handleSelects" accept="image/*" name="images" class=" mulitple">
                    </div>
                    <div class="py-1">
                        <label for="password">Password</label><br/>
                        <input v-model="regform.password" required type="password" name="password"  placeholder="...........">
                    </div>

                    <div class="py-1">
                       <button @click.prevent="registerUser"  class="filled col-12" type="submit" > Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

    data(){
        return{
            regform:{
                fn: '',
                ln: '',
                email: '',
                phone: '',
                pic: '',
                password: ''
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
                
                self.regform.pic = e.target.result;
                }
                reader.readAsDataURL(f);
            });

        },

        registerUser(){
            console.log(this.regform)
            this.$store.dispatch("registerUser", this.regform)
            this.regform = {}
        },


        
    }
}
</script>

<style>

</style>
