import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useThemeStore } from '@/stores/theme';
import '@/styles/theme.css'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Antd)
// 初始化主题
const themeStore = useThemeStore()
themeStore.applyTheme()
app.mount('#app')
