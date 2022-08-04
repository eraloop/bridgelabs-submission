<template>
  <div class="d-flex-column justify-content-center align-items-center">
    <NavbarComponent/>
    <WelcomePageComponent/>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import WelcomePageComponent from '../components/WelcomePageComponent.vue';
export default {
    components: { NavbarComponent, WelcomePageComponent }
}
</script>

<style>

</style>