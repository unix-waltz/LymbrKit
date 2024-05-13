import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from './Slice/AuthSlice'
const Store = configureStore({
    reducer:{
        authslice:AuthSlice
    }
})
export default Store