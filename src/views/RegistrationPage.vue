<template>
  <div class="">
    <NavbarComponent/>
    <RegistrationForm/>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import RegistrationForm from '../components/RegistrationForm.vue';
export default {
    components: { NavbarComponent, RegistrationForm }
}
</script>

<style>

</style>