<template>
  <div class="main-content">
    <h3>Selamat Datamg Di Aplikasi</h3>
    <h4>Aplikasi ini dibuat oleh</h4>
    <p>NPM: 40622100083</p>
    <p>Nama: Ferdinan Yudoyono S</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'home-view'
})
</script>

<style>
.main-content {
  border-style: solid;
  padding: 12px;
  border-width: 2px;
}
.main-content h3 {
  line-height: 1.5rem;
}
.main-content p {
  line-height: 0.75rem;
  font-weight: 700;
}
</style>
