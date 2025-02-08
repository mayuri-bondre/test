import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    data:[],
    status:'idel',
    error:null
}

export const getdata=createAsyncThunk('fetch/data',async()=>{
    const resp=await fetch('https://jsonplaceholder.typicode.com/users')
    const maindata=await resp.json()
    return maindata
})
const apiSlice=createSlice({
name:'apislice',
initialState,
reducers:{
    useradd(state,action){
        state.data.push(action.payload)
    },
    userdelete(state,action){
       state.data= state.data.filter((user)=>user.id!==action.payload)
    },
    useredit(state,action){
        const index=state.data.findIndex((user)=>user.id==action.payload.id)
        if(index!==-1){
            state.data[index]=action.payload
        }
    }
},
extraReducers:(builder)=>{
builder.addCase(getdata.pending,(state,action)=>{
    state.status='loading'
    
})
builder.addCase(getdata.fulfilled,(state,action)=>{
    state.status='fulfilled'
    state.data=action.payload
})
builder.addCase(getdata.rejected,(state,action)=>{
    state.status='failed'
    state.error=action.error.message
})
}
})

export const {useradd,userdelete,useredit}=apiSlice.actions;
export default apiSlice.reducer;