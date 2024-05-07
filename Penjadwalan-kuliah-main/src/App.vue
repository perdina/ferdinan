<template>
  <header-component />
  <div class="container-fluid">
    <div class="row">
      <sidebar-component />
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-md-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue'

export default defineComponent({
  name: 'App',
  components: { HeaderComponent, SidebarComponent }
})
</script>

<style>
body {
  font-size: 0.875rem;
}
</style>
