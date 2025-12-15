<template>
  <div class="message-container">
    <!-- 留言列表 -->
    <div class="message-list">
      <div class="message-item" v-for="msg in currentArticleMessages()" :key="msg.id">
        <div class="user-info">
          <img :src="msg.avatar" alt="用户头像" class="user-avatar">
          <div class="user-details">
            <div class="username">{{ msg.username }}</div>
            <div class="post-time">{{ msg.time }}</div>
          </div>
        </div>
        <div class="message-content">{{ msg.content }}</div>
        <div class="message-actions">
          <div class="action-item" @click="handleComment(msg.id)">
            <i class="action-icon">
              <svg width="26" height="26" viewBox="0 0 48 48" fill=var(--text-primary)
                xmlns="http://www.w3.org/2000/svg">
                <path d="M44 6H4V36H13V41L23 36H44V6Z" fill=var(--text-primary) stroke="#333" stroke-width="4"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 19.5V22.5" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24 19.5V22.5" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M34 19.5V22.5" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </i>
            <span class="comment_count">{{ msg.commentCount }}</span>
          </div>
          <div class="action-item" @click="handleLike(msg.id)"
            :style="{ color: msg.isLiked ? 'var(--primary-color)' : 'var(--text-secondary)' }">
            <i class="action-icon">
              <svg width="26" height="26" viewBox="0 0 48 48" fill=var(--text-primary)
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M27.6002 18.5998V11.3998C27.6002 8.41743 25.1826 5.99977 22.2002 5.99977L15.0002 22.1998V41.9998H35.9162C37.7113 42.0201 39.2471 40.7147 39.5162 38.9398L42.0002 22.7398C42.1587 21.6955 41.8506 20.6343 41.1576 19.8373C40.4645 19.0403 39.4564 18.5878 38.4002 18.5998H27.6002Z"
                  stroke="#333" stroke-width="4" stroke-linejoin="round" />
                <path
                  d="M15 22.0001H10.194C8.08532 21.9628 6.2827 23.7095 6 25.7994V38.3994C6.2827 40.4894 8.08532 42.0367 10.194 41.9994H15V22.0001Z"
                  fill=var(--text-primary) stroke="#333" stroke-width="4" stroke-linejoin="round" />
              </svg>
            </i>
            <span class="like_count">{{ msg.likeCount }}</span>
          </div>
          <div class="action-item" @click="handleCollect(msg.id)"
            :style="{ color: msg.isCollected ? 'var(--primary-color)' : 'var(--text-secondary)' }">
            <i class="action-icon">
              <svg width="26" height="26" viewBox="0 0 48 48" fill=var(--text-primary)
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                  fill=var(--text-primary) stroke="#333" stroke-width="4" stroke-linejoin="round" />
              </svg>
            </i>
            <span class="collect_count">{{ msg.collectCount }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 评论输入区域 -->
    <div class="comment-section">
      <div class="comment-input">
        <textarea v-model="commentContent" placeholder="留下你的精彩评论吧!" class="comment-textarea"
          style="background-color: var(--bg-main);color: var(--text-primary);"></textarea>
        <div class="comment-actions">
          <button class="post-btn" @click="publishComment" :disabled="!commentContent.trim()">发布</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMessageStore } from '@/stores/messageStore/messageStore';
const props = defineProps<{
  // 可选的文章ID，用于特定文章的评论
  articleId?: number;
}>();
const messageStore = useMessageStore();
const commentContent = ref('');
const currentArticleId = ref<number>(Number(props.articleId) || 1)
// 发布留言（关联当前文章）
const publishComment = () => {
  try {
    // 调用addMessage时，传入文章ID作为第二个参数（必填）
    messageStore.addMessage(
      commentContent.value,
      currentArticleId.value, // 关联当前文章
    )
    commentContent.value = ''
    console.log('留言发布成功！')
  } catch (error) {
    if (error instanceof Error) {
      console.error(`发布失败：${error.message}`)
    }
  }
}
onMounted(() => {
  messageStore.initAllMessages();
})
// 获取当前文章的留言列表（通过getter筛选）
const currentArticleMessages = () => {
  return messageStore.getMessagesByArticleId(currentArticleId.value);

}
// 扩展：点赞功能（调用 Store 的 toggleLike 方法）
const handleLike = (messageId: number) => {
  messageStore.toggleLike(messageId);
};

// 扩展：收藏功能（调用 Store 的 toggleCollect 方法）
const handleCollect = (messageId: number) => {
  messageStore.toggleCollect(messageId);
};

// 扩展：更新评论数（调用 Store 的 updateCommentCount 方法）
const handleComment = (messageId: number) => {
  messageStore.updateCommentCount(messageId);
};
</script>

<style scoped>
.message-container {
  padding: 20px;
  background-color: var(--bg-main);
  border-radius: 8px;
  min-height: 200px;
}

.message-list {
  margin-top: 24px;
  margin-bottom: 24px;
}

.message-item {
  background-color: var(--bg-card);
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
}

.user-details {
  text-align: left;
}

.username {
  font-weight: bold;
  margin-bottom: 4px;
}

.post-time {
  font-size: 12px;
  color: #999;
}

.message-content {
  text-align: left;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;
  line-height: 1.6;
}

.message-actions {
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
  justify-content: flex-start;
}

.action-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--font-size-2, 14px);
  color: var(--text-secondary, #666);
  cursor: pointer;
  transition: color 0.3s;
}

.action-item:hover {
  color: var(--primary-color, #42b983);
}

.action-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.comment-section {
  background-color: var(--bg-card);
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.comment-textarea {
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  resize: vertical;
  min-height: 80px;
  margin-bottom: 12px;
  font-size: 14px;
  box-sizing: border-box;
  padding: 12px;
  outline: none;
  transition: border-color 0.3s;
}

.comment-textarea:focus {
  border-color: var(--primary-color, #42b983);
}

.comment-actions {
  text-align: right;
}

.post-btn {
  padding: 8px 20px;
  border: 2px solid var(--primary-color, #42b983);
  border-radius: 4px;
  background-color: transparent;
  color: var(--primary-color, #42b983);
  font-size: var(--font-size-2, 14px);
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  transition: all 0.3s;
}

.post-btn:disabled {
  border-color: #ccc;
  color: #ccc;
  cursor: not-allowed;
  background-color: #f5f5f5;
}

.post-btn:not(:disabled):hover {
  background-color: var(--primary-color, #42b983);
  color: white;
}
</style>
