<template>
  <div class="">
    <NavbarComponent/>
    <CreateCategories/>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import CreateCategories from '../components/CreateCategories.vue';
export default {
    components: { NavbarComponent, CreateCategories }
}
</script>

<style>

</style>