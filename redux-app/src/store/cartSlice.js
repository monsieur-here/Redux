import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action){
            state.push(action.payload)
        },
        removeCart(state, action){
            return state.filter((item) => item.id !== action.payload.id)
        },
    }
}
)

// Other ways of destructuring a prop
// 1.
// const addAction = cartSlice.actions.add

// 2.
// export const { add: addAction }

// Better way and also Redux will auto-create these actions and reducer mentioned
export const { addToCart, removeCart } = cartSlice.actions

export default cartSlice.reducer