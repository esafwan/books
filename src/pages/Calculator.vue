<template>
  <div class="calculator">
    <input v-model="num1" type="number" placeholder="Enter first number" />
    <input v-model="num2" type="number" placeholder="Enter second number" />
    <select v-model="operation">
      <option>Add</option>
      <option>Subtract</option>
      <option>Multiply</option>
      <option>Divide</option>
    </select>
    <button @click="calculate">Calculate</button>
    <div v-if="result !== null">Result: {{ result }}</div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const num1 = ref(0);
    const num2 = ref(0);
    const operation = ref('Add');
    const result = ref(null);

    const calculate = () => {
      switch (operation.value) {
        case 'Add':
          result.value = num1.value + num2.value;
          break;
        case 'Subtract':
          result.value = num1.value - num2.value;
          break;
        case 'Multiply':
          result.value = num1.value * num2.value;
          break;
        case 'Divide':
          if (num2.value !== 0) {
            result.value = num1.value / num2.value;
          } else {
            alert('Cannot divide by zero');
          }
          break;
      }
    };

    return { num1, num2, operation, calculate, result };
  },
};
</script>

<style scoped>
/* Add your Material Design styles here */
</style>
