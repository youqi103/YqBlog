import { defineStore } from 'pinia'

export interface MessageItem {
  articleId: number
  id: number
  username: string
  avatar: string
  content: string
  time: string
  commentCount: number
  likeCount: number
  collectCount: number
  isLiked: boolean
  isCollected: boolean
}

export const useMessageStore = defineStore('message', {
  state: () => ({
    // 始终保存【所有文章】的全部留言，不做过滤
    allMessages: [] as MessageItem[],
    defaultUser: {
      username: '访客',
      avatar: 'YouqiBlog/statics/images/avatar.jpg',
    },
    defaultArticleId: 1,
  }),

  actions: {
    /**
     * 初始化：加载【全部】留言（不再过滤，仅加载所有数据）
     */
    initAllMessages() {
      try {
        const savedMessages = localStorage.getItem('messageList')
        if (savedMessages) {
          const parsedList = JSON.parse(savedMessages) as MessageItem[]
          // 补全缺失字段，保证数据完整性
          this.allMessages = parsedList.map((item) => ({
            ...item,
            isLiked: item.isLiked ?? false,
            isCollected: item.isCollected ?? false,
            articleId: item.articleId ?? this.defaultArticleId,
          }))
        } else {
          // 初始默认留言（关联默认文章ID）
          this.allMessages = [
            {
              articleId: this.defaultArticleId,
              id: 1,
              username: '忧戚',
              avatar: 'YouqiBlog/statics/images/avatar.jpg',
              content: '欢迎大家在此留言......',
              time: new Date().toLocaleString(),
              commentCount: 0,
              likeCount: 0,
              collectCount: 0,
              isLiked: false,
              isCollected: false,
            },
          ]
          this.saveToLocalStorage()
        }
      } catch (error) {
        console.error('加载留言列表失败:', error)
        this.allMessages = [
          {
            articleId: this.defaultArticleId,
            id: 1,
            username: '忧戚',
            avatar: 'YouqiBlog/statics/images/avatar.jpg',
            content: '欢迎大家在此留言......',
            time: new Date().toLocaleString(),
            commentCount: 0,
            likeCount: 0,
            collectCount: 0,
            isLiked: false,
            isCollected: false,
          },
        ]
      }
    },

    /**
     * 添加新留言（关联指定文章，新增到全部留言列表）
     * @param content 留言内容
     * @param articleId 关联的文章ID（必填）
     * @param username 用户名（可选）
     * @param avatar 头像（可选）
     */
    addMessage(content: string, articleId: number, username?: string, avatar?: string) {
      const trimmedContent = content.trim()
      if (!trimmedContent) {
        throw new Error('留言内容不能为空！')
      }
      if (!articleId || typeof articleId !== 'number') {
        throw new Error('文章ID必须为有效数字！')
      }

      const formatCurrentTime = (): string => {
        const now = new Date()
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`
      }

      const newMessage: MessageItem = {
        articleId,
        id: Date.now(),
        username: username || this.defaultUser.username,
        avatar: avatar || this.defaultUser.avatar,
        content: trimmedContent,
        time: formatCurrentTime(),
        commentCount: 0,
        likeCount: 0,
        collectCount: 0,
        isLiked: false,
        isCollected: false,
      }

      // 新增到全部留言列表（顶部）
      this.allMessages.unshift(newMessage)
      this.saveToLocalStorage()
      return newMessage
    },

    /**
     * 更新评论数
     * @param messageId 留言ID
     */
    updateCommentCount(messageId: number, increment: boolean = true) {
      const message = this.allMessages.find((item) => item.id === messageId)
      if (message) {
        if (increment) {
          message.commentCount += 1
        } else if (message.commentCount > 0) {
          message.commentCount -= 1
        }
        this.saveToLocalStorage()
      }
    },

    /**
     * 切换点赞状态
     * @param messageId 留言ID
     */
    toggleLike(messageId: number) {
      const message = this.allMessages.find((item) => item.id === messageId)
      if (message) {
        message.likeCount = message.isLiked ? message.likeCount - 1 : message.likeCount + 1
        message.isLiked = !message.isLiked
        this.saveToLocalStorage()
      }
    },

    /**
     * 切换收藏状态
     * @param messageId 留言ID
     */
    toggleCollect(messageId: number) {
      const message = this.allMessages.find((item) => item.id === messageId)
      if (message) {
        message.collectCount = message.isCollected
          ? message.collectCount - 1
          : message.collectCount + 1
        message.isCollected = !message.isCollected
        this.saveToLocalStorage()
      }
    },

    /**
     * 删除单条留言
     * @param messageId 留言ID
     */
    deleteMessage(messageId: number) {
      const index = this.allMessages.findIndex((item) => item.id === messageId)
      if (index !== -1) {
        this.allMessages.splice(index, 1)
        this.saveToLocalStorage()
      }
    },

    /**
     * 批量删除指定文章的所有留言
     * @param articleId 文章ID
     */
    deleteAllMessagesByArticleId(articleId: number) {
      this.allMessages = this.allMessages.filter((item) => item.articleId !== articleId)
      this.saveToLocalStorage()
    },

    /**
     * 保存【全部】留言到localStorage（关键：不再保存过滤后的列表）
     */
    saveToLocalStorage() {
      try {
        // 保存全部留言，而非单文章的
        localStorage.setItem('messageList', JSON.stringify(this.allMessages))
      } catch (error) {
        console.error('保存留言列表失败:', error)
      }
    },
  },

  getters: {
    // 获取所有留言总数
    totalMessageCount: (state) => state.allMessages.length,

    // 核心：根据文章ID筛选留言（仅展示用，不修改原始数据）
    getMessagesByArticleId: (state) => {
      return (articleId: number) => {
        return state.allMessages.filter((item) => item.articleId === articleId)
      }
    },

    // 指定文章的留言总数
    getMessageCountByArticleId: (state) => {
      return (articleId: number) => {
        return state.allMessages.filter((item) => item.articleId === articleId).length
      }
    },

    // 指定文章的已收藏留言
    getCollectedMessagesByArticleId: (state) => {
      return (articleId: number) => {
        return state.allMessages.filter((item) => item.articleId === articleId && item.isCollected)
      }
    },

    // 根据ID查找单条留言（跨文章）
    getMessageById: (state) => {
      return (id: number) => state.allMessages.find((item) => item.id === id)
    },
  },
})
