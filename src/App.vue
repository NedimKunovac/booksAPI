<template>
  <h1 class="text-3xl font-bold underline">BooksAPI</h1>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" v-if="selectedBook">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{{ selectedBook.title }}</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">{{ selectedBook.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
          type="button"
          @click="switchLike(selectedBook)"
          :class="`text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 ${selectedBook.isLiked ? 'bg-blue-700' : 'bg-white'}`"
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
          <button @click="closeBookDetails" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>

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
        <button
          type="button"
          @click="switchLike(book)"
          :class="`text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 ${book.isLiked ? 'bg-blue-700' : 'bg-white'}`"
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
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const books = ref([]);
const selectedBook = ref(null)

const getBooks = async () => {
  try {
    const response = await axios.get("https://freetestapi.com/api/v1/books");
    books.value = response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

onMounted(getBooks);

const switchLike = (book) => {
  book.isLiked = !book.isLiked;
};

const openBookDetails = (book) => {
  selectedBook.value = { ...book };
};

// Close modal
const closeBookDetails = () => {
  selectedBook.value = null;
};

</script>
