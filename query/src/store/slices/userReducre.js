import { createSlice } from "@reduxjs/toolkit";

// Create a new slice inside store.js
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

// Export actions
export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
