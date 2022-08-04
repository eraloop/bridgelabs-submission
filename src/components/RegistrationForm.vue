<template>
  <div class="d-flex justify-content-center align-items-center mx-auto">
    <div class="form-region shadow-lg my-4">
        <div class="info-section d-flex-column align-items-center justify-content-center px-5 py-5">
            <h1 class="pt-5">BridgeLabs Onboarding Task</h1>
            <h5>Login, Register, Logout</h5>
            <p>This task is to create a working registration, login aand logout flow.</p>
        </div>

        <div class="form-section d-flex-column justify-content-center align-items-center  px-4">
            <!-- <section class="google-btn d-flex align-items-center justify-content-center pt-4 pb-2">
                <button class="d-flex align-items-center justify-content-center text-center px-5 ">
                    <img src="../../static/images/google-brands.svg" alt=""  height="20px" width="20px">
                    <p class="">Join with Google</p>
                </button>
            </section> -->

            <section class="action-btn d-flex align-items-center justify-content-center text-center pt-3 pb-2">
                <button @click.prevent="showReg" class="register px-4">Register</button>
                <section class="d-flex align-items-center justify-content-center text-center px-5 "> <hr> <p>Or</p> <hr> </section>
                <button @click.prevent="showLog" class="login px-4">Login</button>
            </section>

            <div v-if="this.switch" class="reg-form-section d-flex align-items-center justify-content-center mx-auto">
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
                       <button @click.prevent="registerUser"  class="submit-btn col-12" type="submit" > Register</button>
                    </div>
                </form>
            </div>

            <div v-else class="log-form-section d-flex align-items-center justify-content-center mx-auto py-5">
                <form action="">
                    <div class="py-1">
                        <label for="email">Email</label><br/>
                        <input v-model="logform.email" required type="email" name="email" placeholder="example@gmail.com">
                    </div>
                   
                    <div class="py-1">
                        <label for="password">Password</label><br/>
                        <input v-model="logform.password" required type="password" name="password"  placeholder="...........">
                    </div>

                    <div class="py-1">
                       <button @click.prevent="loginUser"  class="submit-btn col-12" type="submit" >Login</button>
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
            register: 'true',
            login: 'false',

            switch : true,
            regform:{
                fn: '',
                ln: '',
                email: '',
                phone: '',
                pic: '',
                password: ''
            },

            logform:{
                email: '',
                password: ''
            }
        }
    },

    mounted(){

    },

    methods:{

        showReg(){
            // this.register = true
            // this.login = false
            this.switch = true
        },

        showLog(){
            // this.register = false
            // this.login = true
            this.switch = false
        },

        //  changeForm(){
        //     this.register = !this.register
        //     this.login = !this.login

        //     console.log(this.register, this.login)
        //  },

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

        loginUser(){
            this.$store.dispatch("loginUser", this.logform)
            this.logForm = {}
        }
        
    }
}
</script>

<style>

.form-region{
    height: 85vh;
    width: 90%;
    border-radius: 20px;
    border: none;
    outline: none;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-gap: 1em;

}

button{
    border: none;
    outline: none;
    border-radius: 20px;
    padding: 5px;

}

button.register{
    background: #04126e;
    border-radius: 5px;
    padding: 7px;
    color: #fff;
}

button.login{
    border-radius: 5px;
    padding: 7px;
    color: #04126e;
    /* border: 1px solid #04126e; */
}

button.submit-btn{
    background: #04126e;
    border-radius: 5px;
    padding: 7px;
    color: #fff;
}

button.submit-btn:focus{
    outline: none;
}

.info-section{
    background: #ddd;
    border-radius: 20px 0px 0px 20px;
}

input{
    border: 1px solid #04126e;
    color: #04126e;
    outline: none;
    border-radius: 5px;
    width: 450px;
    padding: 7px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>
