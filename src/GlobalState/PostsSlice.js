import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [], // Array of post objects
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    likePost(state, action) {
      const postId = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.likes++;
      }
    },
  },
});

export default postsSlice.reducer;  // Export the reducer
