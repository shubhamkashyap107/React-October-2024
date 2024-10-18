import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        emptyCart(state, action){
            return []
        },



        addItem : (state, action) => {
            // state.push(action.payload)

            let foundItem = state.find((item) => {
                return item.description == action.payload.description
            })

            if(!foundItem)
            {
                state.push({...action.payload, quantity : 1})
            }
            else
            {
                foundItem.quantity++;
            }
        },


        removeItem : (state, action) => {

            let foundItem = state.find((item) => {
                return item.description == action.payload.description
            })
            if(foundItem)
            {
                if(foundItem.quantity >= 2)
                {
                    foundItem.quantity--;
                }
                else if(foundItem.quantity == 1)
                {
                    let newArr = state.filter((item) => {
                        return item !== foundItem
                    })  

                    // state = newArr
                    return newArr
                }
            }
        }
    }
})


export default cartSlice.reducer
export const{addItem, removeItem, emptyCart} = cartSlice.actions