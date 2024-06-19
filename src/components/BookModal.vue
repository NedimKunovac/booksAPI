<template>
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">

  <div class="fixed inset-0 w-screen overflow-y-scroll">
    <div
      class="flex min-h-full justify-center p-4 text-center items-center"
    >
      <div
        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-lg"
      >
        <div class="bg-white p-4">
          <div class="flex items-start">
            <div class="mt-3 mx-4 text-left">
              <h3
                class="text-base font-semibold leading-6 text-gray-900"
                id="modal-title"
              >
                {{ book.title }}
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  {{ book.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white pb-3 flex flex-row-reverse mx-4 px-4">
          <LikeButton :bookId="book.id" />
          <button
            @click="closeDetails"
            type="button"
            class="mx-4 align-middle inline-flex justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-0 w-auto"
          >
            Cancel
          </button>
        </div>
        <Comments :bookId="book.id"/>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import LikeButton from "./LikeButton.vue";
import Comments from "./Comments.vue";

const props = defineProps({
  book: Object,
});

const emit = defineEmits(["close-details"]);

const closeDetails = () => {
  emit("close-details");
};
</script>
