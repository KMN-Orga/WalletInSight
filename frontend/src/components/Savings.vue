<template>
    <div>
        <p>Balance</p>
        <p>Your balance is: {{ balance }} {{ currency }}</p>
    </div>
</template>

<script setup lang="ts">
// Definisci le props
const props = defineProps({
    balance: {
        type: Number,
        default: 0
    },
    currency: {
        type: String,
        default: '€'
    }
});
</script>


