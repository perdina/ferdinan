export default class DosenService {
  nidn: number
  nama: string

  constructor(nidn: number, nama: string) {
    this.nidn = nidn
    this.nama = nama
  }

  store(): boolean {
    try {
      localStorage.setItem('dosen', JSON.stringify({ nidn: this.nidn, nama: this.nama }))
      return true
    } catch (error) {
      return false
    }
  }
}
