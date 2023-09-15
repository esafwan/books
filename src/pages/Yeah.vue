<template>
  <div class="grid grid-cols-10 gap-4">
    <div v-for="i in 10" :key="i" class="col-span-1">
      <!-- Your content here -->
      <span>{{ i }}</span>
    </div>
  </div>
</template>

<script>
export default {
  // Your component logic here
};
</script>

<style scoped>
/* Your styles here */
</style>
