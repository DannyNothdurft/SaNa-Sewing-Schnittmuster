import { createSlice } from '@reduxjs/toolkit';
import data from '../data/schnittmuster.json';

export const schnittmusterSlice = createSlice({
    name: 'schnittmuster',
    initialState: {
        value: data,
        submit: "",
        gender: "",
        subcategory: "",
        size: [],
    },
    reducers: {
        setfilter(state, action) {
            state.submit = action.payload;
            console.log(state.submit)
        },
        decrement(state, action) {
            state.value = action.payload;
            console.log(state.value)
        },
        setGender(state, action) {
            state.gender = action.payload;
        },
        setSubcategory(state, action) {
            state.subcategory = action.payload;
        },
        resetet(state, action) {
            state.value = action.payload;
        },
        setKidzSize(state, action) {
            state.size = action.payload
        }
    },
}
)

// Aktionsersteller werden für jede Fallreduktionsfunktion generiert
export const { setfilter, decrement, setGender, setSubcategory, resetet, setKidzSize } = schnittmusterSlice.actions

export default schnittmusterSlice.reducer