import matter from 'gray-matter'

// 定义博客文章的类型接口
export interface Post {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  content: string;
  slug: string;
}

// 读取所有 md 文件
const modules = import.meta.glob<{ default: string }>('./*.md', {
  as: 'raw',
  eager: true,
});

// 辅助函数：从 Markdown 正文提取第一个标题（# 一级标题）
const extractTitleFromContent = (content: string): string => {
  const titleMatch = content.match(/^#\s+(.+)$/m);
  return titleMatch ? titleMatch[1]?.trim() || '未命名文章' : '未命名文章';
};

export const posts: Post[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = matter(raw);
    const slug = path.replace('./', '').replace('.md', '');
     //优先级：Frontmatter 的 title > 正文一级标题 > 兜底文字
    const title = data.title || extractTitleFromContent(content) || `未命名-${slug}`;
    return {
      ...data,
      title,
      date: data.date || new Date().toLocaleString(),
      content,
      slug: path.replace('./', '').replace('.md', ''),
    } as Post;
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
