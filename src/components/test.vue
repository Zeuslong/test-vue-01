<template>
  <div class="table-container">
    <div class="table-wrapper">
      <table>
        <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ item }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodolistDelete222',
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
      currentIndex: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }, 3000);
  }
}
</script>

<style>
.table-container {
  height: 200px;
  overflow: hidden;
}

.table-wrapper {
  animation: slide-up 1s linear infinite;
}

@keyframes slide-up {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
