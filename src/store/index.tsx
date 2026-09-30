import { configureStore } from '@reduxjs/toolkit'


export const Store = configureStore({
    reducer: {}
})

export type RootReducer = ReturnType<typeof Store.getState>