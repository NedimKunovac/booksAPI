<template>
  <h1 class="text-3xl font-bold underline">BooksAPI</h1>
  <ul role="list" class="divide-y divide-gray-100 grid grid-cols-3 mx-20">
    <li
      v-for="book in books"
      :key="book.id"
      class="flex justify-between gap-x-6 py-5 mx-8"
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
          class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
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

const getBooks = async () => {
  try {
    const response = await axios.get("https://freetestapi.com/api/v1/books");
    books.value = response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

onMounted(getBooks);
</script>
