<template>
  <nav class="navbar sticky-top flex-md-nowrap p-0 shadow">
    <p class="navbar-brand col-md-3 col-lg-2 mr-0 px-3">Aplikasi Penjadwalan Kuliah</p>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'header-component'
})
</script>

<style>
.navbar {
  background-color: white;
}
.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.2rem;
  font-size: 1rem;
  color: black;
}
</style>
