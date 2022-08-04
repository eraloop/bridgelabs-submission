<template>
  <div class="d-flex justify-content-center align-items-center mx-auto">
    <div class="form-region shadow-lg my-4">
        <div class="info-section d-flex-column align-items-center justify-content-center px-5 py-5">
            <h1 class="pt-5">BridgeLabs Onboarding Task</h1>
            <h5>Login, Register, Logout</h5>
            <p>This task is to create a working registration, login aand logout flow.</p>
        </div>

        <div class="form-section d-flex-column justify-content-center align-items-center  px-4">
            <section class="google-btn d-flex align-items-center justify-content-center pt-4 pb-2">
                <button class="d-flex align-items-center justify-content-center text-center px-5 ">
                    <img src="../../static/images/google-brands.svg" alt=""  height="20px" width="20px">
                    <p class="">Join with Google</p>
                </button>
            </section>
            <!-- <section class="action-btn d-flex align-items-center justify-content-center text-center pt-3 pb-2">
                <button @click.prevent="showReg" class="register px-4">Register</button>
                <section class="d-flex align-items-center justify-content-center text-center px-5 "> <hr> <p>Or</p> <hr> </section>
                <button @click.prevent="showLog" class="login px-4">Login</button>
            </section> -->

            <div class="log-form-section d-flex align-items-center justify-content-center mx-auto py-5">
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

            logform:{
                email: '',
                password: ''
            }
        }
    },

    mounted(){

    },

    methods:{

        loginUser(){
            this.$store.dispatch("loginUser", this.logform)
            this.logForm = {}
        }
        
    }
}
</script>

<style>

</style>
