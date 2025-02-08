import { configureStore } from "@reduxjs/toolkit";
import userslice from './Slice/userSlice'
const Store=configureStore({
    reducer:{
        
        apidata:userslice,
    }
})
export default Store;