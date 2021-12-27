import { createSlice } from "@reduxjs/toolkit";

// Slice is like a layer of the store. Kind of like modules in vuex.

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // These are actions. In order to interact the store is to dispatch actions
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead
// This is like getters in vuex
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
