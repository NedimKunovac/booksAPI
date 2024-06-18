<template>
    <h1 class="text-3xl font-bold underline">Books in database</h1>
    <SearchBar v-model:searchQuery="searchQuery"/>
  
    <div role="list" class="divide-y divide-gray-100 grid grid-cols-3 mx-20">
      <div
        v-for="book in filteredBooks"
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
  import { ref, computed, onMounted } from "vue";
  import axios from "axios";
  
  import SearchBar from "../components/SearchBar.vue";
  import LikeButton from "../components/LikeButton.vue";
  import BookModal from "../components/BookModal.vue";
  import BookItem from "../components/BookItem.vue";
  
  const books = ref([]);
  const selectedBook = ref(null);
  const searchQuery = ref('');
  
  const getBooks = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/books");
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
  
  const filteredBooks = computed(() => {
    return books.value.filter(book => book.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
  });
  </script>