import { createSlice } from "@reduxjs/toolkit";

const userSlices = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      // state.pop(action.payload);
      state.splice(action.payload, 1);
    },
    deleteUser(state, action) {
      // return state.filter((user) => user.id !== action.payload);
    },
  },
});

export default userSlices.reducer;

export const { addUser, removeUser } = userSlices.actions;
