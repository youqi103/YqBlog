<template>
  <div class="card">
   <h3 class="card-title">

    <a
    :href="link"
    class="title-level-4"
    :target="target || '_blank'"
    :rel="target === '_blank' ? 'noopener noreferrer' : ''"
    >
     {{ title }}
    </a>
   </h3>
   <p class="card-content content-normal">
    <slot name="content"></slot>
   </p>
  </div>
</template>

<script lang='ts' setup>
const props = defineProps({
  link: {
    type:String,
    required: true,
  },
  title: {
    type:String,
    required: true,
  },
  target: {
    type:String,
    default: '_blank'
  }
})
</script>

<style scoped>
.card {
  background-color: var(--card-bg-color);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  box-sizing: border-box;
}

.card:hover {
  transform: translateY(-5px);
 box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15), 0 0 0 2px #66a6ff;
}

.card-title {
  margin-bottom: 10px;
  font-weight: 600;
}

.card-title a {
  text-decoration: none;
  transition: color 0.3s ease;
}

.card-title a:hover {
  color: #66a6ff;
}

.card-content {
  line-height: 1.6;
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .card {
    padding: 15px;
  }

  .card-title {
    font-size: var(--font-size-3);
  }
}
</style>
