<template>
  <div class="main-content">
    <h4>Entry Data Ruangan</h4>

    <div class="form-group">
      <label for="kodeRuanganInput">Kode Ruangan</label>
      <input type="number" class="form-control" id="kodeRuanganInput" v-model="form.code_ruangan" />
    </div>
    <div class="form-group">
      <label for="namaInput">Nama</label>
      <input type="text" class="form-control" id="namaInput" v-model="form.nama" />
    </div>
    <button @click="onSubmitHandler" class="btn btn-primary">Submit</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Ruangan from '../types/RuanganInterface.ts'
import RuanganService from '../services/RuanganService.ts'

export default defineComponent({
  name: 'ruangan-view',
  data() {
    return {
      form: {
        code_ruangan: 0 as number,
        nama: '' as string
      }
    }
  },
  methods: {
    onSubmitHandler() {
      if (!this.form.code_ruangan && this.form.nama.length < 1) {
        alert('Field Kode Ruangan dan Nama belum di isi')
        return
      }
      if (!this.form.code_ruangan) {
        alert('Field Kode Ruangan belum di isi')
        return
      }
      if (this.form.nama.length < 1) {
        alert('Field Nama belum di isi')
        return
      }
      const ruangan: Ruangan = new RuanganService(this.form.code_ruangan, this.form.nama)
      if (ruangan.store()) {
        alert(`Data Ruangan ${this.form.nama} berhasil disimpan`)
        return
      }
      alert(`Data Ruangan ${this.form.nama} gagal disimpan`)
    }
  }
})
</script>
