<template>
  <h1 class="text-3xl font-bold underline">BooksAPI</h1>

  <div role="list" class="divide-y divide-gray-100 grid grid-cols-3 mx-20">
    <div
      v-for="book in books"
      :key="book.id"
      class="flex justify-between gap-x-6 py-5 mx-8"
    >
      <BookItem
        :book="book"
        @open-details="openBookDetails(book)"
        @like="likeAction(book)"
      />
    </div>
  </div>

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
import BookItem from "../components/BookItem.vue";

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
