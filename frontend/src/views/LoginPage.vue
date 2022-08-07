<template>
  <div class="">
    <NavbarComponent/>
    <LoginForm/>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import LoginForm from '../components/LoginForm.vue';
export default {
    components: { NavbarComponent, LoginForm }
}
</script>

<style>

</style>