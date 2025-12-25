<template>
  <div class="container">
    <div class="blog_card">
      <h2 class="section-title title-level-2">最新文章</h2>
      <div class="card-grid">
        <CardComponent v-for="post in posts" :key="post.slug" :link="`/blog/${post.slug}`"
          :title="post.title">
          <template #content>
            <p>{{ post.description }}</p>
          </template>
        </CardComponent>
      </div>
    </div>
    <div class="blog_card">
      <h2 class="section-title title-level-2">热门文章</h2>
      <div class="card-grid">
        <CardComponent v-for="post in posts" :key="post.slug" :link="`/blog/${post.slug}`"
          :title="post.title">
          <template #content>
            <p>{{ post.description }}</p>
          </template>
        </CardComponent>
      </div>
    </div>

  </div>
</template>

<script lang='ts' setup>
import CardComponent from '@/components/CardComponent.vue';
import {posts} from '@/data/index.ts';

</script>

<style scoped>
.blog_card {
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--bg-main);
}

.section-title {
  margin-bottom: 0.5rem;
  text-align: center;
}

.section-subtitle {
  margin-bottom: 24px;
  text-align: center;
}
</style>
