<template>
  <button
    type="button"
    @click="likeAction"
    :class="`border border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center ${
      isLiked ? 'bg-blue-500 text-white ' : 'text-blue-500'
    }`"
  >
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 18 18"
    >
      <path
        d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"
      />
    </svg>
  </button>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useLikeStore } from '../stores/likeStore';

const props = defineProps({
  bookId: Number
});

const likeStore = useLikeStore();

const isLiked = computed(() => likeStore.isLiked(props.bookId));

const likeAction = () => {
  likeStore.likeAction(props.bookId);
};
</script>
