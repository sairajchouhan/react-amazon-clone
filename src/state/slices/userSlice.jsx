import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {},
});

export const {} = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
