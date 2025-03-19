<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Header from './components/Header.vue'
import Savings from './components/Savings.vue'
import ToggleCurrency from './components/ToggleCurrency.vue'

const balance = ref(100);
const currency = ref('€');

onMounted(async () => {
  type Balance = {
    data: {
    balance: number;
    }
  }
  const response: Balance = await axios.get('http://localhost:3001/api/balance/get-actual-balance', {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
  console.log(response.data);
  balance.value = response.data.balance;
});
</script>

<template>
  <header>
    <Header />
  </header>

  <main>
    <Savings :balance="balance" :currency="currency">
    </Savings>
    <ToggleCurrency v-model:currency="currency" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
