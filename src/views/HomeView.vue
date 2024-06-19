<template>
  <h1 class="text-3xl font-bold underline text-center bg-blue-300 py-4 hover:text-blue-700" @click="$router.push('/saved')">Books API</h1>
  <SearchBar v-model:searchQuery="searchQuery" />

  <div
    v-if="paginatedBooks.length > 0"
    role="list"
    class="divide-y divide-gray-100 grid xl:grid-cols-3 mx-20 sm:grid-cols-1"
  >
    <div
      v-for="book in paginatedBooks"
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
  <p v-else class="text-gray-500 mx-24 text-l mt-2 text-center">No books found..</p>

  <div class="flex justify-center items-center mt-6" v-if="totalPages > 1">
    <PaginationButtons
      :currentPage="currentPage"
      :totalPages="totalPages"
      @previous-page="previousPage"
      @next-page="nextPage"
    />
  </div>

  <BookModal
    v-if="selectedBook"
    :book="selectedBook"
    @close-details="closeBookDetails"
    @like="likeAction(selectedBook)"
  />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

import SearchBar from "../components/SearchBar.vue";
import LikeButton from "../components/LikeButton.vue";
import BookModal from "../components/BookModal.vue";
import BookItem from "../components/BookItem.vue";
import PaginationButtons from "../components/PaginationButtons.vue";

const books = ref([]);
const selectedBook = ref(null);
const searchQuery = ref("");

const currentPage = ref(1);
const itemsPerPage = ref(12);

const getBooks = async () => {
  try {
    const response = await axios.get("https://freetestapi.com/api/v1/books");
    books.value = response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

onMounted(getBooks);

const openBookDetails = (book) => {
  selectedBook.value = { ...book };
};

const closeBookDetails = () => {
  selectedBook.value = null;
};

const filteredBooks = computed(() => {
  return books.value.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const totalPages = computed(() => {
  return Math.ceil(filteredBooks.value.length / itemsPerPage.value);
});

const paginatedBooks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredBooks.value.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};
</script>