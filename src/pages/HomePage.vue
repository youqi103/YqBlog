<template>
  <div class="container">
    <div class="homepage-section">
      <h2 class="section-title title-level-2">最新文章</h2>
      <p class="section-subtitle title-level-3">2025-03-15</p>
      <div class="card-grid">
        <CardComponent
          link="https://www.baidu.com"
          title="云原生的下半场：AI Native 平台工程时代已经到来"
          target="_blank"
        >
          <template #content>
            回顾云原生十年演进，展望 AI Native 平台工程的技术分层与关键变革，解析 KubeCon NA 2025
            行业信号。
          </template>
        </CardComponent>
        <CardComponent
          link="https://www.baidu.com"
          title="从 YAML 到 Markdown：规范驱动开发的演化与 AI 原生范式的崛起"
          target="_blank"
        >
          <template #content>
            探讨 YAML 作为配置文件的局限性，以及如何通过 Markdown 实现更灵活、更易维护的配置。
          </template>
        </CardComponent>
      </div>
    </div>
    <div class="homepage-section">
      <h2 class="section-title title-level-2">最新文章</h2>
      <p class="section-subtitle title-level-3">2025-03-15</p>
      <div class="card-grid">
        <CardComponent
          link="https://www.baidu.com"
          title="探索 AI 资源库更新，收录超 500 个项目，新增评分系统与展示优化，助您高效筛选优质 AI 项目。"
          target="_blank"
        >
          <template #content>
            探索 AI 资源库更新，收录超 500 个项目，新增评分系统与展示优化，助您高效筛选优质 AI
            项目。
          </template>
        </CardComponent>
        <CardComponent
          link="https://www.baidu.com"
          title="以大模型为中心重塑应用架构，通过推理、RAG 与智能体协作构建 AI 原生的软件工程体系。"
          target="_blank"
        >
          <template #content>
            探讨如何利用大模型驱动应用架构，实现推理、RAG 与智能体协作，构建 AI 原生的软件工程体系。
          </template>
        </CardComponent>
         <CardComponent
          link="https://www.baidu.com"
          title="以大模型为中心重塑应用架构，通过推理、RAG 与智能体协作构建 AI 原生的软件工程体系。"
          target="_blank"
        >
          <template #content>
            探讨如何利用大模型驱动应用架构，实现推理、RAG 与智能体协作，构建 AI 原生的软件工程体系。
          </template>
        </CardComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardComponent from '@/components/CardComponent.vue'
</script>

<style scoped>
.container {
  max-width: 100vw;
  margin: 0 auto;
}

.homepage-section {
  width: 100%;
  max-width: 80vw;
  margin:20px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--bg-main);
  box-shadow: 18px -3px 9px 0px rgba(0,0,0,0.1);
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
</style>
