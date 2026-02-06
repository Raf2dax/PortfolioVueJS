export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    users: [] as Array<{ username: string; password: string }>
  }),
  getters: {
    isLoggedIn: (state) => state.username.trim().length > 0
  },
  actions: {
    init() {
      // Charger tout au démarrage
      if (!process.client) return
      
      const rawUsers = localStorage.getItem('users')
      this.users = rawUsers ? JSON.parse(rawUsers) : []
      
      const currentUser = localStorage.getItem('currentUser')
      this.username = currentUser || ''
    },
    saveUsers() {
      if (!process.client) return
      localStorage.setItem('users', JSON.stringify(this.users))
    },
    saveCurrentUser() {
      if (!process.client) return
      if (this.username) {
        localStorage.setItem('currentUser', this.username)
      } else {
        localStorage.removeItem('currentUser')
      }
    },
    login(name: string, password: string) {
      const match = this.users.find(
        (u) => u.username === name && u.password === password
      )
      if (!match) {
        return { ok: false, message: 'Identifiants invalides.' }
      }
      this.username = name
      this.saveCurrentUser()
      return { ok: true, message: 'Connexion reussie.' }
    },
    register(name: string, password: string) {
      const exists = this.users.some((u) => u.username === name)
      if (exists) {
        return { ok: false, message: 'Utilisateur deja existant.' }
      }
      this.users.push({ username: name, password })
      this.saveUsers()
      this.username = name
      this.saveCurrentUser()
      return { ok: true, message: 'Compte cree. Vous etes connecte.' }
    },
    loginOrRegister(name: string, password: string) {
      const hasUser = this.users.some((u) => u.username === name)
      if (!hasUser) {
        return this.register(name, password)
      }
      return this.login(name, password)
    },
    logout() {
      this.username = ''
      this.saveCurrentUser()
    }
  }
})