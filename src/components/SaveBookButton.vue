<template>
    <button @click="saveBook" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Save
</button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  book: {
    type: Object,
    required: true
  }
});

// WIP

const emit = defineEmits(['save-book']);

const saveBook = () => {
  emit('save-book', props.book);
};
</script>