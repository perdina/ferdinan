export default class RuanganService {
  code_ruangan: number
  nama: string

  constructor(code_ruangan: number, nama: string) {
    this.code_ruangan = code_ruangan
    this.nama = nama
  }

  store(): boolean {
    try {
      localStorage.setItem(
        'ruangan',
        JSON.stringify({ code_ruangan: this.code_ruangan, nama: this.nama })
      )
      return true
    } catch (error) {
      return false
    }
  }
}
