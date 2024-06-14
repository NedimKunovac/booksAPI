<template>
  <h1 class="text-3xl font-bold underline">BooksAPI</h1>
  <ul class="grid grid-cols-3">
      <li v-for="book in books" :key="book.id"><img :src="book.cover_image" class="h-24 w-24"></img>{{ book.title }} by {{ book.author }} {{ book.publication_year }}</li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from "axios";

const books = ref([]);

const getBooks = async () => {
  try {
    const response = await axios.get('https://freetestapi.com/api/v1/books');
    books.value = response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

onMounted(getBooks);

</script>