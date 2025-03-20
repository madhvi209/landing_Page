import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Ensure this path is correct

const store = configureStore({
    reducer: {
        user: userReducer, // Add the user slice reducer
    },
});

export default store;
