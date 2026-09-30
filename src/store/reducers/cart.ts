import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import Restaurant from '../../models/Restaurant'
import { Product } from '../../pages/Perfil'

type CartState = {
    items: Product[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Product>) => {
            state.items.push(action.payload)
        }
    }
})

export const {add} = cartSlice.actions
export default cartSlice.reducer