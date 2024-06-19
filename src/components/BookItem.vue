<template>
  <div class="flex min-w-0 gap-x-4">
    <img
      class="h-16 w-16 flex-none rounded-full bg-gray-50"
      :src="book.cover_image"
      alt=""
    />
    <div class="min-w-0 flex-auto">
      <p
        @click="openDetails"
        class="text-sm font-semibold leading-6 text-gray-900"
      >
        {{ book.title }}
      </p>
      <p class="mt-1 truncate text-xs leading-5 text-gray-500">
        {{ book.author }}
      </p>
    </div>
  </div>
  <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
    <p class="text-sm leading-6 text-gray-900">
      {{ book.publication_year }}
    </p>
    <LikeButton :isLiked="book.isLiked" @like="$emit('like')" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import axios from "axios";
import LikeButton from "./LikeButton.vue";

const props = defineProps({
  book: Object,
  isLiked: Boolean,
});

const emit = defineEmits(["open-details", "like"]);

const openDetails = () => {
  emit("open-details");
};

</script>
