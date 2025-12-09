export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
}

export const articles: Article[] = [
  {
    id: '1',
    title: '云原生的下半场：AI Native 平台工程时代已经到来',
    description: '回顾云原生十年演进，展望 AI Native 平台工程的技术分层与关键变革',
    content: '# 完整文章内容\n\n这是第一篇文章的详细内容...',
    date: '2025-06-15'
  },
  {
    id: '2',
    title: '从 YAML 到 Markdown：规范驱动开发的演化',
    description: '探讨 YAML 作为配置文件的局限性，以及如何通过 Markdown 实现更灵活的配置',
    content: '# 完整文章内容\n\n这是第二篇文章的详细内容...',
    date: '2025-06-20'
  }
];
