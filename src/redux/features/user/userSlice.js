import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    name:'Nahid',
    email:'email@gmail.com',
}

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{

    },
});

export default userSlice.reducer;