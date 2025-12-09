<template>
  <div class="Header">
    <nav>
      <ul>
        <li><a href="#" class="logo">忧戚的博客</a></li>
        <li class="hideOnMobile"><a href="/">首页</a></li>
        <li class="hideOnMobile"><a href="/about">关于我</a></li>
        <li class="hideOnMobile"><a href="/blog">文章列表</a></li>
        <li @click="toggleTheme" class="theme-button">
            <img v-if="theme === 'light' " src="@/statics/images/moon.svg" alt="浅色模式">
            <img v-else src="@/statics/images/sun.svg" alt="深色模式">
        </li>
        <li class="menu-button" @click="showSidebar">
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px"
              fill=var(--text-primary)>
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg></a>
        </li>
      </ul>
      <ul class="sidebar" :class="{ 'active': isShowBar }" ref="sidebarRef">
        <li @click="hideSidebar">
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px"
              fill=var(--text-primary)>
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg></a>
        </li>
        <li><a href="/">首页</a></li>
        <li><a href="/about">关于我</a></li>
        <li><a href="/blog">文章列表</a></li>
      </ul>
    </nav>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { useThemeStore } from '@/stores/theme';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);
const { toggleTheme } = themeStore;



const isShowBar = ref(false);
const showSidebar = (): void => {
  isShowBar.value = true;
}
const hideSidebar = (): void => {
  isShowBar.value = false;
}
</script>

<style scoped>
.theme-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
}
nav {
  box-shadow: var(--shadow);
  background-image: var(--nav-bg-imge);
  backdrop-filter: blur(10px);
}

nav ul {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

nav ul li {
  height: 50px;
}

nav a {
  height: 100%;
  text-decoration: none;
  padding: 0 30px;
  display: flex;
  align-items: center;
  color: var(--text-primary);
}

nav li:not(:first-child) a:hover,.theme-button:hover{
  background-color: #66a6ff;
}

nav li:first-child {
  margin-right: auto;
  font-weight: 700;
}

.sidebar {
  position: fixed;
  top: 0;
  right: -100%;
  width: 250px;
  height: 100vh;
  background-color: var(--sidebar-color);
  backdrop-filter: blur(10px);
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  transition: right 0.65s ease-out;
}

.sidebar.active {
  right: 0;
}

.sidebar li {
  width: 100%;
}

.sidebar li a {
  width: 100%;
}

.menu-button {
  display: none;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

@media screen and (max-width:800px) {
  .hideOnMobile {
    display: none;
  }

  .menu-button {
    display: block;
  }

  .logo {
    font-size: 1.2rem;
  }
}

@media screen and (max-width:400px) {
  .sidebar {
    width: 100%;
    right: -100%;
  }

  .sidebar.active {
    right: 0;
    visibility: visible;
  }

  .logo {
    font-size: 0.9rem;
  }
}
</style>
