import { defineStore } from 'pinia';

export const useLikeStore = defineStore('like', {
  state: () => ({
    likedBooks: new Set()
  }),
  actions: {
    likeAction(bookId) {
      if (this.likedBooks.has(bookId)) {
        this.likedBooks.delete(bookId);
      } else {
        this.likedBooks.add(bookId);
      }
    },
    isLiked(bookId) {
      return this.likedBooks.has(bookId);
    }
  }
});