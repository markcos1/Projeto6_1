import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurantes } from '../pages/Perfil' 

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
    baseUrl: 'https://vercel.app/api/efood'
    }),
    endpoints: (builder) => ({

    getRestaurants: builder.query<Restaurantes[], void>({
        query: () => 'restaurantes'
    })
    })
})

export const { useGetRestaurantsQuery } = api
export default api
