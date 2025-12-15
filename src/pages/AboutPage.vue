<template>
  <div class="container">
    <div class="left-column">
      <div class="aboutme">
        <div class="avatar">
          <img src="@/statics/images/avatar.jpg" alt="头像" />
        </div>
        <div class="name">忧戚</div>
        <div class="description">一个前端开发人员</div>

        <div class="skills">
          <h4>技术栈</h4>
          <div class="skill-tags">
            <span class="tag">Vue</span>
            <span class="tag">TypeScript</span>
            <span class="tag">JavaScript</span>
            <span class="tag">CSS</span>
          </div>
        </div>
        <div class="social-links">
          <a href="#" class="social-icon">
            <svg width="26" height="26" viewBox="0 0 48 48" fill=var(--text-primary) xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                fill=var(--text-primary) />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M19.1833 45.4716C18.9898 45.2219 18.9898 42.9973 19.1833 38.798C17.1114 38.8696 15.8024 38.7258 15.2563 38.3667C14.437 37.828 13.6169 36.1667 12.8891 34.9959C12.1614 33.8251 10.5463 33.64 9.89405 33.3783C9.24182 33.1165 9.07809 32.0496 11.6913 32.8565C14.3044 33.6634 14.4319 35.8607 15.2563 36.3745C16.0806 36.8883 18.0515 36.6635 18.9448 36.2519C19.8382 35.8403 19.7724 34.3078 19.9317 33.7007C20.1331 33.134 19.4233 33.0083 19.4077 33.0037C18.5355 33.0037 13.9539 32.0073 12.6955 27.5706C11.437 23.134 13.0581 20.2341 13.9229 18.9875C14.4995 18.1564 14.4485 16.3852 13.7699 13.6737C16.2335 13.3589 18.1347 14.1343 19.4734 16.0001C19.4747 16.0108 21.2285 14.9572 24.0003 14.9572C26.772 14.9572 27.7553 15.8154 28.5142 16.0001C29.2731 16.1848 29.88 12.7341 34.5668 13.6737C33.5883 15.5969 32.7689 18.0001 33.3943 18.9875C34.0198 19.9749 36.4745 23.1147 34.9666 27.5706C33.9614 30.5413 31.9853 32.3523 29.0384 33.0037C28.7005 33.1115 28.5315 33.2855 28.5315 33.5255C28.5315 33.8856 28.9884 33.9249 29.6465 35.6117C30.0853 36.7362 30.117 39.948 29.7416 45.247C28.7906 45.4891 28.0508 45.6516 27.5221 45.7347C26.5847 45.882 25.5669 45.9646 24.5669 45.9965C23.5669 46.0284 23.2196 46.0248 21.837 45.8961C20.9154 45.8103 20.0308 45.6688 19.1833 45.4716Z"
                fill=var(--text-primary) />
            </svg>
          </a>
          <a href="#" class="social-icon">
            <svg width="26" height="26" viewBox="0 0 48 48" fill=var(--text-primary) xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M36.9974 21.7112C36.8434 13.0079 29.7401 6 21 6C12.1634 6 5 13.1634 5 22C5 26.1701 6.59531 29.9676 9.20892 32.8154L8.01043 40.0257L15.125 36.9699C18.2597 38.0122 21.218 38.2728 24 37.7516"
                fill=var(--text-primary) />
              <path
                d="M36.9974 21.7112C36.8434 13.0079 29.7401 6 21 6C12.1634 6 5 13.1634 5 22C5 26.1701 6.59531 29.9676 9.20892 32.8154L8.01043 40.0257L15.125 36.9699C18.2597 38.0122 21.218 38.2728 24 37.7516"
                stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M15.125 20.4667C16.3676 20.4667 17.375 19.4519 17.375 18.2C17.375 16.9482 16.3676 15.9333 15.125 15.9333C13.8824 15.9333 12.875 16.9482 12.875 18.2C12.875 19.4519 13.8824 20.4667 15.125 20.4667Z"
                fill=var(--text-primary) />
              <path
                d="M24.125 20.4667C25.3676 20.4667 26.375 19.4519 26.375 18.2C26.375 16.9482 25.3676 15.9333 24.125 15.9333C22.8824 15.9333 21.875 16.9482 21.875 18.2C21.875 19.4519 22.8824 20.4667 24.125 20.4667Z"
                fill=var(--text-primary) />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M38.7618 39.9293C37.0135 41.2302 34.8467 42 32.5 42C26.701 42 22 37.299 22 31.5C22 25.701 26.701 21 32.5 21C38.299 21 43 25.701 43 31.5C43 33.0997 42.6423 34.6159 42.0024 35.9728"
                fill=var(--text-primary) />
              <path
                d="M38.7618 39.9293C37.0135 41.2302 34.8467 42 32.5 42C26.701 42 22 37.299 22 31.5C22 25.701 26.701 21 32.5 21C38.299 21 43 25.701 43 31.5C43 33.0997 42.6423 34.6159 42.0024 35.9728"
                stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.0024 35.9728L43 42L38.7618 39.9293"
                fill=var(--text-primary) />
              <path d="M42.0024 35.9728L43 42L38.7618 39.9293" stroke="#333" stroke-width="4" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M35.6875 30.7999C34.7555 30.7999 34 30.0388 34 29.0999C34 28.161 34.7555 27.3999 35.6875 27.3999C36.6195 27.3999 37.375 28.161 37.375 29.0999C37.375 30.0388 36.6195 30.7999 35.6875 30.7999Z"
                fill=var(--text-primary) />
              <path
                d="M28.9375 30.7999C28.0055 30.7999 27.25 30.0388 27.25 29.0999C27.25 28.161 28.0055 27.3999 28.9375 27.3999C29.8695 27.3999 30.625 28.161 30.625 29.0999C30.625 30.0388 29.8695 30.7999 28.9375 30.7999Z"
                fill=var(--text-primary) />
            </svg>
          </a>
          <a href="#" class="social-icon">
            <svg width="26" height="26" viewBox="0 0 48 48" fill=var(--text-primary) xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.7927 44.5178C20.1344 44.5178 16.7762 43.2933 14.6142 41.4646C13.5161 41.7927 12.1115 42.3204 11.2254 42.9751C10.4664 43.535 10.5613 44.1059 10.6979 44.3362C11.298 45.3491 20.9938 44.9831 23.7927 44.6678V44.5178ZM23.7927 44.5178C27.4516 44.5178 30.8095 43.2933 32.9718 41.4646C34.0693 41.7927 35.4742 42.3204 36.3606 42.9751C37.119 43.535 37.0244 44.1059 36.8875 44.3362C36.2874 45.3491 26.5919 44.9831 23.7927 44.6678V44.5178Z"
                fill=var(--text-primary) />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M36.3386 20.9326C34.6979 21.3809 29.856 22.5505 23.8144 22.5914H23.7698C17.5753 22.5491 12.6423 21.3214 11.1274 20.8999C10.816 20.8129 10.6458 20.6334 10.6458 20.6334C10.644 20.5785 10.6207 19.6503 10.6207 19.171C10.6207 11.1055 14.4284 3.00029 23.7922 3C33.1561 3.00029 36.9635 11.1052 36.9635 19.1713C36.9635 19.65 36.9402 20.5785 36.9387 20.6337C36.9387 20.6337 36.7297 20.8255 36.3386 20.9326ZM38.8284 25.3504C39.3462 26.7001 39.8573 28.1055 40.2318 29.3107C42.0176 35.0578 41.4388 37.4364 40.9986 37.4898C40.0532 37.6039 37.3187 33.1634 37.3187 33.1634C37.3187 37.6757 33.2448 44.604 23.916 44.6677H23.6685C14.3394 44.604 10.2655 37.6757 10.2655 33.1634C10.2655 33.1634 7.53131 37.6039 6.58588 37.4895C6.14542 37.4364 5.5666 35.0581 7.35268 29.3107C7.72717 28.1058 8.23827 26.7001 8.75609 25.3504C8.75609 25.3504 9.10519 25.3285 9.28207 25.3795C10.7319 25.798 12.2762 26.1689 13.8447 26.4792C13.5776 28.1343 13.4249 30.1827 13.5692 32.6021C13.9533 39.0363 17.7745 43.081 23.6727 43.1394H23.9121C29.8106 43.081 33.6314 39.0363 34.0161 32.6021C34.1604 30.1823 34.0075 28.1345 33.7402 26.4793C35.3363 26.1633 36.9076 25.7848 38.3798 25.3571C38.5307 25.3136 38.8284 25.3504 38.8284 25.3504ZM33.7402 26.4793C30.3004 27.1601 26.7448 27.5502 23.8144 27.5147H23.7698C20.8396 27.5498 17.2841 27.1598 13.8447 26.4792C13.8586 26.3929 13.8728 26.3076 13.8874 26.2234C17.3136 26.8989 20.8513 27.2853 23.769 27.2503H23.8137L23.814 27.25C26.7323 27.2856 30.2709 26.8989 33.6974 26.2231C33.712 26.3074 33.7262 26.3928 33.7402 26.4793ZM18.0376 11.6868C18.1059 13.5266 19.1912 14.9735 20.4615 14.916C21.7309 14.8594 22.7044 13.3208 22.6349 11.4802C22.566 9.6398 21.4811 8.19348 20.2122 8.2504C18.9419 8.30791 17.9687 9.84646 18.0376 11.6868ZM27.1253 14.916C28.3957 14.9735 29.4809 13.5263 29.5489 11.6868C29.6181 9.84646 28.6449 8.30791 27.3746 8.2504C26.1055 8.19378 25.0208 9.64009 24.9519 11.4805C24.8825 13.3208 25.8556 14.8591 27.1253 14.916ZM23.8148 15.9248C28.0469 15.9248 31.4658 16.7625 31.805 17.5141V17.5144C31.821 17.5477 31.8295 17.5841 31.8298 17.621C31.8294 17.6731 31.8131 17.7238 31.7831 17.7663C31.497 18.1835 27.701 20.2436 23.8148 20.2436H23.7692C19.8827 20.2436 16.0867 18.1829 15.8006 17.7663C15.7708 17.7239 15.7545 17.6734 15.7539 17.6216C15.7542 17.5845 15.7627 17.5479 15.7787 17.5144C16.1182 16.7625 19.5368 15.9248 23.7692 15.9248H23.8148Z"
                fill=var(--text-primary) />
              <path
                d="M22.0218 11.7142C22.0799 12.441 21.6812 13.0867 21.1327 13.157C20.5831 13.2277 20.0912 12.6958 20.0329 11.969C19.9754 11.2416 20.3735 10.596 20.9211 10.5259C21.4716 10.4547 21.9643 10.9871 22.0218 11.7139V11.7142ZM25.5117 11.9571C25.624 11.7559 26.3885 10.6984 27.9714 11.0834C28.3874 11.1847 28.5797 11.3336 28.6203 11.392C28.6801 11.4784 28.6968 11.6015 28.6358 11.7673C28.5155 12.096 28.2671 12.087 28.1296 12.0227C28.0406 11.9813 26.9381 11.2463 25.9223 12.3429C25.8523 12.418 25.7274 12.4439 25.6091 12.3546C25.4903 12.2647 25.4416 12.0832 25.5117 11.9571Z"
                fill=var(--text-primary) />
              <path
                d="M15.5039 26.7117V33.0437C15.5039 33.0437 18.4044 33.6286 21.3105 33.2235V27.383C19.4695 27.2788 17.4841 27.0468 15.5039 26.7117Z"
                fill=var(--text-primary) />
              <path
                d="M36.9385 20.6337C36.9385 20.6337 31.2962 22.4148 23.8142 22.4653H23.7695C16.2998 22.4151 10.6648 20.6395 10.6456 20.6337L8.75586 25.35C13.4824 26.775 19.3401 27.6933 23.7695 27.6399H23.8142C28.2436 27.6933 34.101 26.775 38.8282 25.35L36.9385 20.6337Z"
                fill=var(--text-primary) />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="right-column">
      <div class="myarticle">
        <h3 class="myarticle-title title-level-1">我的文章</h3>
        <div class="card-grid">
          <CardComponent v-for="value in articles.myArticles" :key="value.id" :link="'/blog/' + value.id"
            :title="value.title">
            <template #content>
              {{ value.description }}
            </template>
          </CardComponent>
        </div>
      </div>
      <div class="message">
        <div class="message-header">
          <a href="#" class="back-link title-level-2">留言板</a>
        </div>

        <!-- 留言列表：使用 Store 中的 messageList -->
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
                    <path d="M14 19.5V22.5" stroke="#333" stroke-width="4" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M24 19.5V22.5" stroke="#333" stroke-width="4" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M34 19.5V22.5" stroke="#333" stroke-width="4" stroke-linecap="round"
                      stroke-linejoin="round" />
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

          <!-- 留言输入框 -->
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
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import CardComponent from '@/components/CardComponent.vue';
import articles from '@/data/articles';
import { useMessageStore } from '@/stores/messageStore/messageStore';

// 实例化 Pinia Store
const messageStore = useMessageStore();
const currentArticleId = ref<number>(999)
// 响应式数据：评论输入内容
const commentContent = ref('');

// 页面挂载时初始化留言列表（从 localStorage 加载）
onMounted(() => {
  messageStore.initAllMessages();
});

// 发布留言（关联当前文章ID）
const publishComment = () => {
  try {
    messageStore.addMessage(
      commentContent.value,
      currentArticleId.value // 关联当前文章
    )
    commentContent.value = ''
    console.log('留言发布成功！')
  } catch (error) {
    if (error instanceof Error) {
      console.error(`发布失败：${error.message}`)
    }
  }
}
// 仅展示当前文章的留言（通过getter筛选）
const currentArticleMessages = () => {
  return messageStore.getMessagesByArticleId(currentArticleId.value)
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
/* 保留原有样式，新增/修改以下样式 */
.container {
  display: flex;
  gap: 24px;
  padding: 24px;
  max-width: 100vw;
}

.left-column {
  flex: 0 0 20%;
}

.right-column {
  flex: 1;
}

.aboutme {
  text-align: center;
  padding: 24px;
  background: var(--aboutme-bg-color);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 7px 4px 6px 4px rgba(0, 0, 0, 0.1);
}

.avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
}

.name {
  font-size: var(--font-size-4);
  font-weight: bold;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.description {
  color: var(--text-secondary);
  font-size: var(--font-size-2);
  margin-bottom: 16px;
}

.myarticle {
  padding: 20px;
  margin: 20px auto;
  background-color: var(--bg-main);
  border-radius: 10px;
  box-shadow: 7px 4px 6px 4px rgba(0, 0, 0, 0.1);
}

.message {
  padding: 20px;
  background-color: var(--bg-main);
  border-radius: 8px;
  min-height: 200px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    padding: 16px;
  }

  .left-column,
  .right-column {
    flex: 0 0 100%;
    width: 100%;
  }
}

.contact-info {
  margin: 20px 0;
  font-size: 14px;
  color: #333;
}

.social-links {
  display: flex;
  gap: 12px;
  margin: 16px auto;
  justify-content: center;
}

.social-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.social-icon:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.myarticle-title {
  text-align: center;
  margin: 0 auto 20px;
}

.skills {
  color: var(--text-secondary);
  margin-top: 24px;
  text-align: left;
}

.skills h4 {
  font-size: 16px;
  margin-bottom: 12px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
}

.message-form {
  margin-bottom: 32px;
}

.form-group {
  margin-bottom: 16px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-group textarea {
  resize: vertical;
}

.submit-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #359469;
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

.message-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
}

.message-author {
  font-weight: 500;
}

.message-date {
  color: var(--text-primary);
}

.message-header {
  text-align: left;
  margin-bottom: 20px;
}

.back-link {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 14px;
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

/* 操作项样式 */
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



.action-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.action-icon svg {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  transition: fill 0.3s;
}
.comment-section {
  background-color: var(--bg-card);
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.comment-input {
  width: 100%;
  margin-bottom: 16px;
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
