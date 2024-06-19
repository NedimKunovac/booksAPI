import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCommentsStore = defineStore('comments', () => {
  const comments = ref([]);
  
  const addComment = (bookId, name, text) => {
    if (name.trim() && text.trim()) {
      comments.value.push({
        bookId,
        name,
        text,
        timestamp: new Date().toLocaleString()
      });
      saveComments();
    }
  };

  const getCommentsByBookId = (bookId) => {
    return comments.value.filter(comment => comment.bookId === bookId);
  };

  const saveComments = () => {
    localStorage.setItem('comments', JSON.stringify(comments.value));
  };

  const loadComments = () => {
    const savedComments = JSON.parse(localStorage.getItem('comments'));
    if (savedComments) {
      comments.value = savedComments;
    }
  };

  return { comments, getCommentsByBookId, addComment, loadComments };
});