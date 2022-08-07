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

        <div class="form-section d-flex-column justify-content-center align-items-center mx-auto  px-4 my-5 py-5">

            <section v-if="invalidForm" class=" col-12 mx-auto bg-danger text-center text-white">
                <p class="p-2">Email or password not provided</p>
            </section>

            <section v-if="logginError.status === 401" class=" col-12 mx-auto bg-danger text-center text-white">
                <p>{{logginError.message}}</p>
                <p>Please verify your credentials</p>
            </section>

            <section class="google-btn  d-flex align-items-center justify-content-center pt-4 ">
               <h4>Login</h4>
            </section>

            <div class="log-form-section d-flex align-items-center justify-content-center mx-auto pb-5">
                <form action="">
                    <div class="mb-3">
                        <label for="email">Email</label><br/>
                        <input v-model="logform.email" required type="email" name="email" placeholder="example@gmail.com">
                    </div>
                   
                    <div class="mb-3">
                        <label for="password">Password</label><br/>
                        <input v-model="logform.password" required type="password" name="password"  placeholder="...........">
                    </div>

                    <div class="mb-3">
                       <button @click.prevent="loginUser"  class="filled col-12" type="submit" >Login</button>
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
            invalidForm: false,
            logform:{
                email: '',
                password: ''
            }
        }
    },

    computed:{
        logginError(){
            return this.$store.getters.returnLoginError
        }
    },


    mounted(){

    },

    methods:{

        loginUser(){

            if(this.logform.email === '' || this.logform === ''){
                this.invalidForm = true

                setTimeout(function(){
                    this.invalidForm = false
                }, 2000)
                return false
            }else{
                this.$store.dispatch("loginUser", this.logform)
                this.logForm = {}
            }
        }
        
    }
}
</script>

<style>

</style>
