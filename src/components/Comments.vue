<template>
  <section class="bg-blue-500 py-4 antialiased">
    <div class="max-w-2xl mx-4 px-4">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold text-white">
          Comments
        </h2>
      </div>
      <form class="my-1">
        <div
          class="py-1 px-4 mb-2 bg-white rounded-lg rounded-t-lg border border-gray-200"
        >
          <input
            v-model="userName"
            class="w-full outline-none rounded-md text-gray-900 placeholder:text-gray-400 text-sm leading-6"
            placeholder="Enter your name"
            required
          />
        </div>
        <div
          class="py-2 px-4 mb-2 bg-white rounded-lg rounded-t-lg border border-gray-200"
        >
          <label for="comment" class="sr-only">Your comment</label>
          <textarea
            id="comment"
            rows="2"
            v-model="newComment"
            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <button
          type="button"
          @click="handleAddComment"
          class="flex item-center bg-white py-2 px-4 mb-4 text-xs font-medium text-center text-blue-500 bg-primary-700 rounded-lg hover:bg-primary-800"
        >
          Post comment
        </button>
      </form>
      <div
        v-for="(comment, index) in bookComments"
        :key="index"
        class="p-2 text-base bg-white rounded-lg"
      >
        <footer class="flex justify-between items-center mb-2">
          <div class="flex items-center">
            <p
              class="inline-flex items-center mr-3 text-sm text-gray-400 font-semibold"
            >
              {{ comment.name }}
            </p>
            <p class="text-sm text-gray-400">
              <time>{{ comment.timestamp }}</time>
            </p>
          </div>
        </footer>
        <p class="text-gray-500 dark:text-gray-400">
          {{ comment.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, defineProps, computed } from "vue";
import { useCommentsStore } from "../stores/commentStore";

const props = defineProps({
  bookId: Number,
});

const commentsStore = useCommentsStore();
const { getCommentsByBookId, addComment, loadComments } = commentsStore;

const userName = ref("");
const newComment = ref("");

const bookComments = computed(() => getCommentsByBookId(props.bookId));

const handleAddComment = () => {
  addComment(props.bookId, userName.value.trim(), newComment.value.trim());
  newComment.value = "";
};

onMounted(() => {
  loadComments();
});
</script>
