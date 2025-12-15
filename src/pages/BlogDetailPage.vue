<template>
  <div class="blog-detail-container" v-if="article">
    <div class="article-header">
      <h1 class="article-title">{{ article.title }}</h1>
      <div class="article-meta">
        <span class="publish-date">{{ formatDate(article.date) }}</span>
      </div>
    </div>

    <div class="article-content">
      <p class="article-description">{{ article.description }}</p>
      <div class="article-body" v-html="article.content"></div>
    </div>

    <MessageComponent :article-id="articleId"></MessageComponent>

</div>
</template>

<script setup lang="ts">
import MessageComponent from '@/components/MessageComponent.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import articles from '@/data/articles';
import type { Article } from '@/data/articles';


const route = useRoute();
const articleId = Number(route.params.id);
const article = ref<Article | null>(null);
onMounted(() => {
  // 查找当前文章
  const allArticles = [...articles.latestArticles, ...articles.hotArticles, ...articles.myArticles];
  //console.log(allArticles);

  // 修复：将局部变量赋值改为直接更新响应式变量
  article.value = allArticles.find(item => item.id === articleId) || null;
  //console.log(article.value);


});
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

</script>

<style scoped>
.blog-detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--bg-main);
}

.article-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.article-meta {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

.article-description {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.article-body {
  line-height: 1.8;
  margin-bottom: 3rem;
}

.comments-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.comment-item {
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
}

.comment-author {
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.comment-date {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.comment-form {
  margin-top: 2rem;
}

.comment-input {
  width: 100%;
  min-height: 100px;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  margin-bottom: 1rem;
}

.submit-comment {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .blog-detail-container {
    padding: 1rem;
  }

  .article-title {
    font-size: 1.5rem;
  }
}
</style>
