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

        <div class="form-section d-flex-column justify-content-center align-items-center  px-4 my-5 py-5">
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
