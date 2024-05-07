export default class MahasiswaService {
  npm: number
  nama: string
  ipk: number

  constructor(npm: number, nama: string, ipk: number) {
    this.npm = npm
    this.nama = nama
    this.ipk = ipk
  }

  store(): boolean {
    try {
      localStorage.setItem(
        'mahasiswa',
        JSON.stringify({ npm: this.npm, nama: this.nama, ipk: this.ipk })
      )
      return true
    } catch (error) {
      return false
    }
  }
}
