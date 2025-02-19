import { configureStore } from "@reduxjs/toolkit";
import  userSlices  from "./slices/UserSlice";

const store = configureStore ({
     reducer: 
     {
        user: userSlices,
     },
    });
    export default store;