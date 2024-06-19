<template>
  <button
    @click="previousPage"
    :disabled="currentPage === 1"
    class="mx-2 bg-blue-500 text-white py-1 px-3 rounded disabled:opacity-50"
  >
    Previous
  </button>
  <span>Page {{ currentPage }} of {{ totalPages }}</span>
  <button
    @click="nextPage"
    :disabled="currentPage === totalPages"
    class="mx-2 bg-blue-500 text-white py-1 px-3 rounded disabled:opacity-50"
  >
    Next
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  currentPage: Number,
  totalPages: Number
});

const emit = defineEmits(["previous-page", "next-page"]);

const previousPage = () => {
  emit("previous-page");
};

const nextPage = () => {
  emit("next-page");
};
</script>
