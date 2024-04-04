import { configureStore } from '@reduxjs/toolkit';
import PostsSlice from './PostsSlice';

const store = configureStore({
  reducer: {
    posts: PostsSlice.reducer, // Add your posts slice reducer
  },
});

export default store;
