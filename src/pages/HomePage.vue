<template>
  <div class="container">
    <div class="homepage-section">
      <h2 class="section-title title-level-2">最新文章</h2>
      <div class="card-grid">
        <CardComponent v-for="post in posts" :key="post.slug" :link="`/blog/${post.slug}`"
          :title="post.title">
          <template #content>
            <p>{{ post.description }}</p>
          </template>
        </CardComponent>
      </div>
      <div class="view-more-container">
        <router-link to="/blog" class="view-more-button">查看更多</router-link>
      </div>
    </div>
    <div class="homepage-section">
      <h2 class="section-title title-level-2">热门文章</h2>
      <div class="card-grid">
        <CardComponent v-for="post in posts" :key="post.slug" :link="`/blog/${post.slug}`"
          :title="post.title">
          <template #content>
            <p>{{ post.description }}</p>
          </template>
        </CardComponent>
      </div>
      <div class="view-more-container">
        <router-link to="/blog" class="view-more-button">查看更多</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardComponent from '@/components/CardComponent.vue'
import { posts } from '@/data/index'
console.log(posts);

</script>

<style scoped>
.container {
  max-width: 100vw;
  margin: 0 auto;
}

.homepage-section {
  width: 100%;
  max-width: 80vw;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--bg-main);
  box-shadow: 18px -3px 9px 0px rgba(0, 0, 0, 0.1);
}

/* 基础标题样式，使用em单位 */
.section-title {
  margin-bottom: 0.5rem;
  text-align: center;
}

.section-subtitle {
  margin-bottom: 24px;
  text-align: center;
}

.view-more-container {
  text-align: center;
  margin-top: 20px;
}

.view-more-button {
  display: inline-block;
  padding: 8px 16px;
  background-color: var(--primary-light);
  color: white;
  font-size: var(--font-size-medium);
  border-radius: 20px;
  text-decoration: none;
}

.view-more-button:hover {
  background-color: var(--primary-color);
}
</style>
