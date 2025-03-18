import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    task:[],
}
const tasksSlice = createSlice({
    name:'taskSlice',
    initialState,
    reducer:{},
});

export default tasksSlice.reducer;