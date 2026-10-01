import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../pages/Perfil'

type CartState = {
    items: Product[] 
    isOpen: boolean  
}

const initialState: CartState = {
    items: [],
    isOpen: false 
    }

    const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    add: (state, action: PayloadAction<Product>) => {
        state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
        state.isOpen = true
    },
    close: (state) => {
        state.isOpen = false
    }
    }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
