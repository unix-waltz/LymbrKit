import {createSlice} from '@reduxjs/toolkit'
const initialState ={
    isInitialized: false,
    isAuthenticated: false,
    accessToken: "",
    user: null,  
}
const authSlice = createSlice({
    name:'authslice',
  initialState,
    reducers:{
        Init:(state,action)=>{
            state.isInitialized= true;
             state.isAuthenticated= action.payload.isAuthenticated;
             state.accessToken= action.payload.accessToken;
             state.user= action.payload.user;
        },
        Login:(state,action)=>{
            state.isAuthenticated= true;
            state.accessToken= action.payload.accessToken;
            state.user= action.payload.user;
        },
        Refresh:(state,action)=>{
            state.isAuthenticated= action.payload.isAuthenticated;
            state.accessToken= action.payload.accessToken;
            state.user= action.payload.user;
        },
        Logout:(state)=>{
            state.isAuthenticated= false;
            state.accessToken= "";
            state.user= null;
        },
    }
})
export const { Init,Login,Logout,Refresh} = authSlice.actions;
export default authSlice.reducer;