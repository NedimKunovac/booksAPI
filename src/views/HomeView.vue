<template>
  <h1 class="text-3xl font-bold underline">BooksAPI</h1>

  <ul role="list" class="divide-y divide-gray-100 grid grid-cols-3 mx-20">
    <li
      v-for="book in books"
      :key="book.id"
      class="flex justify-between gap-x-6 py-5 mx-8"
      @click="openBookDetails(book)"
    >
      <div class="flex min-w-0 gap-x-4">
        <img
          class="h-16 w-16 flex-none rounded-full bg-gray-50"
          :src="book.cover_image"
          alt=""
        />
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">
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
        <LikeButton 
          :isLiked="book.isLiked" 
          @like="likeAction(book)" 
        />
      </div>
    </li>
  </ul>

  <BookModal
    v-if="selectedBook"
    :book="selectedBook"
    @close-details="closeBookDetails"
    @like="likeAction(selectedBook)"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import LikeButton from "../components/LikeButton.vue";
import BookModal from "../components/BookModal.vue";

const books = ref([]);
const selectedBook = ref(null);

const getBooks = async () => {
  try {
    const response = await axios.get("https://freetestapi.com/api/v1/books");
    books.value = response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

onMounted(getBooks);

const likeAction = (book) => {
  book.isLiked = !book.isLiked;
};

const openBookDetails = (book) => {
  selectedBook.value = { ...book };
};

const closeBookDetails = () => {
  selectedBook.value = null;
};
</script>
