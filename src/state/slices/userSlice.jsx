import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { currentUser: null },
  reducers: {
    SET_USER: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { SET_USER, REMOVE_USER } = userSlice.actions;
export const selectUser = (state) => state.user.currentUser;

export default userSlice.reducer;
