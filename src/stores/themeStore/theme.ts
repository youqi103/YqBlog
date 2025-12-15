import { defineStore } from 'pinia'
 type Theme = 'light' | 'dark'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme:
      (localStorage.getItem('theme') as Theme) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  }),
  actions: {
    // 切换主题
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      this.saveThemeToLocalStorage()
      this.applyTheme()
    },
    // 手动设置主题
    setTheme(newTheme: Theme) {
      this.theme = newTheme
      this.saveThemeToLocalStorage()
      this.applyTheme()
    },
    // 保存主题到本地存储（持久化）
    saveThemeToLocalStorage() {
      localStorage.setItem('theme', this.theme)
    },
    // 应用主题到页面
    applyTheme() {
      document.body.setAttribute('data-theme', this.theme) 
      document.documentElement.setAttribute('data-theme', this.theme)
    },
  },
})
