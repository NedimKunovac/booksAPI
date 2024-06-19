<template>
  <div>
    <label for="price" class="block text-sm font-medium leading-6 text-gray-900 text-center"
      >SEARCH FOR BOOKS</label
    >
    <div class="relative mt-2 mx-20 rounded-md shadow-sm">
      <input
        type="text"
        v-model="localSearchQuery"
        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Enter book title here"
        @input="$emit('update:searchQuery', localSearchQuery)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  searchQuery: String,
});

const emit = defineEmits(["update:searchQuery"]);

const localSearchQuery = ref(props.searchQuery);

watch(
  () => props.searchQuery,
  (newVal) => {
    localSearchQuery.value = newVal;
  }
);
</script>
