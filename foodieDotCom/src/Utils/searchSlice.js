// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit"


const searchSlice = createSlice({
    name : "search",
    initialState : [],
    reducers : {
        addData : (state, action) => {
            const{query, data} = action.payload
      
            const foundItem = state.find((item) => {
                return item.query == query
            })

            if(foundItem) return

            state.push({query , data})
        }
    }
})


export default searchSlice.reducer
export const {addData} = searchSlice.actions
