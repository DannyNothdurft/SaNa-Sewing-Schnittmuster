import { configureStore } from '@reduxjs/toolkit';
import schnittmusterReducer from '../reducer/schnittmusterSlice';

export default configureStore({
    reducer: {
        schnittmuster: schnittmusterReducer
    }
})