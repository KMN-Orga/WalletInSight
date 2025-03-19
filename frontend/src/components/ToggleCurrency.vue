<script setup lang="ts">
const props = defineProps({
    currency: {
        type: String,
        default: '€'
    }
});

// Definisco l'emit per comunicare col componente padre
const emit = defineEmits(['update:currency']);

const toggleCurrency = () => {
    // Emetto un evento per aggiornare la valuta nel componente padre
    emit('update:currency', props.currency === '€' ? '$' : '€');
};
</script>

<template>
    <div>
        <button @click="toggleCurrency" class="toggle-button">Toggle Currency</button>
    </div>
</template>

<style scoped>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .toggle-button {
        transition: transform 0.5s ease-in-out;
    }

</style>
