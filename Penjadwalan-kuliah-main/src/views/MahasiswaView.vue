<template>
  <div class="main-content">
    <h4>Entry Data Mahasiswa</h4>

    <div class="form-group">
      <label for="npmInput">NPM</label>
      <input type="number" class="form-control" id="npmInput" v-model="form.npm" />
    </div>
    <div class="form-group">
      <label for="namaInput">Nama</label>
      <input type="text" class="form-control" id="namaInput" v-model="form.nama" />
    </div>
    <div class="form-group">
      <label for="ipkInput">IPK</label>
      <input type="number" class="form-control" id="ipkInput" v-model="form.ipk" />
    </div>
    <button @click="onSubmitHandler" type="submit" class="btn btn-primary">Submit</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Mahasiswa from '../types/MahasiswaInterface.ts'
import MahasiswaService from '../services/MahasiswaService.ts'

export default defineComponent({
  name: 'mahasiswa-view',
  data() {
    return {
      form: {
        npm: 0 as number,
        nama: '' as string,
        ipk: 0 as number
      }
    }
  },
  methods: {
    onSubmitHandler() {
      if (!this.form.npm && !this.form.nama && !this.form.ipk) {
        alert('Field NPM, Nama dan IPK belum di isi')
        return
      }
      if (!this.form.npm) {
        alert('Field NPM belum di isi')
        return
      }
      if (this.form.nama.length < 1) {
        alert('Field Nama belum di isi')
        return
      }
      if (this.form.ipk >= 4) {
        alert('IPK harus di antara 0 sampai 4')
        return
      }
      const mahasiswa: Mahasiswa = new MahasiswaService(
        this.form.npm,
        this.form.nama,
        this.form.ipk
      )
      if (mahasiswa.store()) {
        alert(`Data Mahasiswa ${this.form.nama} berhasil disimpan`)
        return
      }
      alert(`Data Mahasiswa ${this.form.nama} gagal disimpan`)
    }
  }
})
</script>
